import { PlusCircle, Search, Trash2 } from "lucide-react"
import { cn, formatDate } from "@/lib/utils"

import { useNotes } from "../../_context/useNotes"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import EmptyStateMessage from "./EmptyStateMessage"

function NotesSidebar() {
  const {
    notes,
    createNewNote,
    searchQuery,
    setSearchQuery,
    filteredNotes,
    setSelectedNote,
    selectedNote,
    deleteNote
  } = useNotes()

  return (
    <aside className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">

      <header className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-medium text-gray-900">Notes</h1>
          <Button variant="ghost" size="icon" onClick={createNewNote} className="text-gray-600 hover:text-gray-900">
            <PlusCircle className="h-5 w-5" />
            <span className="sr-only">New note</span>
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 bg-gray-100 border-0 focus-visible:ring-1 focus-visible:ring-gray-300"
          />
        </div>
      </header>

      <section className="flex-1 overflow-auto">
        {filteredNotes.length === 0 ? (
          <EmptyStateMessage notes={notes} />
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                onClick={() => setSelectedNote(note)}
                className={cn(
                  "p-4 cursor-pointer hover:bg-gray-50 transition-colors",
                  selectedNote?.id === note.id ? "bg-gray-100" : "",
                )}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-900 truncate">{note.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-gray-400 hover:text-red-500"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteNote(note.id)
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete note</span>
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{note.content}</p>
                <p className="text-xs text-gray-400 mt-2">{formatDate(note.updatedAt)}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </aside>
  )
}

export default NotesSidebar
