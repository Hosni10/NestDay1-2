import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./user.schema";



@Schema({versionKey: false , timestamps: true})
export class Article {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    slug: string;

    @Prop({ required: true })
    content: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author: User;

    @Prop({ default: 0 })
    likes: number;

    @Prop()
    images: string;

    @Prop({ default: 0 })
    coverImages: string;

    @Prop()
    tagList: Array<string>;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
