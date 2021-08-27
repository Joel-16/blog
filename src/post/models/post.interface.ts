export interface postFeed{
    id?: number,
    name?: string,
    title?: string,
    body?: string,
    email?: string,
    createdAt?: Date,
    updateAt?: Date
}

// Afolabi Samuel Adedeji8:12 PM
// import { IsDefined, IsString } from 'class-validator';

// export class CreateCommentDto {
//   @IsString()
//   @IsDefined()
//   broadcast: string;

//   @IsString()
//   @IsDefined()
//   comment: string;
// }

// /posts
//   /controllers - Controllers
//      posts.controller.ts
//   /dto -  Data Transfer Objects
//     create-post.dto.ts
//   /entities - Models
//     post.entity.ts
//    /enums - Enumeration types (optional)
//     post-type.enum.ts
//     /services - Services
//      post.service.ts

// return {
//     status: true,
//     message: 'Post created successfully!',
//     data: []
//   }