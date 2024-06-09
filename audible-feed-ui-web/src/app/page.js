"use client";

import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  let { user } = useAuthContext();
  console.log(user);

  return (
    <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      {!user ? (
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white flex items-center justify-center">
            Hello!
          </h1>
          <h3 className="mb-6 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400 flex items-center justify-center">
            Welcome to Audio Feed, experience the next generation Social
            Network...
          </h3>
          <div className="action-tems-div flex flex-col items-center justify-center">
            <button
              className="focus:outline-none text-white bg-purple hover:bg-purple focus:ring-4 focus:ring-purple font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={(e) => router.push("/signin")}
            >
              Sign In
            </button>
            <div className="sign-up-t-home flex items-center justify-center gap-2">
              <div>Don't have an account?</div>
              <Link
                className="underline text-purple hover:text-grayDark"
                href="/signup"
              >
                Sign up!
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>Hi, </>
      )}
    </main>
  );
}
