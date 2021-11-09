import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NewsDocument = News & Document;

@Schema({ timestamps: true })
export class News {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  img: string;

  @Prop()
  updatedAt?: Date;
}

export const NewsSchema = SchemaFactory.createForClass(News);
