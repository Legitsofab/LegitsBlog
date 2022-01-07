import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import APIConfig from "../api/APIconfig";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAllBlogs();
  }, [blogs]);

  // Mendapatkan semua blog yang ada
  async function getAllBlogs() {
    try {
      APIConfig.get("/tutorials").then((data) => {
        setBlogs(data.data);
      });
    } catch (error) {
      alert("Oops terjadi masalah pada server");
      console.log(error);
    }
  }

  // Melakukan perubahan pada data khusus atribut "published" sesuai id
  // Code 1 untuk publish
  // Code 2 untuk unpublish
  async function publishBlog(id, code) {
    try {
      if (code == 1) {
        var data = {
          published: true,
        };
      } else if (code == 0) {
        var data = {
          published: false,
        };
      }
      console.log(data);
      await APIConfig.put("/tutorials/" + id, data);
      getAllBlogs;
    } catch (error) {
      alert("Oops terjadi masalah pada server");
      console.log(error);
    }
  }

  // Menghapus blog sesuai id
  async function deleteBlog(id) {
    try {
      await APIConfig.delete("/tutorials/" + id);
      getAllBlogs;
    } catch (error) {
      alert("Oops terjadi masalah pada server");
      console.log(error);
    }
  }

  return (
    <div>
      {/* HTML Head */}
      <Head>
        <title>All Blog</title>
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
      <div>
        <div className="text-center py-5 text-4xl font-bold">All Blogs</div>
        <div>
          <div className="container mx-auto flex flex-row justify-between">
            <Link href="/blogs/create" passHref={true}>
              <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                + Add Blog
              </button>
            </Link>
            <Link href="/" passHref={true}>
              <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back
              </button>
            </Link>
          </div>
        </div>

        {/* Looping Daftar Blogs */}
        <div className="container mx-auto">
          {blogs.length != 0 ? (
            blogs.map((val, index) => {
              return (
                <div key={val.id} className="container mx-auto">
                  <div className="bg-white rounded-2xl overlow-hifdden border-black-100 border-2 mt-5">
                    <div className="px-6 py-4 space-y-5">
                      <div className="flex flex-row justify-between">
                        <div className="text-blue-800 font-bold text-2xl mb-2">
                          {val.title}
                        </div>
                        <div className="flex flex-row space-x-4 my-auto">
                          {val.published ? (
                            <button
                              onClick={() => {
                                publishBlog(val.id, 0);
                              }}
                              className="bg-orange-800 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Unpublish
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                publishBlog(val.id, 1);
                              }}
                              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Publish
                            </button>
                          )}
                          <Link
                            href={`/blogs/update/${val.id}`}
                            passHref={true}
                          >
                            <button className="bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                              Edit
                            </button>
                          </Link>

                          <button
                            onClick={() => {
                              deleteBlog(val.id);
                            }}
                            className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700 text-base py-auto truncate">
                        {val.description}
                      </p>
                      <div>
                        {val.published ? (
                          <div className="font-bold text-blue-800">
                            Published
                          </div>
                        ) : (
                          <div className="font-bold text-red-800">
                            Not Published
                          </div>
                        )}
                        <div>
                          <span className="font-bold text-blue-800">
                            Last Updated On :
                          </span>
                          {val.updatedAt.substring(0, 10)}
                        </div>
                        <div>
                          <span className="font-bold text-blue-800">
                            Created On :
                          </span>
                          {val.createdAt.substring(0, 10)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="container mx-auto">
              <div className="bg-white rounded overlow-hifdden shadow-lg">
                <div className="px-6 py-4 text-center">
                  <div className="text-blue-800 font-bold text-2xl mb-2">
                    Empty !
                  </div>
                  <p className="text-gray-700 text-base">
                    You can make a blog by pressing button &quot;+ Add
                    Blog&quot; on upper left if you want !
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
