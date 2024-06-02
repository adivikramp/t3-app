import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";
import CreateTodo from "./components/CreateTodo";
import { Todos } from "./components/Todos";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {session && (
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <div
              className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white"
            >
              <h3 className="text-xl font-bold">Todos</h3>
              <Todos />
              <CreateTodo />
            </div>
          </div>
        )}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.email}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
