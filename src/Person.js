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
        {/*<div className='person-container'>
          <div className='person-content'>
            <h2><span className='line'>FirstName:</span> Ulrikaumeko</h2>
            <h2><span className='line'>FirstName:</span> Leao</h2>
            <h2><span className='line'>Email:</span> leao_ulrikaumeko@u.io</h2>
          </div>
        </div>*/}
    </div>
  )
}

export default Person