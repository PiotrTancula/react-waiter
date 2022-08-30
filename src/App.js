import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom';
import Header from './components/views/Header';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import SingleTable from './components/views/SingleTable';
import Footer from './components/views/Footer';
import { updateTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const fetchBooks = () => {
    fetch('http://localhost:3131/api/tables')
  }

  return (
    <Container>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<SingleTable/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;
