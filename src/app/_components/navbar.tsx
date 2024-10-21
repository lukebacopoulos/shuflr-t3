import { FaSpotify } from "react-icons/fa";
import Link from "next/link";

export default function NavBar() {
  const URL = "http://localhost:3000";

  return (
    <div className="flex h-1/6 w-screen items-center justify-between bg-black/30">
      <h1 className="p-5 px-10 text-4xl">Shuflr.com</h1>
      <div className="flex items-center">
        <Link href={URL} className="p-5 text-xl">
          True Shuffle
        </Link>
        <Link href={URL + "/top"} className="p-5 px-10 text-xl">
          Top
        </Link>
        <Link
          href={URL}
          className="m-5 flex h-1/4 items-center rounded-lg bg-zinc-800/80 p-4 hover:bg-zinc-700"
        >
          Sign in
          <FaSpotify className="ml-2 size-6 text-green-400" />
        </Link>
      </div>
    </div>
  );
}
