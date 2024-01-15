import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogEditor = ({
  value,
  setValue,
  title,
  setTitle,
}: {
  value: string;
  title: string;
  setValue: (r: string) => void;
  setTitle: (r: string) => void;
}) => {
  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "blockquote",
    "code-block",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="text-white">
      <label htmlFor="" className="text-white text-xl block text-left">
        Blog Title
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write your blog title..."
        className="border border-[#ffffff8d] bg-transparent outline-none my-3 p-2 text-white w-full"
      />
      <p className="font-sans text-xl text-[#ffffffce] pb-2 block text-left">
        Now here we go! start to writing your blog!
      </p>
      <ReactQuill
        className="h-min text-white"
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", { "code-block": true }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
          ],
          clipboard: {
            matchVisual: true,
          },
        }}
        formats={formats}
      />
    </div>
  );
};

export default BlogEditor;
