from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from services.payment import payment_service
from pydantic import BaseModel
from models import models

router = APIRouter(prefix="/api/v1/payments", tags=["Payments"])

class CreateOrderRequest(BaseModel):
    plan_name: str
    amount: int  # in INR

class VerifyPaymentRequest(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str

@router.post("/create-order")
async def create_order(request: CreateOrderRequest, db: Session = Depends(get_db)):
    # In a real app, you'd get the user from the JWT token
    # For now, we'll assume a dummy user_id = 1
    
    amount_paisa = request.amount * 100
    try:
        razor_order = payment_service.create_order(amount_paisa)
        
        # Save order to DB
        db_payment = models.Payment(
            user_id=1,
            amount=request.amount,
            razorpay_order_id=razor_order['id'],
            status="created"
        )
        db.add(db_payment)
        db.commit()
        
        return razor_order
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/verify")
async def verify_payment(request: VerifyPaymentRequest, db: Session = Depends(get_db)):
    is_valid = payment_service.verify_payment(
        request.razorpay_order_id,
        request.razorpay_payment_id,
        request.razorpay_signature
    )
    
    if is_valid:
        # Update payment status in DB
        payment = db.query(models.Payment).filter(
            models.Payment.razorpay_order_id == request.razorpay_order_id
        ).first()
        
        if payment:
            payment.status = "captured"
            payment.razorpay_payment_id = request.razorpay_payment_id
            db.commit()
            
            # Here you would also update the user's subscription
            return {"status": "success", "message": "Payment verified"}
    
    raise HTTPException(status_code=400, detail="Invalid payment signature")
