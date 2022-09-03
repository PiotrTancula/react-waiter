import { useParams } from "react-router-dom";
import { Form,Container,Row,Col,Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { editTable, getTableById } from "../../redux/tablesRedux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editTableInfo } from "../../redux/tablesRedux";
import { useNavigate } from "react-router-dom";

const InsideSingleTable = () => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const table = useSelector(state => getTableById(state, id));

  const [tableId, setTableId] = useState(0);
  const [statuses, setStatuses] = useState([]);
  const [peopleAmount, setPeople] = useState(0);
  const [maxPeopleAmount, setMaxPeople] = useState(0);
  const [bill, setBill] = useState(0);
  const [status, setStatus] = useState('');

  // on startup
  useEffect(() => {
    fetch('http://localhost:3131/api/statuses')
      .then(res => res.json())
      .then(statuses => setStatuses(statuses));
  }, []);

  useEffect(() => {
    if (table) {
      setTableId(table.id);
      setStatus(table.status);
      setPeople(table.peopleAmount);
      setMaxPeople(table.maxPeopleAmount);
      setBill(table.bill);
    }
  }, [table])

  const handleSubmit = () => {
    dispatch(editTableInfo({ id, status, peopleAmount, maxPeopleAmount, bill }));
    navigate('/');
  }

  if (!table) return <h2>Loading...</h2>
  return (
    <>
      <h1>Table {id} </h1>

      <Form onSubmit={validate(handleSubmit)} className="w-100">
        <Form.Group className="d-flex flex-row align-items-center">
          <Form.Label className="px-3 py-3">Status: </Form.Label>
          <Form.Select className="w-25" aria-label="Default select example" onChange={e => setStatus(e.target.value)} value={status}>
            <option>Open this select menu</option>
            {statuses.map(status => <option key={status.id} >{status.description}</option>)}

          </Form.Select>
        </Form.Group>



          <Row>
            <Col md={3}>
            <Form.Group className="d-flex flex-row align-items-center w-100">
                <Form.Label className="px-3 py-3">People: </Form.Label>
                  <Form.Control {...register('people', { required: true, min: 0, max: `${table.maxPeopleAmount}` })} type="input" className="" value={peopleAmount} onChange={e => setPeople(e.target.value)} />
                  <p className="px-3"> / </p>
                  <Form.Control  type="input" className="" value={maxPeopleAmount} onChange = { e => setMaxPeople(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          {errors.people && <small className="w50 form-text text-danger mt-2">People's amount has to be between 0 and 10 but not bigger than the table's capacity</small>}




        {status !== "Busy" &&
          <>



          <Row>
            <Col md={2}>
              <Form.Group className="d-flex flex-row align-items-center w-100">
                <Form.Label className="px-3 py-3">Bill: </Form.Label>
                <p className="px-3"> $ </p>
                <div class="col-md-4">
                <Form.Control  {...register('bill', { required: true, min: 1 }) } type="input" className="" value={bill} onChange={e => setBill(e.target.value)} />
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row>
          </Row>
          {errors.bill && <small className="w50 form-text text-danger mt-2">The bill has to have a value above 0 </small>}
        </>
        }

        {status === "Busy" &&
          <>

<Row>
            <Col md={2}>
              <Form.Group className="d-flex flex-row align-items-center w-100">
                <Form.Label className="px-3 py-3">Bill: </Form.Label>
                <p className="px-3"> $ </p>
                <div class="col-md-4">
                <Form.Control  {...register('bill', { required: true, min: 1 }) } type="input" className="" value={bill} onChange={e => setBill(e.target.value)} />
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row>
          </Row>
          {errors.bill && <small className="w50 form-text text-danger mt-2">The bill has to have a value above 0 </small>}
        </>

        }


        <Button type="submit" variant="primary" >update</Button>

        </Form>

      </>
  )
}

export default InsideSingleTable;