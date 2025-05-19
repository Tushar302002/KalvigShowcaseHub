import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
        <h1>Not found Page</h1>
        <Link to={"/"}>
            <button className='border-2 border-black'>Go back Home</button>
        </Link>
    </div>
  )
}

export default NotFoundPage