"use client"

import { NotesProvider } from "./_context/provider-notes"

import NotesEditor from "./_components/Editor"
import NotesSidebar from "./_components/Sidebar"

function DashboardNoteIndex() {
  return (
    <NotesProvider>
      <div className="flex h-full bg-[#f5f5f7]">
        <NotesSidebar />
        <NotesEditor />
      </div>
    </NotesProvider>
  )
}

export default DashboardNoteIndex
