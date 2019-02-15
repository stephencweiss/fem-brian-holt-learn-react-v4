import React, { Component } from "react";
// Create a class, App

class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, animal, breed, media, location } = this.props;
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    return (
      <div className="pet">
        <div className="image-container">
          <img src={photos[0].value} alt={name} />
        </div>
        <div className="info">
          {animal} - {name} - {breed} - {location}
        </div>
      </div>
    );
  }
}

export default Pet;
