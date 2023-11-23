import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { data } from './constants/constants';
import ListForm from './components/from';

function App() {
  return (
    <div className="App">
      <header >
        <div className="App-header">
          <div className="nav-logo">
            <h2>My App</h2>
          </div>
          <div>
            <ul className="nav-links">
              <li>Home</li>
              <li>Products</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </header>
      <main className="content">
        <Container>
          <Row className="justify-content-center">
            <h1>Static Mock Data</h1>
            {data.map((item) => {
              return (
                <Col xs={12} md={6} lg={4} key={item.id} style={{display: "flex", justifyContent: "center"}}>
                  <Card style={{ width: '18rem', marginBottom: '10px' }} className='app-card'>
                    <Card.Img variant="top" src={item.thumbnailUrl} alt={item.title} className='card-img' />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
            )}
          </Row>
        </Container>
      </main>
      <div>
        <h1>Dynamic Data on form submission</h1>
        <ListForm />
      </div>

    </div>
  );
}

export default App;
