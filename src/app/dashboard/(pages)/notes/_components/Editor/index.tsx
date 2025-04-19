import { formatDate } from "@/lib/utils"
import { useNotes } from "../../_context/useNotes"

import { Input } from "@/components/ui/input"
import EmptyNoteMessage from "./EmptyNoteMessage"
import { ChevronLeft } from "lucide-react"

function NotesEditor() {
  const { updateNote, selectedNote, setSelectedNote } = useNotes()

  return (
    <section
      className={`
        bg-white transition duration-300 ease-in-out ${selectedNote?.id ? "" : "translate-x-[100%] lg:translate-x-0"} 
        absolute top-0 right-0 bottom-0 left-0 lg:relative flex-1 flex flex-col h-full
    `}
    >
      {selectedNote ? (
        <>
          <header>
            <button onClick={() => setSelectedNote(null)} className="lg:hidden flex items-center">
              <ChevronLeft className="font-bold" />
              <span className="text-xs font-semibold">Notes</span>
            </button>
          </header>

          <div className="p-6 overflow-hidden">
            <Input
              value={selectedNote.title}
              onChange={(e) => updateNote(selectedNote.id, { title: e.target.value })}
              className="text-2xl font-medium shadow-none border-0 p-0 focus-visible:ring-0 bg-transparent"
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
