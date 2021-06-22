import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()

        const blog = {title, body, author}

        fetch('http://localhost:8000/blogs', {

            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)

        }).then (() => {
            console.log('New Blog Added');
            history.push('/')
        })
        
    }

    return (
        <div>
            <h1>Create Blog</h1>
            <form onSubmit={handleSubmit}>
               <div>
               <label htmlFor="">Title</label>
                <input type="text" value={ title } onChange={(e) => setTitle(e.target.value)} required />
               </div>
               <div>
               <label htmlFor="">Body</label>
                <textarea type="text" value={ body } onChange={(e) => setBody(e.target.value)} required></textarea>
               </div>
               <div>
               <label htmlFor="">Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)} required>
                    <option></option>
                    <option>Abbey</option>
                    <option>Wale</option>
                    <option>Nibram</option>
                </select>
               </div>

               <button>Submit</button>
              
            </form>
        </div>
    )
}

export default Create
