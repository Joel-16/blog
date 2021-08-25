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

    @Get('update/:id')
    async getOne(@Param('id') id : number): Promise<Article>{
        return this.postService.getOne(id)
    }

    @Put(':id')
    async Update(@Body() postDto :postFeed, @Param('id') id: string ): Promise<Article>{
        return this.postService.Update(id, postDto)
    }
    @Delete('delete/:id')
    async Delete(@Param('id') id:number): Promise<string>{
        return this.postService.Delete(id)
    } 
}
