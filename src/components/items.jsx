import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function Items({data = [], handleDelete}) {
    return (
        <Container>
          <Row>
            {data && data.map((item, index) => {
              return (
                <Col xs={12} md={8} lg={4} key={index} style={{display: "flex", justifyContent: "center"}}>
                  <Card style={{ width: '18rem', marginBottom: '10px'}} className='app-card'>
                    <Card.Img variant="top" src={item.url} alt={item.title} className='card-img' />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
        
                    </Card.Body>
                    <button className='item-btn-delete' onClick={handleDelete(index)}>Delete</button>
                  </Card>
                </Col>
              );
            }
            )}
          </Row>
        </Container>
    )
}

export default Items
