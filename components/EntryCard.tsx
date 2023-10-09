const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();
  console.log("entry is ", entry);
  return (
    <div
      className="divide-y
      divide-gray-200
      overflow-hidden
      rounded-lg
      bg-white
      h-[250px]
      shadow w-full
      max-w-screen-md 
      mx-auto"
    >
      <div
        style={{ backgroundColor: entry.analysis?.color }}
        className="px-4 py-3 sm:py-5 sm:px-6 font-bold"
      >
        {date}
      </div>
      <div className="px-4 py-3 sm:py-5 sm:px-6 truncate whitespace-nowrap w-[90%] h-[100px]">
        {entry.analysis?.summary}
      </div>
      <div className="px-4 py-3 sm:py-5 sm:px-6 uppercase font-bold">
        {entry.analysis?.mood}
      </div>
    </div>
  );
};

export default EntryCard;
