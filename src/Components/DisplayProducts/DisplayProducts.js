//{Button, ButtonGroup, DropdownButton} = ReactBootstrap
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import './DisplayProducts.css'

const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr]
  if (chunkSize <= 0) return cache
  while (tmp.length) cache.push(tmp.splice(0, chunkSize))
  return cache
}

const ProductInfo = (props) => {
	const card = (
        
            <Card style={{ width: '18rem', 'color':'black'}} className="m-2 card-class">
                <a href="product"><Card.Img variant="top" src={props.img} /></a>
                <Card.Body>
                    <Card.Title>Name: {props.name}</Card.Title>
                    <Card.Text>
                    Price: {props.price}<br></br>
                    Shop: <a href="shop">{props.shopname}</a><br></br>
                    </Card.Text>
                    <Button variant="primary" >Add to Cart</Button>
                </Card.Body>
            </Card>
        
      )
  return card;
}

const DisplayProducts = (props) => {
	const productsChunks = chunk(props.data.products, 3)
  const rows = productsChunks.map((productChunk, index) => {
  	const productsCols = productChunk.map((product, index) => {
    	return (
      	<Col sm="4" key={product.id}>
          <ProductInfo key={product.id} price={product.price} name={product.name} img={product.img} shopname={product.shopname}/>	  
      	</Col>
      );
    });
    return <Row key={index}>{productsCols}</Row>
  });
	return (
  	<Container>
      {/* <h2 style={{'background-color':'lightgray'}}>All Products</h2> */}
  	  {rows}
  	</Container>
  )
}

export default DisplayProducts;