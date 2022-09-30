import React from 'react'
import { Col, Container,Row, Table } from 'react-bootstrap'
import data from './data'


const Person = () => {
  return (
    <>
      <Container className='mt-3'>
        <Row>
          <Col>
            <h3 className='text-primary'>User List</h3>
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