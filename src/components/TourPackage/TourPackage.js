import React from 'react';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const TourPackage = (props) => {
    const {_id, name, initial, image, description, price} = props.tour;
  
    

  
    return (
        <div className="col-md-6 col-12 g-3 rounded mb-2">
          <Card>
  <div className="text-center">
  <Card.Img variant="top" src={image} style={{ width: "50%", height: "100%" }} className="img-thumbnail mt-3" />
  </div>
  <Card.Body >
    <Card.Title> <h3>{name}</h3>
    </Card.Title>
    <Card.Text>
    <h5>Package Highlights:</h5>
    <p>{initial}</p>

    </Card.Text>
    <Card.Text>
    <h5>Flight and Transport:</h5>
    <p>{description}</p>

    </Card.Text>
    <Card.Text>
    <h5>Price:</h5>
    <p>BDT {price}</p>

    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    <Link to={`confirmOrder/${_id}`}> <button  type="button" class="btn btn-primary">Book Now</button> </Link>
   
    
  </Card.Body>
</Card>
        </div>
    );
};

export default TourPackage;