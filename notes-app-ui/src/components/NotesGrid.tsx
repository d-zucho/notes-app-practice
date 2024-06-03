import '../styles/notesgrid.styles.css'
import Note from './Note'
// typescript ignore  next line
// @ts-ignore
interface NotesGridProps {
  notes: {
    id: string
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
