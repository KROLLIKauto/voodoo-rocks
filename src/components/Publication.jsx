import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './publication.scss'

export default function Publication({ inpFiltr }) {
  const [posts, setPosts] = useState([])

  const getPublications = async () => {
    let arr = []
    await axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => arr = [...res.data])

    await fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then(res => res.json())
      .then(json => {
        arr.map(res => res.author = json[res.id-1].name)
      })
      
    setPosts([...arr])
  }

  const filtration = (el) => {
    return (
      el.author.toLowerCase().indexOf(inpFiltr.toLowerCase()) > -1
    )
  }

  useEffect(() => {
    getPublications()
  }, [])

  return (
    <div className="publications-container">
      {posts?.filter(el => filtration(el)).map(res => {
       return <div
        className='publication'
        key={res.id}
      >
          <div className='publication-title'>{res.title}</div>
          <div className='publication-description'>{res.body}</div>
          <div className='publication-author'>{res.author}</div>
        </div>
        
      })}
    </div>
  )
}
