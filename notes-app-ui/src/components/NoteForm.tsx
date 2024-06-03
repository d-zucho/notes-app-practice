import '../styles/noteform.styles.css'

const NoteForm = () => {
  return (
    <form className='note-form'>
      <input type='text' placeholder='Title' required />
      <textarea rows={10} required placeholder='Content'></textarea>
      <button type='submit'>Add Note</button>
    </form>
  )
}

export default NoteForm
