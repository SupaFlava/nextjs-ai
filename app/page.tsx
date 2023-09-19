import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();
  console.log("user id", auth);
  let href = userId ? "/journal" : "/new-user";
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600Px] mx-auto">
        <h1 className="text-6xl mb-4">The best Journal app, peroid.</h1>
        <p className="text-2xl text-white/60 mb-4">
          this is the best app for tracking you're mood through out your life.
          all you habe to do is be honest
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4  py-2 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
