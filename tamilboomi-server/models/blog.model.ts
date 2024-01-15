import mongoose, { Model, Schema } from "mongoose";

interface IUser {
  name: String;
  email: String;
  avatar: String;
}

export interface IBlog {
  title: String;
  thumbnailUrl: Object;
  content: String;
  author: IUser;
}

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
    },
    thumbnailUrl: {
      public_id: String,
      url: String,
    },
    content: {
      type: String,
    },
    author: {
      name: String,
      email: String,
      avatar: String,
    },
  },
  {
    timestamps: true,
  }
);

const blogModel: Model<IBlog> = mongoose.model("Blog", blogSchema);
export default blogModel;
