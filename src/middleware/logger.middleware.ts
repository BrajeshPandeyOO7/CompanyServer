import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: unknown, res: unknown, next: NextFunction) {
        console.log('response');
        
        next();
    }
}