import React from "react";
import { Dog } from "./Dog";

const DogList = props => (
  <div className="d-flex flex-wrap">
    {props.dogs.map(dog => (
      <Dog
        dog={dog}
        key={dog.id}
        updateDog={props.updateDog}
        deleteDog={props.deleteDog}
      />
    ))}
    <div className="card w-25 m-2">
      <div onClick={() => props.toggleDogFormPopUp()} className="card-body">
        <h3 className="card-title">Add New Dog</h3>
      </div>
    </div>
  </div>
);

export { DogList };
