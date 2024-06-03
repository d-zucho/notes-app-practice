import React, { useState } from 'react'
import '../styles/noteform.styles.css'
import { TNote } from '../App'

// import { TNote } from '../App'

interface NoteFormProps {
  addTodo: (title: string, content: string) => void
  handleSelect: (note: { id: string; title: string; content: string }) => void
}

const NoteForm = ({ addTodo, handleSelect }: NoteFormProps) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleNoteEdit = (note: TNote) => {
    handleSelect(note)
    setTitle(note.title)
    setContent(note.content)
  }

  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(title, content)
    setTitle('')
    setContent('')
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <form className='note-form' onSubmit={(e) => handleAddNote(e)}>
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
      <button type='submit'>Add Note</button>
    </form>
  )
}

export default NoteForm
