"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleBlog = exports.getAllBlogs = exports.createBlog = void 0;
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const catchAsyncErrors_1 = require("../middleware/catchAsyncErrors");
const blog_model_1 = __importDefault(require("../models/blog.model"));
const cloudinary_1 = __importDefault(require("cloudinary"));
// create blog
exports.createBlog = (0, catchAsyncErrors_1.CatchAsyncError)(async (req, res, next) => {
    try {
        const data = req.body;
        if (data.thumbnailUrl) {
            const myCloud = await cloudinary_1.default.v2.uploader.upload(data.thumbnailUrl, {
                folder: "blogs",
            });
            data.thumbnailUrl = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            };
        }
        const blog = await blog_model_1.default.create({
            title: data.title,
            thumbnailUrl: data.thumbnailUrl,
            content: data.content,
            author: {
                name: req.user?.name,
                email: req.user?.email,
                avatar: req.user?.avatar
                    ? req.user?.avatar.url
                    : "https://res.cloudinary.com/di84ng8hv/image/upload/v1705854604/avatars/nhstq8deoh0uclqxfdkm.webp",
            },
        });
        res.status(201).json({
            success: true,
            blog,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
// get all blogs
exports.getAllBlogs = (0, catchAsyncErrors_1.CatchAsyncError)(async (req, res, next) => {
    try {
        const blogs = await (await blog_model_1.default.find()).reverse();
        res.status(201).json({
            success: true,
            blogs,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.res.message, 401));
    }
});
// get single blog
exports.getSingleBlog = (0, catchAsyncErrors_1.CatchAsyncError)(async (req, res, next) => {
    try {
        const blog = await blog_model_1.default.findById(req.params.id);
        res.status(201).json({
            success: true,
            blog,
        });
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.res.message, 401));
    }
});
