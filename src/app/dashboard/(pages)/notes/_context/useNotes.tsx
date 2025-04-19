import { createContext, useContext } from "react";

export interface INote {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

export type TNotesContextType = {
  notes: INote[]
  filteredNotes: INote[]
  selectedNote: INote | null
  setSelectedNote: (note: INote | null) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  createNewNote: () => void
  loadSavedNotes: () => void
  updateNote: (id: string, updates: Partial<INote>) => void
  deleteNote: (id: string) => void
  totalNotes: number
};

export const NotesContext = createContext<TNotesContextType | null>(null);

export function useNotes(): TNotesContextType {
  let context = useContext(NotesContext);

  if (context === null) {
    throw new Error('useNotes must be used within a ProviderNotes');
  }
  return context;
}
