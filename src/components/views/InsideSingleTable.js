import { useParams } from "react-router-dom";
import { Form,Container,Row,Col,Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

const InsideSingleTable = ({ ...props }) => {

  const { id } = useParams();
  // const statusCategories = useSelector(state=>state.status);
  // console.log(statusCategories);

  const [people, setPeople] = useState(props.peopleAmount);
  console.log(props.peopleAmount);
  return (
    <>
      <h1>Table {id} </h1>

      <Form>
        <Form.Group className="d-flex flex-row align-items-center">
          <Form.Label className="px-3 py-3">Status: </Form.Label>
          <Form.Select className="w-25" aria-label="Default select example">
            <option>Open this select menu</option>
            {/* {statusCategories.map(status => <option key={status.id} >{status.description}</option>)} */}
            <option value="1">Free</option>
            <option value="2">Reserved</option>
            <option value="3">Busy</option>
            <option value="3">Cleaning</option>
          </Form.Select>
        </Form.Group>

        <Row>
          <Col md={3}>
          <Form.Group className="d-flex flex-row align-items-center">
            <Form.Label className="px-3 py-3">People: </Form.Label>
              <Form.Control type="input" className="" value={people} />
              <p className="px-3"> / </p>
              <Form.Control type="input" className=""  />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={2}>
          <Form.Group className="d-flex flex-row align-items-center">
            <Form.Label className="px-3 py-3">Bill: </Form.Label>
            <p className="px-3"> $ </p>
            <Form.Control type="input" className="" />
          </Form.Group>
          </Col>
        </Row>

        <Button type="submit" variant="primary" >update</Button>

        </Form>

      </>
  )
}

export default InsideSingleTable;