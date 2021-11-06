import React from 'react';
import { useForm } from 'react-hook-form';

const AddPackages = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
       
        fetch('https://dry-thicket-57543.herokuapp.com/addPackages',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
       .then((result) => {
           alert("Tour Package Added Sucessfully")
           console.log(result);
       })
    }

    return (
        <div>
       <h1>Add Packages</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
   
      <br />
      <input {...register("name")} placeholder="Name"  className="m-2 w-50"/>
      <br />
      <input {...register("initial")} placeholder="Initial" className="m-2 w-50"/>
      <br />
      <input {...register("description")} placeholder="Description"  className="m-2 w-50"/>
      <br />
      <input {...register("Image", { required: true })} placeholder="Image" className="m-2 w-50"/>
      <br/>
      <input {...register("price", { required: true })} placeholder="Price" className="m-2 w-50" />
              <br />
     
      <input type="submit" value="Add Packages" className="btn btn-primary"/>
    </form>


        </div>
    );
};

export default AddPackages;