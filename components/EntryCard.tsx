const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div
      className="divide-y
      divide-gray-200
      overflow-hidden
      rounded-lg
      bg-white
      shadow w-full
      max-w-screen-md 
      mx-auto"
    >
      <div className="px-4 py-3 sm:py-5 sm:px-6">{date}</div>
      <div className="px-4 py-3 sm:py-5 sm:px-6">summary</div>
      <div className="px-4 py-3 sm:py-5 sm:px-6">mood</div>
    </div>
  );
};

export default EntryCard;
