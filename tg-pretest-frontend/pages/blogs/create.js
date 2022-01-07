import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import APIConfig from "../../api/APIconfig";

export default function CreateBlogs() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDesc, setBlogDesc] = useState("");

  // Create a Blog by POST method Request using Axios to API
  async function createBlog() {
    try {
      var data = {
        title: document.getElementById("blogtitle").value,
        description: document.getElementById("blogdesc").value,
      };
      await APIConfig.post("/tutorials", data);
      alert("Berhasil menambahkan Blog !");
    } catch (error) {
      alert("Oops terjadi masalah pada server");
      console.log(error);
    }
  }

  return (
    <div>
      {/* HTML Head */}
      <Head>
        <title>Add a Blog</title>
        <meta name="description" content="Semua Blog yang ada" />
        <link rel="icon" href="/logoL.png" />
      </Head>

      {/* Navigation Bar */}
      <div className="sticky top-0 border-b-2 py-4 border-blue-200 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between px-10">
            <Link href="/" passHref={true}>
              <a>
                <Image
                  src="/logoLegit.png"
                  width={100}
                  height={50}
                  alt="logoLegit"
                />
              </a>
            </Link>
            <div className="flex flex-row space-x-14 my-auto tracking-wider">
              <Link href="/" passHref={true}>
                <a className="text-2xl  hover:animate-bounce hover:font-bold ">
                  HOME
                </a>
              </Link>
              <Link href="/blogs" passHref={true}>
                <a className="text-2xl  hover:animate-bounce hover:font-bold ">
                  ALL BLOGS
                </a>
              </Link>
              <Link href="/blogs/published" passHref={true}>
                <a className="text-2xl hover:animate-bounce hover:font-bold">
                  PUBLISHED BLOGS
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto">
        <div className="container mx-auto py-5 font-bold text-4xl text-center">
          Create a Blog
        </div>

        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 gap-4 content-center">
            <label className="text-left font-bold text-xl">Blog Title</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
              id="blogtitle"
              type="text"
              name="blogTitle"
              onChange={(e) => setBlogTitle(e.target.value)}
              value={blogTitle}
            />
            <label className="text-left font-bold text-xl">
              Blog Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
              id="blogdesc"
              type="text"
              name="blogDesc"
              onChange={(e) => setBlogDesc(e.target.value)}
              value={blogDesc}
            />
          </div>
          <div className="flex flex-row space-x-5 mt-5 justify-center">
            <Link href="/blogs" passHref={true}>
              <button
                type="submit"
                onClick={() => createBlog()}
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </Link>

            <Link href="/blogs" passHref={true}>
              <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
