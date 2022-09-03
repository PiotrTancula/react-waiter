import { useParams } from "react-router-dom";
import { Form,Container,Row,Col,Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTableById } from "../../redux/tablesRedux";

const InsideSingleTable = () => {

  const { id } = useParams();
  const table = useSelector(state => getTableById(state, id));
  const [statuses, setStatuses] = useState([]);

  const [people, setPeople] = useState(0);
  const [maxPeople, setMaxPeople] = useState(0);

  // on startup
  useEffect(() => {
    fetch('http://localhost:3131/api/statuses')
      .then(res => res.json())
      .then(statuses => setStatuses(statuses));
  }, []);

  useEffect(() => {
    if(table) {
      setPeople(table.peopleAmount);
      setMaxPeople(table.maxPeopleAmount);
    }
  }, [table])

  if (!table) return <h2>Loading...</h2>
  return (
    <>
      <h1>Table {id} </h1>

      <Form>
        <Form.Group className="d-flex flex-row align-items-center">
          <Form.Label className="px-3 py-3">Status: </Form.Label>
          <Form.Select className="w-25" aria-label="Default select example">
            <option>Open this select menu</option>
            {statuses.map(status => <option key={status.id} >{status.description}</option>)}
          </Form.Select>
        </Form.Group>

        <Row>
          <Col md={3}>
          <Form.Group className="d-flex flex-row align-items-center">
            <Form.Label className="px-3 py-3">People: </Form.Label>
              <Form.Control type="input" className="" value={people} />
              <p className="px-3"> / </p>
              <Form.Control type="input" className="" value={maxPeople} />
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