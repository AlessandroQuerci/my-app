import { Component } from "react";

class ImageComponent extends Component {
  render(props) {
    return <img src={props.imgSrc} alt={props.imgAlt} />;
  }
}
export default ImageComponent;
