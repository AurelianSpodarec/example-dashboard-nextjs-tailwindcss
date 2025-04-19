import { PlusCircle } from "lucide-react"
import { useNotes } from "../../_context/useNotes";

import { Button } from "@/components/ui/button"

function EmptyNoteMessage() {
  const { createNewNote } = useNotes();

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

export default EmptyNoteMessage
