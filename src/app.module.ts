import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './modules/posts/posts.module';
import { TagsModule } from './modules/tags/tags.module';

@Module({
  imports: [PostsModule, BlogsModule, AuthModule, MongooseModule.forRoot('mongodb://localhost/127.0.0.1:27018/nest'),TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
