import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { postFeed } from './models/post.interface'
import { Article } from './entity/post.entity';

@Controller('post')
export class PostController {
    constructor(private readonly postService : PostService){}

    @Post('create')
    async Create(@Body() postDto :postFeed): Promise<Article>{
       
        return this.postService.Create(postDto)
    }

    @Get()
    async getAll (): Promise<Article[]>{
        return this.postService.getAll()
    }

    @Get()
    async getOne(@Param('title') title : string): Promise<Article>{
        return this.postService.getOne(title)
    }

    @Put(':title')
    async Update(@Body() postDto :postFeed, @Param('title') title: string ): Promise<Article>{
        return this.postService.Update(title, postDto)
    }
    @Delete('title')
    async Delete(@Param('title') title:string): Promise<string>{
        return this.postService.Delete(title)
    } 
}
