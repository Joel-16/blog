import { Repository } from 'typeorm';
import { Article } from './entity/post.entity';
import { postFeed } from './models/post.interface';
export declare class PostService {
    private readonly article;
    constructor(article: Repository<Article>);
    Create(postDto: postFeed): Promise<Article>;
    getAll(): Promise<Article[]>;
    getOne(id: number): Promise<Article>;
    Update(title: string, postDto: postFeed): Promise<Article>;
    Delete(id: number): Promise<string>;
}
