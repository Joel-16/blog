import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entity/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
