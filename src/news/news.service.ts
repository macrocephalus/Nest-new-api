import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectModel } from '@nestjs/mongoose';
import { News, NewsDocument } from './shemas/news.shema';
import { Model } from 'mongoose';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<NewsDocument>) {}

  create(createNewsDto: CreateNewsDto): Promise<News> {
    const newNews = new this.newsModel(createNewsDto);
    return newNews.save();
  }

  async findAll(): Promise<News[]> {
    return this.newsModel.find().exec();
  }

  async findOne(id: string) {
    return this.newsModel.findById(id).exec();
  }

  async update(id: string, updateNewsDto: UpdateNewsDto): Promise<News> {
    const updateNews = await this.newsModel.findByIdAndUpdate(
      id,
      updateNewsDto,
    );
    if (!updateNews) {
      throw new NotFoundException();
    }

    return updateNews;
  }

  async remove(id: string): Promise<News> {
    const removeNews = await this.newsModel.findByIdAndRemove(id);
    if (!removeNews) {
      throw new NotFoundException();
    }

    return removeNews;
  }
}
