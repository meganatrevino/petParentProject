import React from "react";

const Dog = props => (
  <div className="card w-25 m-2">
    <img className="card-img-top" src={props.dog.image} alt="dog" />
    <div className="card-body">
      <h3 className="card-title">{props.dog.name}</h3>
      <h6 className="card-subtitle mb-2 text-muted">{props.dog.summary}</h6>
      <hr />
      <p className="card-subtitle text-muted">Potty Schedule</p>
      <p className="card-text">{props.dog.pottySchedule}</p>
      <p className="card-subtitle text-muted">Feeding Instructions</p>
      <p className="card-text">{props.dog.feedingInstructions}</p>
      <button className="btn btn-primary" onClick={() => props.updateDog(props.dog.id)}>
        Update
      </button>
      <button onClick={() => props.deleteDog(props.dog.id)} className="btn ml-2 btn-danger">
        Delete
      </button>
    </div>
  </div>
);

export { Dog };
