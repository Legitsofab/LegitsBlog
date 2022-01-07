import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* HTML Head */}
      <Head>
        <title>Legit&apos;s Blog</title>
        <meta name="description" content="Blog pribadi Legit ceritanya" />
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
      <div className="grid place-items-center h-screen text-center">
        <div className="space-y-5">
          <Image
            src="/undraw_blogging_re_kl0d.svg"
            width={300}
            height={300}
            alt="Blog's Image"
          />
          <p className="font-semibold text-3xl">
            Welcome to <span className="text-blue-800 font-bold">Legit</span>
            &apos;
            <span className="text-red-800 font-bold">s</span> Blog.
          </p>
        </div>
      </div>
    </div>
  );
}
