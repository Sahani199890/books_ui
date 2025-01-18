import { Carousel } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./corousal.css";

function IndividualIntervalsExample() {
  const arr = [1, 2, 3, 4, 5];

  return (
    <Carousel className="corousal-parent">
      {arr &&
        arr.map((a, idx) => (
          <Carousel.Item key={idx} interval={3000}>
            <figure className="d-flex align-items-center">
              <img src={logo} alt="corousal-img" height="200px" width="300px" />
              <figcaption>Image {a}</figcaption>
            </figure>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default IndividualIntervalsExample;
