import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entity/post.entity';
import { postFeed } from './models/post.interface'

@Injectable()
export class PostService {
    constructor (
        @InjectRepository(Article) 
        private readonly article : Repository<Article>
    ) {}

    async Create(postDto: postFeed): Promise<Article>{
        const result = await this.article.save({
            name : postDto.name,
            email : postDto.email,
            body : postDto.body,
            title : postDto.title
        })
        return result
    }

    
    async getAll (): Promise<Article[]> {
        const result = await this.article.find()
        return result
    }

    async getOne(id : number): Promise<Article> {
        const result = await this.article.findOne(id)
        return result
    }
  
    async Update(title : string, postDto: postFeed): Promise<Article>{
        const article = await this.article.findOne({where: {title: title}})
        article.body= postDto.body
        article.email = postDto.email
        article.name = postDto.name
        article.title = postDto.title
        article.save()
        return article
    } 

    async Delete(id : number): Promise<string>{
        const resu = await this.article.delete(id)

        return "successful"
    }
}
