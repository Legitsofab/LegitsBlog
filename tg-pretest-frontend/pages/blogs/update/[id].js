import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import APIConfig from "../../../api/APIconfig";

export default function UpdateBlogs() {
  const router = useRouter();

  // Mendapatkan id dari blog untuk menjalankan function getInitState
  var id = router.asPath.substring(14);
  console.log(id);

  const [blogTitle, setBlogTitle] = useState("");
  const [blogDesc, setBlogDesc] = useState("");

  // Melakukan update blog dengan PUT method request ke API
  async function updateBlog() {
    try {
      var data = {
        title: document.getElementById("blogtitle").value,
        description: document.getElementById("blogdesc").value,
      };
      await APIConfig.put("/tutorials/" + id, data);
      alert("Berhasil memperbarui Blog !");
    } catch (error) {
      alert("Oops terjadi masalah pada server");
      console.log(error);
    }
  }

  // Menampilkan data blog sebelumnya
  async function getInitState() {
    try {
      await new Promise((r) => setTimeout(r, 2000));
      await APIConfig.get("/tutorials/" + id).then((data) => {
        console.log(data.data);
        setBlogDesc(data.data.description);
        setBlogTitle(data.data.title);
      });
    } catch (error) {
      alert("Oops terjadi masalah pada server");
      console.log(error);
    }
  }
  getInitState();
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
          Update a Blog
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
              placeholder={blogTitle}
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
              placeholder={blogDesc}
            />
          </div>
          <div className="flex flex-row space-x-5 mt-5 justify-center">
            <Link href="/blogs" passHref={true}>
              <button
                type="submit"
                onClick={() => updateBlog()}
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update
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
