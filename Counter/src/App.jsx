import React from 'react'
import {Card , Button} from 'react-bootstrap'

const counter = () => {

  return (

    <>

      {

        <Card>
          <Card.Title>0</Card.Title>
          <Card.Body></Card.Body>

          <Card.Footer>

            <Button className='btn m-3'>Increment +</Button>
            <Button className='btn btn-danger m-3'>Reset</Button>
            <Button className='btn btn-secondary m-3'>Decrement -</Button>
          </Card.Footer>

        </Card>


      }
    
    </>
   
  )
}

export default counter