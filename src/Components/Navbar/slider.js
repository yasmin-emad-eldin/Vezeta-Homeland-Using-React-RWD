import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { MdCall } from "react-icons/md";
import App4, { TabPanel } from "./taps";
// import Row from "react-bootstrap/Row";
import ContainerOffer from "../offer/offerslider"
import MediaControlCard from "../pharmacy/pharmacy";
import ContainerCatdoc from'../categorydoctors/catDoctores';
import Mediadownloud from "../downloudside/downloud";

function CarouselFadeExample() {

  return (
    <>
      <Container fluid className="parentImgSlider px-0">
        <Carousel fade className='d-lg-block d-none'>

          <Carousel.Item >
            <img
            className="d-block w-100 imgSlider"
              src={require("../Images/autoSlider1.jpg")}
              alt="frist slide"
            />
            {/* <Carousel.Caption className="box carousel-caption ">h
            <h2 style={{ color: "#48545c" }}>
              Better Healthcare for a Better Life
            </h2>
            <h4 style={{ color: "#6f7072" }}>
              Book online or{" "}
              <span style={{ color: "red" }}>
                <MdCall />
              </span>{" "}
              call16676
            </h4>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSlider"
              src={require("../Images/autoSlider2.jpg")}
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSlider"
              src={require("../Images/autoSlider3.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSlider"
              src={require("../Images/autoSlider4.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
        <div className="box carousel-caption d-lg-block d-none  ">
            <h2  className='d-flex align-items-start' style={{ color: "#48545c" }}>
              Better Healthcare for a Better Life
            </h2>
            <h4 className='d-flex align-items-start' style={{ color: "#6f7072" }}>
              Book online or&nbsp;<span style={{ color: "red" }}><MdCall /></span>&nbsp;16676</h4>
              <TabPanel/>
              {/* <div  className='boxSearch'><TabPanel/></div> */}

          </div>
          <div  className='boxSearch d-lg-flex justify-content-center d-none '><App4/></div>
      <div> <MediaControlCard/></div>
<div><ContainerOffer/></div>
<div><ContainerCatdoc/></div>
<div><Mediadownloud/></div>

      </Container>
    
    </>
  );
}

export default CarouselFadeExample;
