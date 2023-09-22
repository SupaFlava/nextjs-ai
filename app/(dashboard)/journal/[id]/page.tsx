import Editor from "@/components/Editor";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEntry = async (id: string) => {
  const user = await getUserByClerkId();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  });
  return entry;
};

const EntryPage = async ({ params }: { params: { id: string } }) => {
  const entry = await getEntry(params.id);

  return (
    <div className="h-full w-full p-2 sm:p-4 md:p-6">
      <Editor entry={entry} />
    </div>
  );
};

export default EntryPage;
