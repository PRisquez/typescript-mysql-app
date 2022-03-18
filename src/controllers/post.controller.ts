import {Request, Response} from 'express';
import { connect } from '../database';
import {Post} from '../interface/post.interface'

export async function getPosts(req: Request, res: Response): Promise<Response>{

    const conn = await connect();
    const [posts] = await conn.query('SELECT * FROM posts');


    return res.json(posts);
}

export async function createPost(req: Request, res: Response):Promise<Response> {
    const newPost:Post = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO posts SET ?',[newPost])
    
    return res.json({
        message: 'post created'
    });
}

export async function getPost(req: Request, res: Response):Promise<Response> {
    const id = req.params.postId;
    console.log(id);
    
    const conn = await connect();
    const [post] = await conn.query('SELECT * FROM posts WHERE id = ?',[id])

    return res.json(post)
}

export async function deletePost(req: Request, res: Response):Promise<Response> {
    const id = req.params.postId;
    
    const conn = await connect();
    const [post] = await conn.query('DELETE FROM posts WHERE id = ?',[id]);

    return res.json(post)
}

export async function updatePost(req: Request, res: Response):Promise<Response> {
    const id = req.params.postId;

    const updatePost:Post = req.body;

    const conn = await connect();
    const [post] = await conn.query('UPDATE posts set ? WHERE id = ?',[updatePost,id])
    return res.json({
        message: 'Post updated'
    })

}