'use client';

import { useEffect, useState } from 'react';
import { INote, NotesContext } from './useNotes';

export function NotesProvider({ children }: { children: React.ReactNode }) {
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
    <NotesContext.Provider
      value={{
        notes,
        filteredNotes,
        selectedNote,
        setSelectedNote,
        searchQuery,
        setSearchQuery,
        createNewNote,
        loadSavedNotes,
        updateNote,
        deleteNote
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
