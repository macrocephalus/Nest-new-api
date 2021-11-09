import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    NewsModule,
    MongooseModule.forRoot(
      'mongodb+srv://bogdanchik:v1RvyzHFrkPndQnf@cluster0.cpiwy.mongodb.net/site?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
