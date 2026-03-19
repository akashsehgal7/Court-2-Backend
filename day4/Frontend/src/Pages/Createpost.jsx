import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createpost = () => {
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('caption', caption)
    if (image) {
      formData.append('image', image)
    }

    try {
      const response = await axios.post('http://localhost:3000/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('Post created:', response.data)
      setCaption('')
      setImage(null)
      navigate('/')
    } catch (error) {
      console.log('Error creating post:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <section className='create-post-section'>
        <h1>Create post</h1>
        <form onSubmit={handleSubmit}>
            <input 
              type="file" 
              name='image' 
              accept='image/*'
              onChange={handleImageChange}
              required
            />
            <input 
              type="text" 
              name='caption' 
              placeholder='Enter caption'
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              required
            />
            <button type='submit' disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
      </section>
    </div>
  )
}

export default Createpost