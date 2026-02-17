import asyncio
import random

class AIContentService:
    async def generate_content(self, content_type: str, prompt: str):
        # Simulate LLM thinking time
        await asyncio.sleep(2)
        
        templates = {
            "blog": f"# AI-Generated Blog: {prompt[:30]}...\n\nThis is a sample blog post generated for the prompt: {prompt}. \n\n## Section 1\nAI is scaling marketing exponentially.",
            "email": f"Subject: Elevate your Growth with GrowthOS AI\n\nHi there,\n\nWe saw you were interested in {prompt}. Here is how we can help...",
            "ad": f"Ad Headline: Stop Manual Marketing. Start Scaling.\n\nDescription: Use our AI native stack for {prompt}. Try GrowthOS AI today!",
            "landing": f"Hero: {prompt}\nSubheader: The AI Operating System for Modern Brands."
        }
        
        return templates.get(content_type, "Content type not supported yet.")

ai_content_service = AIContentService()
