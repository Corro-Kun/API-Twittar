import { Router } from "express";
import { Wellcom, Getpost, Getposts, GetpostCount, CreatePost, DeletePost, ModifPost } from "../controllers/post.controlles.js";

const Route = Router()

Route.get(('/'),Wellcom)

Route.get(('/post'),Getposts)

Route.get(('/post/count'), GetpostCount)

Route.get(('/post/:id'), Getpost)

Route.post(('/post'), CreatePost)

Route.delete(('/post/:id'), DeletePost)

Route.put(('/post/:id'), ModifPost)

export default Route