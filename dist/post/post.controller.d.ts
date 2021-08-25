import { PostService } from './post.service';
import { postFeed } from './models/post.interface';
import { Article } from './entity/post.entity';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    Create(postDto: postFeed): Promise<Article>;
    getAll(): Promise<Article[]>;
    getOne(id: number): Promise<Article>;
    Update(postDto: postFeed, id: string): Promise<Article>;
    Delete(id: number): Promise<string>;
}
