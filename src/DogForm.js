import React, { useState, useEffect } from "react";

const DogForm = props => {
  const [newDog, setNewDog] = useState({
    name: "",
    image: "https://source.unsplash.com/1600x900/?dog,puppy",
    feedingInstructions: "",
    pottySchedule: "",
    summary: ""
  });

  useEffect(() => {
    if (props.dogToUpdate) {
      setNewDog(props.dogToUpdate);
    }
  }, []);

  const updateNewDog = e => {
    const updatedValue = { [e.target.name]: e.target.value };
    setNewDog({ ...newDog, ...updatedValue });
  };

  const submitAddDog = dog => {
    setNewDog({
      name: "",
      image: "https://source.unsplash.com/1600x900/?dog,puppy",
      feedingInstructions: "",
      pottySchedule: "",
      summary: ""
    });
    props.addDog(dog);
  };

  const cancel = () => {
    setNewDog({
      name: "",
      image: "https://source.unsplash.com/1600x900/?dog,puppy",
      feedingInstructions: "",
      pottySchedule: "",
      summary: ""
    });
    props.toggleDogFormPopUp();
  };

  return (
    <div
      className={`modal fade ${props.dogFormIsOpen && "show"}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: props.dogFormIsOpen ? "block" : "none" }}>
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add A New Dog</h5>
            <button type="button" className="close" onClick={() => cancel()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter dogs name."
                name="name"
                value={newDog.name}
                onChange={e => updateNewDog(e)}
              />
            </div>
            <div className="form-group">
              <label>Summary</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Tell us about your dog."
                name="summary"
                value={newDog.summary}
                onChange={e => updateNewDog(e)}
              />
            </div>
            <div className="form-group">
              <label>Feeding Instructions</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter feeding instructions."
                name="feedingInstructions"
                value={newDog.feedingInstructions}
                onChange={e => updateNewDog(e)}
              />
            </div>
            <div className="form-group">
              <label>Potty Schedule</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter potty schedule."
                name="pottySchedule"
                value={newDog.pottySchedule}
                onChange={e => updateNewDog(e)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => cancel()}>
              Close
            </button>
            <button
              onClick={() => submitAddDog(newDog)}
              type="button"
              className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DogForm };
