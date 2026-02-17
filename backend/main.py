from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import content, payment, stats

from database import engine, Base

# Create database tables
try:
    Base.metadata.create_all(bind=engine)
    print("Database connected and tables created.")
except Exception as e:
    print(f"Database connection failed: {e}. Running without DB features.")


app = FastAPI(
    title="GrowthOS AI API",
    description="The all-in-one AI marketing operating system API",
    version="1.0.0"
)


# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the actual frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(content.router)
app.include_router(payment.router)
app.include_router(stats.router)



@app.get("/")
async def root():
    return {
        "message": "Welcome to GrowthOS AI API", 
        "version": "1.0.0",
        "status": "healthy"
    }

@app.get("/api/v1/health")
async def health_check():
    return {"status": "ok", "engine": "GrowthOS AI 1.0"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8008)


