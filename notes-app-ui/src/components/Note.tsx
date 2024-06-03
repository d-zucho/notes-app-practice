import '../styles/note.styles.css'

interface NoteProps {
  title: string
  content: string
}

const Note = ({ title, content }: NoteProps) => {
  return (
    <article className='note'>
      <div className='notes-header'>
        <button>x</button>
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  )
}

export default Note
