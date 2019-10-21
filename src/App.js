import React, { Component } from "react";
import { DogList } from "./DogList";
import { DogForm } from "./DogForm";
import uuidv4 from "uuid/v4";
import Ellie from "./EllieBelly.jpg";
import Jazz from "./jazz.jpg"
import Chewie from "./chew.jpg"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      dogFormIsOpen: false,
      dogToUpdate: null
    };
    this.addDog = this.addDog.bind(this);
    this.updateDog = this.updateDog.bind(this);
    this.deleteDog = this.deleteDog.bind(this);
    this.toggleDogFormPopUp = this.toggleDogFormPopUp.bind(this);
  }

  componentDidMount() {
    const updatedDogs = [
      ...this.state.dogs,
      {
        id: uuidv4(),
        name: "Ellie",
        image: Ellie,
        feedingInstructions: "Fill bowl once a day.",
        pottySchedule: "Once in the morning, noon and night.",
        summary:
          "Very lovable and enjoys cuddles. She can also be very energetic."
      },
      {
        id: uuidv4(),
        name: "Jazz",
        image: Jazz,
        feedingInstructions: "Feed once a day at 6pm.",
        pottySchedule: "Once in the morning, noon and night.",
        summary:
          "Jasmine is smart and calm. She likes to protect the house by barking."
      },
      {
        id: uuidv4(),
        name: "Chewie",
        image: Chewie,
        feedingInstructions: "Feed once in the morning and once at night before 8pm.",
        pottySchedule: "Once in the morning, twice in the afternoon and twice at night.",
        summary:
          "A happy puppy who loves his ball. He has an allergy problem which he takes a pill every morning at 7am."
      }

    ];
    this.setState({ dogs: updatedDogs });
  }

  addDog(dogToAdd) {
    let updatedDogs;
    if (dogToAdd.id) {
      updatedDogs = this.state.dogs.map(dog =>
        dogToAdd.id === dog.id ? { ...dog, ...dogToAdd } : dog
      );
    } else {
      const newDog = { ...dogToAdd, ...{ id: uuidv4() } };
      updatedDogs = [...this.state.dogs, newDog];
    }
    this.setState({ dogs: updatedDogs, dogFormIsOpen: false });
  }

  toggleDogFormPopUp() {
    this.setState({
      dogFormIsOpen: !this.state.dogFormIsOpen,
      dogToUpdate: null
    });
  }

  updateDog(id) {
    const dogToUpdate = this.state.dogs.find(dog => dog.id === id);
    this.setState({ dogToUpdate, dogFormIsOpen: true });
  }

  deleteDog(id) {
    const newDogs = this.state.dogs.filter(dog => dog.id !== id);
    this.setState({ dogs: newDogs });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Pet Parent</h1>
        <DogList
          dogs={this.state.dogs}
          toggleDogFormPopUp={this.toggleDogFormPopUp}
          updateDog={this.updateDog}
          deleteDog={this.deleteDog}
        />
        {this.state.dogFormIsOpen && (
          <DogForm
            dogFormIsOpen={this.state.dogFormIsOpen}
            toggleDogFormPopUp={this.toggleDogFormPopUp}
            addDog={this.addDog}
            dogToUpdate={this.state.dogToUpdate}
          />
        )}
      </div>
    );
  }
}

export default App;
