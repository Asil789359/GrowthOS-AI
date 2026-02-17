from fastapi import APIRouter
from services.stats import stats_service

router = APIRouter(prefix="/api/v1/stats", tags=["Statistics"])

@router.get("/live")
async def get_live_stats():
    return await stats_service.get_live_metrics()
