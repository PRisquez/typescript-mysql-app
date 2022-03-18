import {Router} from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/post.controller';


const router = Router();

// router.route('/')
//     .get(getPost)
//     .post(createPost);

// router.route('/:postId')
//     .get(getPost);
//     .delete(deletePost);
//     .put(updatePost);


router.get('/',getPosts);
router.post('/',createPost);
router.get('/:postId',getPost);
router.delete('/:postId',deletePost);
router.put('/:postId',updatePost);

export default router;