import React from 'react'
import data from './data'

const Person = () => {
  return (
    <div className='person-container'>
        {data.map((item)=>(
            <div className='person-content'>
                <h3>First-name: {item.first_name}</h3>
                <h3>Last-name: {item.last_name}</h3>
                <h3>Email: {item.email}</h3>
            </div>
        ))}
    </div>
  )
}

export default Person