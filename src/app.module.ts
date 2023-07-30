import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CompanyController } from './company/controller/company.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'employee-management'
    }),
    CompanyModule
  ],
  controllers: [

  ],
  providers: [

  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      CompanyController
    );
  }
}
