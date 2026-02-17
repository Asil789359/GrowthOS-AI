from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.ai_content import ai_content_service

router = APIRouter(prefix="/api/v1/content", tags=["Content Studio"])

class ContentRequest(BaseModel):
    content_type: str
    prompt: str

class ContentResponse(BaseModel):
    content: str
    status: str

@router.post("/generate", response_model=ContentResponse)
async def generate_content(request: ContentRequest):
    try:
        content = await ai_content_service.generate_content(request.content_type, request.prompt)
        return ContentResponse(content=content, status="success")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
