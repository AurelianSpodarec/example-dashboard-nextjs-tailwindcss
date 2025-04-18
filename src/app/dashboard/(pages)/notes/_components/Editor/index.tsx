import { PlusCircle, Search, Trash2 } from "lucide-react"
import { formatDate } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function EmptyNoteMessage({ createNewNote }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-400">
      <p className="mb-4">Select a note or create a new one</p>
      <Button onClick={createNewNote} className="bg-gray-100 text-gray-900 hover:bg-gray-200">
        <PlusCircle className="h-4 w-4 mr-2" />
        New Note
      </Button>
    </div>
  )
}

function NotesEditor({ notes, selectedNote, createNewNote, updateNote }) {
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
        <EmptyNoteMessage createNewNote={createNewNote} />
      )}
    </section>
  )
}

export default NotesEditor
