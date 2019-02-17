import React, { Component } from "react";
import { Link } from "@reach/router";

class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, animal, breed, media, location, id } = this.props;
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    const imageNotFoundSrc =
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiOtr-ptcPgAhUK5YMKHT_fAa4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F2232984%2Ferror_file_not_found_question_mark_icon&psig=AOvVaw3nKsfQ6YAgI3LY7JUlN-Ul&ust=1550515187622092";
    const hero = photos[0] ? photos[0].value : imageNotFoundSrc;
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {" "}
            {animal} - {breed} - {location}{" "}
          </h2>
        </div>
      </Link>
    );
  }
}

export default Pet;
