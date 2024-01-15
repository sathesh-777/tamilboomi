import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import blogModel, { IBlog } from "../models/blog.model";
import cloudinary from "cloudinary";

// create blog
export const createBlog = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      if (data.thumbnailUrl) {
        const myCloud = await cloudinary.v2.uploader.upload(data.thumbnailUrl, {
          folder: "blogs",
        });
        data.thumbnailUrl = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      const blog = await blogModel.create({
        title: data.title,
        thumbnailUrl: data.thumbnailUrl,
        content: data.content,
        author: {
          name: req.user?.name,
          email: req.user?.email,
          avatar: req.user?.avatar.url,
        },
      });

      res.status(201).json({
        success: true,
        blog,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// get all blogs
export const getAllBlogs = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const blogs = await (await blogModel.find()).reverse();
      res.status(201).json({
        success: true,
        blogs,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.res.message, 401));
    }
  }
);

// get single blog
export const getSingleBlog = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const blog = await blogModel.findById(req.params.id);
      res.status(201).json({
        success: true,
        blog,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.res.message, 401));
    }
  }
);
