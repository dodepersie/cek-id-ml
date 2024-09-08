"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center space-y-4">
        <h1 className="text-7xl font-bold">404</h1>
        <h3 className="text-xl leading-loose tracking-normal">
          Halaman yang kamu cari tidak ditemukan disini.. 🥲
        </h3>
      </div>

      <button
        className="ease-in duration-150 bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded-lg shadow"
        onClick={() => router.back()}
      >
        Kembali
      </button>
    </>
  );
};

export default NotFound;
