import { formatDate } from "@/lib/utils"
import { useNotes } from "../../_context/useNotes"

import { Input } from "@/components/ui/input"
import EmptyNoteMessage from "./EmptyNoteMessage"

function NotesEditor() {
  const { updateNote, selectedNote } = useNotes()

  return (
    <section className="flex-1 flex flex-col h-full">
      {selectedNote ? (
        <>
          <div className="p-6">
            <Input
              value={selectedNote.title}
              onChange={(e) => updateNote(selectedNote.id, { title: e.target.value })}
              className="text-2xl font-medium border-0 p-0 focus-visible:ring-0 bg-transparent"
            />
            <p className="text-xs text-gray-400 mt-2">Last edited on {formatDate(selectedNote.updatedAt)}</p>
          </div>
          <div className="flex-1 p-6 pt-0">
            <textarea
              value={selectedNote.content}
              onChange={(e) => updateNote(selectedNote.id, { content: e.target.value })}
              className="w-full h-full p-0 border-0 focus:outline-none bg-transparent resize-none"
              placeholder="Start writing..."
            />
          </div>
        </>
      ) : (
        <EmptyNoteMessage />
      )}
    </section>
  )
}

export default NotesEditor
