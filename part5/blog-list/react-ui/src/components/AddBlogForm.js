import React, { useState } from 'react'
import { blogService } from '../services/blogs'

export const AddBlogForm = ({ setNewRequest }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleAddBlog = async event => {
    event.preventDefault()

    try {
      const newBlog = await blogService
        .createBlog({ title, author, url })
      
      setNewRequest(new Date())
      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleAddBlog}>
      <label> title:
        <input type="text" name="title" value={title} onChange={({ target }) => setTitle(target.value)}></input>
      </label>

      <label> author:
        <input type="text" name="author" value={author} onChange={({ target }) => setAuthor(target.value)}></input>
      </label>

      <label> url:
        <input type="text" name="url" value={url} onChange={({ target }) => setUrl(target.value)}></input>
      </label>

      <button>
        create
      </button>
    </form>
  )
}
