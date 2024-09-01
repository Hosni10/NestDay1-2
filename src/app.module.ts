import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './modules/posts/posts.module';
import { TagsModule } from './modules/tags/tags.module';
import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27018/nest'),ArticleModule,PostsModule, BlogsModule, AuthModule,TagsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
