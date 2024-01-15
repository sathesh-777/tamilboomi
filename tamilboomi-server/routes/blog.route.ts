import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import {
  createBlog,
  getAllBlogs,
  getSingleBlog,
} from "../controllers/blog.controller";
const blogRouter = express.Router();

blogRouter.post(
  "/create-blog",
  isAutheticated,
  authorizeRoles("admin"),
  createBlog
);

blogRouter.get("/get-all-blogs", getAllBlogs);

blogRouter.get("/get-blog/:id", getSingleBlog);

export default blogRouter;
