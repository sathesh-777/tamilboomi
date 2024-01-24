import { useEffect, useState } from "react";
import ImageUploadDropZone from "@/app/components/Blog/ImageUploadDropZone";
import BlogEditor from "./BlogEditor";
import { useCreateBlogMutation } from "@/redux/features/blogs/blogApi";
import toast from "react-hot-toast";

const UploadBlog = () => {
  const [createCourse, { isSuccess }] = useCreateBlogMutation();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (isSuccess) {
      setImageUrl("");
      setTitle("");
      setValue("");
      toast.success("Blog created successfully!");
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      title,
      thumbnailUrl: imageUrl,
      content: value,
    };
    await createCourse(data);
  };


  return (
    <div>
      <div className="w-full min-h-screen h-min   flex flex-col items-center py-10">
        <div className="w-[90%] xl:w-[50%] m-auto text-center text-black">
          <br />
          <br />
          <br />
          <label htmlFor="" className="text-black font-sans text-xl py-2">
            Upload one Thumbnail for your blog
          </label>
          <ImageUploadDropZone imageUrl={imageUrl} setImageUrl={setImageUrl} />
          <br />
          <BlogEditor
            value={value}
            setValue={setValue}
            title={title}
            setTitle={setTitle}
          />
          <div className="ql-snow mt-16 text-black">
            <strong className="block text-left">Blog Preview:</strong>
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: value }}
            />
          </div>
          <br />
          <button
            className="bg-[#3b81e1] text-white w-[80px] h-[35px] rounded"
            onClick={(e) => handleSubmit(e)}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadBlog;
