import { useParams } from "react-router-dom";

const InsideSingleTable = () => {

  const { id } = useParams();

  return (
    <h1>inside single table {id} </h1>

  )
}

export default InsideSingleTable;