"use client";

import { createNewEntry } from "@/utils/api";
import { useRouter } from "next/navigation";

const NewEntryCard = () => {
  const router = useRouter();
  const handleOnClick = async () => {
    const data = await createNewEntry();
    router.push(`/journal/${data.id}`);
  };
  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow w-full max-w-screen-md mx-auto hover:bg-gray-100 transition-colors duration-200">
      <div
        className="flex items-center justify-center h-32 sm:h-40 px-4 py-5 sm:p-6"
        onClick={handleOnClick}
      >
        <span className="text-2xl sm:text-3xl text-center">New Entry</span>
      </div>
    </div>
  );
};

export default NewEntryCard;
