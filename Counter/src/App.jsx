import React from 'react'
import {Card , Button} from 'react-bootstrap'
import { useState } from 'react'

const counter = () => {

  const [ number ,setnumber] =useState (50)

  const Increment =(e)=>{
    e.preventDefault();
    setnumber(number + 1)
  }

  const Decrement =(e)=>{
    e.preventDefault();

    setnumber(number -1)

  }

  const reset =(e)=>{
    e.preventDefault();

    setnumber(0)

  }

  return (


    <>

      {

        <Card>
          <Card.Title>{number}</Card.Title>
          <Card.Body></Card.Body>

          <Card.Footer>

            <Button className='btn m-3'onClick={Increment}>Increment +</Button>
            <Button className='btn btn-danger m-3' onClick={reset}>Reset </Button>
            <Button className='btn btn-secondary m-3' onClick={Decrement} >Decrement -</Button>
          </Card.Footer>

        </Card>


      }
    
    </>
   
  )
}

export default counter