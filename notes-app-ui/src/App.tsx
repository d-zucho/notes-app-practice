import { useState } from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import NotesGrid from './components/NotesGrid'
// @ts-ignore
import { v4 as uuidv4 } from 'uuid'
type TNote = {
  id: string
  title: string
  content: string
}

type TSelectedNote = {
  id: string
  title: string
  content: string
}

const App = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [notes, setNotes] = useState<TNote[]>([
    {
      id: uuidv4(),
      title: 'Note 1',
      content: 'Content 1',
    },
  ])
  const [selectedNote, setSelectedNote] = useState<TNote | null>(null)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const handleNoteClick = (note: TNote) => {
    setSelectedNote(note)
    setTitle(note.title)
    setContent(note.content)
  }

  // ? ADD NOTE
  const addNote = (e: React.FormEvent, title: string, content: string) => {
    e.preventDefault()
    setNotes((prevNotes) => [...prevNotes, { id: uuidv4(), title, content }])
    setTitle('')
    setContent('')
  }

  const handleUpdateNote = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedNote) {
      return
    }

    const updatedNote: TNote = {
      id: selectedNote.id,
      title,
      content,
    }

    const updatedNotes = notes.map((note) =>
      note.id === selectedNote.id ? updatedNote : note
    )

    setNotes(updatedNotes)
    setTitle('')
    setContent('')
    setSelectedNote(null)
  }

  // const handleDeleteNote = (id: string) => {
  //   setSelectedNote(note)
  // }

  const handleCancel = () => {
    setTitle('')
    setContent('')
    setSelectedNote(null)
  }

  return (
    <div className='app-container'>
      <form className='note-form' onSubmit={(e) => addNote(e, title, content)}>
        <input
          type='text'
          value={title}
          placeholder='Title'
          required
          onChange={handleTitleChange}
        />
        <textarea
          value={content}
          rows={10}
          required
          placeholder='Content'
          onChange={handleContentChange}
        ></textarea>
        {selectedNote ? (
          <div className='edit-buttons'>
            <button onClick={handleUpdateNote}>Update</button>
            <button onClick={() => handleCancel()}>Cancel</button>
          </div>
        ) : (
          <button type='submit'>Add Note</button>
        )}
      </form>
      <div className='notes-grid'>
        {notes.map((note) => (
          <article
            className='note'
            key={note.id}
            onClick={() => handleNoteClick(note)}
          >
            <div className='notes-header'>
              <button>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default App
