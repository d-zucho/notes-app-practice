import '../styles/notesgrid.styles.css'
import Note from './Note'

interface NotesGridProps {
  notes: {
    id: number
    title: string
    content: string
  }[]
}

const NotesGrid = ({ notes }: NotesGridProps) => {
  return (
    <div className='notes-grid'>
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
    </div>
  )
}
export default NotesGrid
