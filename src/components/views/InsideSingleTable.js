import { useParams } from "react-router-dom";
import { Form,Container,Row,Col } from "react-bootstrap";

const InsideSingleTable = () => {

  const { id } = useParams();

  return (
    <>
      <h1>Table {id} </h1>

      <Form>
        <Form.Group className="d-flex flex-row align-items-center">
          <Form.Label className="px-3 py-3">Status: </Form.Label>
          <Form.Select className="w-25" aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Row>
          <Col md={2}>
          <Form.Group className="d-flex flex-row align-items-center">
            <Form.Label className="px-3 py-3">People: </Form.Label>
            <Form.Control type="number" className="" placeholder="name@example.com" />
            </Form.Group>
          </Col>
          </Row>
        </Form>

      </>
  )
}

export default InsideSingleTable;