//{Button, ButtonGroup, DropdownButton} = ReactBootstrap
import { Button, Navbar, Nav, Form, FormControl, Card, Container, Col, Row } from 'react-bootstrap';
import './DisplayShops.css'

const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr]
  if (chunkSize <= 0) return cache
  while (tmp.length) cache.push(tmp.splice(0, chunkSize))
  return cache
}

const Product = (props) => {
	const card = (
        <a href="shop">
            <Card style={{ width: '18rem', 'color':'black'}} className="m-2 card-class">
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>Name: {props.name}</Card.Title>
                    <Card.Text>
                    Address: {props.Address}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </a>
      )
  return card;
}

const DisplayShops = (props) => {
	const productsChunks = chunk(props.data.products, 3)
  const rows = productsChunks.map((productChunk, index) => {
  	const productsCols = productChunk.map((product, index) => {
    	return (
      	<Col sm="4" key={product.id}>
          <Product key={product.id} Address={product.Address} name={product.name} img={product.img}/>	  
      	</Col>
      );
    });
    return <Row key={index}>{productsCols}</Row>
  });
	return (
  	<Container>
  	  {rows}
  	</Container>
  )
}

export default DisplayShops;