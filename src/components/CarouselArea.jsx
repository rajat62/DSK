import Carousel from 'react-bootstrap/Carousel';

import React1 from "../Assets/React1.jpeg"
import React2 from "../Assets/2.jpg"
import React3 from "../Assets/3.jpg"

import 'bootstrap/dist/css/bootstrap.min.css';
function CarouselArea() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={React1}
          alt="First slide"

        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={React2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={React3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselArea;