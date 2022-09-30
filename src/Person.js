import React from 'react'
import { Col, Container,Form,InputGroup,Row, Table } from 'react-bootstrap'
import data from './data'


const Person = () => {
  return (
    <>
      <Container className='mt-3'>
        <Row>
          <Col>
            <h1 className='text-center text-primary'>User List</h1>
            <InputGroup className='mb-3'>
              <Form.Control  
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"/>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover variant="dark">
            <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        
          {data.map((item)=>(
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