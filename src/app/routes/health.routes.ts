import { Router, Response, Request } from 'express';
import { HealthService } from '../service/health.service';

const healthRouter = Router();
const healthService = new HealthService();

healthRouter.get("/", (_req: Request, res: Response) => {
  const payload = healthService.returnOk();
  res.json(payload);
});

export default healthRouter;
