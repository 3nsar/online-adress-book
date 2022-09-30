import React, { useState } from 'react'
import { Col, Container,Form,InputGroup,Row, Table } from 'react-bootstrap'
import data from './data'


const Person = () => {
  const [search, setSearch] = useState("")



  return (
    <>
      <Container className='mt-3'>
        <Row>
          <Col>
            <h1 className='text-center text-primary'>Online Adress Book</h1>
            <InputGroup className='mb-3'>
              <Form.Control  onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"/>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
            <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        
          {data.filter((item)=>{
            return search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search)
          }).map((item)=>(
           <tr key={item.id}>
          <td>{item.id}</td> 
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          </tr>
         ))}
        
      </tbody>

            </Table>
          </Col>
        </Row>
      </Container>
        
    </>
  )
}

export default Person