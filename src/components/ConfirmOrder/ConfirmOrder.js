import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const ConfirmOrder = () => {
    const { register, handleSubmit } = useForm();
    const [tour, setTour] = useState({});
    const {tourId} = useParams();
    const email=sessionStorage.getItem("email");
  

  useEffect(() => {
    fetch(`https://dry-thicket-57543.herokuapp.com/tourOrder/${tourId}`)
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, []);
    

  const onSubmit = data => {
      data.email=email;
      fetch("https://dry-thicket-57543.herokuapp.com/confirmedTour",{
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      })
      .then((res) => res.json())
     .then((result) => {
         alert("Order placed sucessfully")
         console.log(result.insertedId);
     })
      
   
  };

return (
        <div>
            <div className="row">
<div className="col-md-6">
<Card>
  <div className="text-center">
  <Card.Img variant="top" src={tour?.image} style={{ width: "50%", height: "100%" }} className="img-thumbnail mt-3" />
  </div>
  <Card.Body >
    <Card.Title> <h3>{tour?.name}</h3>
    </Card.Title>
    <Card.Text>
    <h5>Package Highlights:</h5>
    <p>{tour?.initial}</p>

    </Card.Text>
    <Card.Text>
    <h5>Flight and Transport:</h5>
    <p>{tour?.description}</p>

    </Card.Text>
    <Card.Text>
    <h5>Price:</h5>
    <p>BDT {tour?.price}</p>

    </Card.Text>
  </Card.Body>
  
  
</Card>
</div>

<div className="col-md-6">

<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Image")} placeholder="Image" defaultValue={tour?.image} className="m-2 w-50"/>
      <br />
      <input {...register("name")} placeholder="Package Title" defaultValue={tour?.name} className="m-2 w-50"/>
      <br />
      <input {...register("id")} placeholder="Package ID" defaultValue={tour?._id} className="m-2 w-50"/>
      <br />
      <input {...register("email")} placeholder="Email" defaultValue={email}  className="m-2 w-50"/>
      <br />
      <input {...register("price", { required: true })} defaultValue={tour?.price} className="m-2 w-50" />
              <br />

      <input {...register("address")} placeholder="Address" className="m-2 w-50" required/>
      <br />
     
      <input type="submit" value="Confirm Order" className="btn btn-primary"/>
    </form>

</div>

            </div>

        </div>
    );
};

export default ConfirmOrder;