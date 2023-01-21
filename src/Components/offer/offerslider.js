import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./offerslider.css";
function ContainerOffer() {
  const names = [
    "Teeth Cleaning",
    "Facial Cleansing",
    "Metal Braces",
    "Face peeling",
    "Vitamin D",
    "Laser Hair Removal",
    "Weight Loss",
    "Vision Correction",
  ];
  const images = [
    "Images/offer1.jpg",
    "Images/offer2.jpg",
    "Images/offer3.jpg",
    "Images/offer4.jpg",
    "Images/offer5.jpg",
    "Images/offer6.jpg",
    "Images/offer7.jpg",
    "Images/offer8.jpg",
  ];
  const pirce = [
    "250 EGP",
    "500 EGP",
    "350 EGP",
    "50 EGP",
    "700 EGP",
    "1000 EGP",
    "400 EGP",
    "850 EGP",
  ];
  const pirceBefore = [
    "2500 EGP",
    "5000 EGP",
    "3500 EGP",
    "500 EGP",
    "7000 EGP",
    "10000 EGP",
    "4000 EGP",
    "8500 EGP",
  ];
  const discount = [
    "25% off",
    "50% off",
    "35% off",
    "50% off",
    "70% off",
    "10% off",
    "40% off",
    "85% off",
  ];

  const [i, setI] = useState(0);
  function handleChange1() {
    if (i < 3) {
      setI((i) => i + 4);
      console.log(i);
    }
  }
  function handleChange2() {
    if (i > 0) {
      setI((i) => i - 4);
      console.log(i);
    }
  }
  function handleChange3() {
    if (i < 6) {
      setI((i) => i + 2);
      console.log(i);
    }
  }
  function handleChange4() {
    if (i > 0) {
      setI((i) => i - 2);
      console.log(i);
    }
  }
  return (
    <Row className="mainContainer m-0 p-0  mt-5">
      {/* <Col lg={1}></Col> */}
      <Col lg={12} className="p-0">
        {" "}
        <Row className="firstRow p-0 m-0">
            <Row className="firstRowText p-0 m-0">
            <Col lg={1}></Col>
            <Col lg={8} className="ms-5 ps-3">  <img className="corona" src="Images/corona.jfif" alt="corna" />
            &nbsp;  Corona Symptoms ?</Col>
           
            </Row>
            <Row className="secoundRowTextp-0 m-0 ">
              {" "}
              <Col xs={1}></Col>
            <Col xs={8} className="ms-5 ps-3 secoundRowText "><p className=" text-wrap "> You can ask and consult an internist about corona symptoms through
              a free call, sponsored by the Ministry of Health and Population,
              from 8 am to 12 am.
              {/* <div className="mt-5"  ><hr/></div> */}
              </p>
              </Col>
             
            </Row>
        </Row>
        <Row className="thirdRow p-0 m-0">
          {/* <Col lg={1}></Col>
        <Col lg={9}className='><hr/></Col> 
        </Row>
        <Row className=" m-0 p-0  ">*/}
          <Row><Col lg={1} ></Col>
            <Col lg={8} className="ms-5 ps-4  thirdText mt-2 mb-5"   >Choose from top offers
            </Col>
            </Row>
          {/* ///////////////silder display1 ////////*/}

          <Row className="p-0 m-0 d-lg-flex justify-content-center  align-items-center mb-5 d-none">
            {/* <button onClick={handleChange2} className="btn btn-primary">
        {"<"}  
        </button>  */}
            <div
              className="p-0 me-2"
              style={{ width: "3%", hight: "3%", fontSize: ".1rem" }}
            >
              <div className="p-0">
                <div>
                  <button onClick={handleChange2} className="btn btn-light ">
                    <ArrowBackIosNewIcon sx={{ height: 11, width: 11 }} />
                  </button>
                </div>
              </div>
            </div>
            <Card className="p-0 me-3 instanceCard" style={{ width: "17%" }}>
              <Card.Img variant="top" src={images[i]} className="imgBadge" />
              <Card.Body>
                <Card.Title className="textcolor">{names[i]}</Card.Title>
                <Badge bg="danger" className="Badge">
                  {discount[i]}
                </Badge>

                <span className="textpricebefore text-decoration-line-through ">
                  {pirceBefore[i]}
                </span>

                <span className="textprice">{pirce[i]}</span>
              </Card.Body>
            </Card>

            <Card className="p-0 me-3 instanceCard" style={{ width: "17%" }}>
              <Card.Img
                variant="top"
                src={images[i + 1]}
                className="imgBadge"
              />
              <Card.Body>
                <Card.Title className="textcolor">{names[i + 1]}</Card.Title>
                <Badge bg="danger" className="Badge">
                  {discount[i + 1]}
                </Badge>
                <span className="textpricebefore text-decoration-line-through ">
                  {pirceBefore[i + 1]}
                </span>

                <span className="textprice">{pirce[i + 1]}</span>
              </Card.Body>
            </Card>

            <Card className="p-0 me-3 instanceCard " style={{ width: "17%" }}>
              <Card.Img
                variant="top"
                src={images[i + 2]}
                className="imgBadge"
              />
              <Card.Body>
                <Card.Title className="textcolor">{names[i + 2]}</Card.Title>
                <Badge bg="danger" className="Badge">
                  {discount[i + 1]}
                </Badge>
                <span className="textpricebefore text-decoration-line-through ">
                  {pirceBefore[i + 2]}
                </span>

                <span className="textprice">{pirce[i + 2]}</span>
              </Card.Body>
            </Card>
            <Card className="p-0 me-3 instanceCard" style={{ width: "17%" }}>
              <Card.Img
                variant="top"
                src={images[i + 3]}
                className="imgBadge"
              />
              <Card.Body>
                <Card.Title className="textcolor">{names[i + 3]}</Card.Title>
                <Badge bg="danger" className="Badge">
                  {discount[i + 1]}
                </Badge>
                <span className="textpricebefore text-decoration-line-through ">
                  {pirceBefore[i + 3]}
                </span>

                <span className="textprice">{pirce[i + 3]}</span>
              </Card.Body>
            </Card>
            <div className="p-0 me-3" style={{ width: "3%", hight: "3%" }}>
              <div className="p-0">
                <div>
                  <button onClick={handleChange1} className="btn btn-light ">
                    <ArrowForwardIosIcon sx={{ height: 11, width: 11 }} />
                  </button>
                </div>
              </div>
            </div>
          </Row>
          {/* ///////////////silder display2 ////////*/}
          <Row className="p-0 m-0 d-lg-none justify-content-center  align-items-center mb-5 d-felx">
            {/* <button onClick={handleChange2} className="btn btn-primary">
        {"<"}  
        </button>  */}
            <div
              className="p-0 me-5"
              style={{ width: "3%", hight: "3%", fontSize: ".1rem" }}
            >
              <div className="p-0">
                <div>
                  <button onClick={handleChange4} className="btn btn-light ">
                    <ArrowBackIosNewIcon sx={{ height: 11, width: 11 }} />
                  </button>
                </div>
              </div>
            </div>
            <Card className="p-0 me-3 instanceCard" style={{ width: "30%" }}>
              <Card.Img variant="top" src={images[i]} className="imgBadge" />
              <Card.Body>
                <Card.Title className="textcolor">{names[i]}</Card.Title>
                <Badge bg="danger" className="Badge">
                  {discount[i]}
                </Badge>

                <span className="textpricebefore text-decoration-line-through ">
                  {pirceBefore[i]}
                </span>

                <span className="textprice">{pirce[i]}</span>
              </Card.Body>
            </Card>

            <Card className="p-0 me-3 instanceCard" style={{ width: "30%" }}>
              <Card.Img
                variant="top"
                src={images[i + 1]}
                className="imgBadge"
              />
              <Card.Body>
                <Card.Title className="textcolor">{names[i + 1]}</Card.Title>
                <Badge bg="danger" className="Badge">
                  {discount[i + 1]}
                </Badge>
                <span className="textpricebefore text-decoration-line-through ">
                  {pirceBefore[i + 1]}
                </span>

                <span className="textprice">{pirce[i + 1]}</span>
              </Card.Body>
            </Card>

           
           
            <div className="p-0 me-3" style={{ width: "3%", hight: "3%" }}>
              <div className="p-0">
                <div>
                  <button onClick={handleChange3} className="btn btn-light ">
                    <ArrowForwardIosIcon sx={{ height: 11, width: 11 }} />
                  </button>
                </div>
              </div>
            </div>
          </Row>
        </Row>
      </Col>
      {/* <Col lg={1}></Col> */}
    </Row>
  );
}

export default ContainerOffer;
