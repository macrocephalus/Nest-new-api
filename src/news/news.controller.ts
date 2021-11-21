import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('new')
@Controller('api/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiBody({ type: CreateNewsDto })
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @ApiResponse({
    // всесто CreateNewsDto наверно луче интерфейс
    status: 200,
    description: 'get all news',
    type: [CreateNewsDto],
  })
  @ApiResponse({
    // всесто CreateNewsDto наверно луче интерфейс
    status: 404,
    description: 'Not Found',
  })
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(id);
  }

  @Put(':id')
  @ApiBody({ type: UpdateNewsDto })
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(id);
  }
}
