import React, { Component } from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router";

const petFinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    const { id } = this.props;
    petFinder.pet
      .get({
        output: "full",
        id: id
      })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed;
        if (Array.isArray(data.petfinder.pet.breeds.breed)) {
          breed = data.petfinder.pet.breeds.breed.join(", ");
        } else {
          breed = data.petfinder.pet.breeds.breed;
        }
        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      .catch(() => {
        navigate("/");
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          <h1>Loading ... </h1>
        </div>
      );
    }
    const { animal, breed, location, name, description } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
