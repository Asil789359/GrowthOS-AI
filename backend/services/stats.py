import random
import asyncio
from datetime import datetime

class StatsService:
    def __init__(self):
        self.total_traffic = 124500
        self.conversions = 8920
        self.ai_tokens_used = 452000

    async def get_live_metrics(self):
        # Simulate real-time fluctuations
        self.total_traffic += random.randint(5, 50)
        self.conversions += random.randint(0, 5 if random.random() > 0.7 else 0)
        self.ai_tokens_used += random.randint(100, 1000)
        
        return {
            "traffic": self.total_traffic,
            "conversions": self.conversions,
            "ai_usage": self.ai_tokens_used,
            "timestamp": datetime.now().isoformat()
        }

stats_service = StatsService()
