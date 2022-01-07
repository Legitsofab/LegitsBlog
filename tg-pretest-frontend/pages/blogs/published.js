import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

import APIConfig from "../../api/APIconfig";

export default function Published() {
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  useEffect(() => {
    getAllPublishedBlogs();
  }, []);

  // Menampilkan blog dengan atribut published true
  async function getAllPublishedBlogs() {
    try {
      APIConfig.get("/tutorials/published").then((data) => {
        setPublishedBlogs(data.data);
      });
    } catch (error) {
      alert("Oops terjadi masalah pada server");
      console.log(error);
    }
  }

  return (
    <div>
      {/* HTML Head */}
      <Head>
        <title>Published Blog</title>
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
        <div className="text-center py-5 text-4xl font-bold">
          All Published Blogs
        </div>
        {publishedBlogs.length != 0 ? (
          publishedBlogs.map((val, index) => {
            return (
              <div key={val.id} className="container mx-auto">
                <div className="bg-white rounded-2xl overlow-hifdden border-black-100 border-2 mt-5">
                  <div className="px-6 py-4 space-y-5">
                    <div className="text-blue-800 font-bold text-2xl mb-2">
                      {val.title}
                    </div>

                    <p className="text-gray-700 text-base py-auto">
                      {val.description}
                    </p>

                    <div>
                      <span className="font-bold text-blue-800">
                        Last Updated On :
                      </span>{" "}
                      {val.updatedAt.substring(0, 10)}
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
                  There is no published blogs for now :(
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
