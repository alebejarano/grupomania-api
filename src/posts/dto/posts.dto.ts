import { IsNumber, IsString } from 'class-validator';

//Get all posts or get one post
export class PostsResponseDto {
  @IsNumber()
  id: number;

  @IsNumber()
  userId: number;

  @IsString()
  content: string;

  files?: any;
}
//Create one post or modify one post
export class CreateAndModifyPostDto {
  userId: any;

  @IsString()
  content: string;

  files?: any;
}

export class CreateCommentDto {
  @IsString()
  content: string;
}
