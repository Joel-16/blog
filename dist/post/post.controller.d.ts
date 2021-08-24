import { PostService } from './post.service';
import { postFeed } from './models/post.interface';
import { Article } from './entity/post.entity';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    Create(postDto: postFeed): Promise<Article>;
    getAll(): Promise<Article[]>;
    getOne(title: string): Promise<Article>;
    Update(postDto: postFeed, title: string): Promise<Article>;
    Delete(title: string): Promise<string>;
}
