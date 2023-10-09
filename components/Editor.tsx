"use client";

import { deleteEntry, updateEntry } from "@/utils/api";
import { JournalEntry } from "@prisma/client";
import { useState } from "react";
import { useAutosave } from "react-autosave";
import Spinner from "./Snipper";
import { useRouter } from "next/navigation";

interface EditorProps {
  entry: JournalEntry;
}

const Editor: React.FC<EditorProps> = ({ entry }) => {
  const [value, setValue] = useState(entry.content);
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(entry.analysis);
  const router = useRouter();

  const handleDelete = async () => {
    await deleteEntry(entry.id);
    router.push("/journal");
  };

  const { mood, summary, color, subject, negative } = analysis;
  const analysisData = [
    { name: "Summary", value: summary },
    { name: "Subject", value: subject },
    { name: "Mood", value: mood },
    { name: "Negative", value: negative ? "True" : "False" },
  ];
  useAutosave({
    data: value,
    onSave: async (_value: string) => {
      setIsLoading(true);
      const data = await updateEntry(entry.id, _value);
      setAnalysis(data.analysis);
      setIsLoading(false);
    },
  });
  return (
    <div className="w-full h-full grid md:grid-cols-3">
      <div className="col-span-full md:col-span-2">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="w-[16px] h-[16px] rounded-full bg-green-500"></div>
        )}
        <textarea
          className="w-full h-half md:h-full p-4 md:p-8 text-lg md:text-xl outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="mt-6 md:mt-0 md:border-l border-black/10">
        <div
          className="px-4 md:px-6 py-6 md:py-10"
          style={{ backgroundColor: color }}
        >
          <h2 className="text-xl md:text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.value}
                className="flex items-center justify-between px-2 md:px-4 py-3 md:py-4 border-b border-t border-black/10"
              >
                <span className="text-lg font-semibold">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between px-2 md:px-4 py-3 md:py-4 border-b border-t border-black/10">
            <button
              onClick={handleDelete}
              type="button"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
