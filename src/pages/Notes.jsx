import React, {
  useEffect,
  useState
} from 'react'

function Notes() {

  const [notes, setNotes] =
    useState([])

  const [title, setTitle] =
    useState('')

  const [content, setContent] =
    useState('')


  async function fetchNotes() {

    try {

      const token =
        localStorage.getItem('token')

      const response =
        await fetch(
          'http://localhost:3000/notes/all',
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        )

      const data =
        await response.json()

      setNotes(data)

    } catch (e) {

      console.log(e)
    }
  }


  useEffect(() => {

    fetchNotes()

  }, [])


  async function addNote(e) {

    e.preventDefault()

    try {

      const token =
        localStorage.getItem('token')

      const response =
        await fetch(
          'http://localhost:3000/notes/add',
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json',

              Authorization:
                `Bearer ${token}`
            },

            body: JSON.stringify({
              title,
              content
            })
          }
        )

      const data =
        await response.json()

      console.log(data)

      fetchNotes()

      setTitle('')

      setContent('')

    } catch (e) {

      console.log(e)
    }
  }


  async function deleteNote(id) {

    try {

      const token =
        localStorage.getItem('token')

      await fetch(
        `http://localhost:3000/notes/delete/${id}`,
        {
          method: 'DELETE',

          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      )

      fetchNotes()

    } catch (e) {

      console.log(e)
    }
  }


  return (
    <div>

      <h1>Notes App</h1>


      <form onSubmit={addNote}>

        <input
          type='text'
          placeholder='Enter title'
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <br />

        <textarea
          placeholder='Enter content'
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <br />

        <button>
          Add Note
        </button>

      </form>


      <hr />


      {
        notes.map((note) => (

          <div key={note.id}>

            <h2>{note.title}</h2>

            <p>{note.content}</p>

            <button
              onClick={() =>
                deleteNote(note.id)
              }
            >
              Delete
            </button>

            <hr />

          </div>
        ))
      }

    </div>
  )
}

export default Notes