import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import NavBar from "./_components/navbar";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-zinc-900 to-zinc-800 text-white">
        <NavBar></NavBar>
      </main>
    </HydrateClient>
  );
}
