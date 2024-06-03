import { useState } from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import NotesGrid from './components/NotesGrid'

type TNote = {
  id: number
  title: string
  content: string
}

const App = () => {
  const [notes, setNotes] = useState<TNote[]>([
    {
      id: 1,
      title: 'Note 1',
      content: 'Content 1',
    },
    {
      id: 2,
      title: 'Note 2',
      content: 'Content 2',
    },
    {
      id: 3,
      title: 'Note 3',
      content: 'Content 3',
    },
    {
      id: 4,
      title: 'Note 4',
      content: 'Content 4',
    },
  ])

  return (
    <div className='app-container'>
      <NoteForm />

      <NotesGrid notes={notes} />
    </div>
  )
}

export default App
