"use client"

import { useState, useEffect } from "react"

import NotesEditor from "./_components/Editor"
import NotesSidebar from "./_components/Sidebar"

interface INote {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

function DashboardNoteIndex() {
  const [notes, setNotes] = useState<INote[]>([])
  const [selectedNote, setSelectedNote] = useState<INote | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Local Storage
  // =====================================================

  function readSavedNotes() {
    return localStorage.getItem("notes")
  }

  function saveNotes() {
    return localStorage.setItem("notes", JSON.stringify(notes))
  }

  // Functions: CRUD
  // =====================================================

  const createNewNote = () => {
    const newNote: INote = {
      id: Date.now().toString(),
      title: "Untitled Note",
      content: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    setNotes([newNote, ...notes])
    setSelectedNote(newNote)
  }

  function loadSavedNotes() {
    const savedNotes = readSavedNotes()
    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes).map((note: any) => ({
          ...note,
          createdAt: new Date(note.createdAt),
          updatedAt: new Date(note.updatedAt),
        }))
        setNotes(parsedNotes)
        setIsLoaded(true)
      } catch (error) {
        console.error("Failed to parse notes:", error)
      }
    } else {
      setIsLoaded(true)
    }
  }

  const updateNote = (id: string, updates: Partial<INote>) => {
    const updatedNotes = notes.map((note) => (note.id === id ? { ...note, ...updates, updatedAt: new Date() } : note))

    setNotes(updatedNotes)

    if (selectedNote?.id === id) {
      setSelectedNote({ ...selectedNote, ...updates, updatedAt: new Date() })
    }
  }

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setNotes(updatedNotes)

    if (selectedNote?.id === id) {
      setSelectedNote(updatedNotes.length > 0 ? updatedNotes[0] : null)
    }
  }

  // Use Effects
  // =====================================================

  useEffect(() => {
    if (isLoaded) {
      saveNotes()
    }
  }, [notes, isLoaded])

  useEffect(() => {
    loadSavedNotes()
  }, [])

  return (
    <div className="flex h-full bg-[#f5f5f7]">
      <NotesSidebar
        notes={notes}
        filteredNotes={filteredNotes}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        createNewNote={createNewNote}
        deleteNote={deleteNote}
      />
      <NotesEditor
        notes={notes}
        selectedNote={selectedNote}
        createNewNote={createNewNote}
        updateNote={updateNote}
      />
    </div>
  )
}

export default DashboardNoteIndex
