import React from "react";
import { useState, useEffect } from "react";
import postService from "../services/post.service";
const Post = () => {
  const [posts, setposts] = useState([]);
  const fetchposts = () => {
    postService
      .get()
      .then((response) => {
        setposts(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchposts();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-black bg-white w-full py-4 text-center shadow-md">
        Social
      </h1>
      <div className="w-full max-w-md mt-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-6"
          >
            <div className="flex items-center p-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                  alt="Default Profile"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <p className="ml-3 font-semibold">{post.author.name}</p>
            </div>
            <div className="flex items-center justify-center bg-gray-200 h-64">
              No Picture
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <p className="flex gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-heart"
                    className="hover:text-gray-500 cursor-pointer"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-message-circle"
                    className="hover:text-gray-500 cursor-pointer"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-send"
                    className="hover:text-gray-500 cursor-pointer"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                </p>
                <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-bookmark"
                      className="hover:text-gray-500 cursor-pointer"
                    >
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                    </svg>
                  </p>
              </div>
              <p className="text-sm font-semibold">{post.title}</p>
              <p className="text-sm text-gray-600">{post.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                {post.comments?.[0]?.text || "No comments"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
