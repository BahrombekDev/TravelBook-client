import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddBook = () => {

    const [title,setTitle] = useState('')
    const [image,setImage] = useState('')
    const [descr,setDescr] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post("http://localhost:5000/api/travel/add",{
            title,
            descr,
            image
           
        })
        navigate('/')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input 
                type="text"
                 className="form-control" 
                 id="title" 
                 name='title'
                 onChange={e => setTitle(e.target.value)}
                 value={title}
                 /> 
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image Url</label>
                <input 
                type="text" 
                className="form-control"
                 id="image" 
                 name='image'
                 onChange={e => setImage(e.target.value)}
                 value={image}
                 />
            </div>
            <div className="mb-3">
                <label htmlFor="descr" className="form-label">Description</label>
                <input 
                type="text" 
                className="form-control"
                 id="descr" 
                 name='descr'
                 onChange={e => setDescr(e.target.value)}
                 value={descr}
                 />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddBook
