import { INote } from "../../_context/useNotes"

function EmptyStateMessage({ notes }: { notes: INote[] }) {
  return (
    <div className="p-4 text-center text-gray-500">
      {notes.length === 0 ? "No notes yet. Create one!" : "No matching notes found."}
    </div>
  )
}

export default EmptyStateMessage
