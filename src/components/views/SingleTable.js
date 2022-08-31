import { Button } from 'react';
import { ListGroup } from 'react-bootstrap';


const SingleTable = (props) => {


  return (

     <ListGroup.Item  className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row justify-content-center align-items-center">
              <h2 className="fw-bold px-3">Table {props.id} </h2>
              <h4 className="px-3">Status: {props.status}</h4>
          </div>
      <Button type="button class">show more</Button>
    </ListGroup.Item>
  )
}

export default SingleTable;