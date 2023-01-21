import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./catDoctores.css";
function ContainerCatdoc() {
  const names = [
    "Skin",
    "Teeth",
    "Mental, Emotional ",
    "Child",
    " Brain & Nerves  ",
    "Bones",
    "Gynaecology and Infertility",
    "VEar, Nose and Throat",
  ];
  const images = [
    "Images/specialtie1.jpg",
    "Images/specialtie2.jpg",
    "Images/specialtie3.jpg",
    "Images/specialtie4.jpg",
    "Images/specialtie5.jpg",
    "Images/specialtie6.jpg",
    "Images/specialtie7.jpg",
    "Images/specialtie8.jpg",
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
    <Row className="mainContainerCat m-0 p-0">
        <Row></Row>
      <Col lg={12} className="p-0">
        {" "}
        <Row className="firstRowText p-0 m-0 pt-4 pb-2" >
            <Col lg={1}></Col>
            <Col lg={8} className="ms-5 ps-3">
            &nbsp; Book from top specialties
</Col>
           
            </Row>
        <Row className="thirdRow m-0 p-0 mb-5  ">
          {/* ///////////////silder display1 ////////*/}

          <Row className="p-0 m-0 d-lg-flex justify-content-center  d-flex align-items-center d-none">
          
            <div className="p-0 me-2" style={{ width: "3%", hight: "3%",fontSize:'.1rem' }}>
              <div className="p-0">
                <div >
                  <button onClick={handleChange2} className="btn btn-light ">
                   <ArrowBackIosNewIcon  sx={{ height: 11, width: 11 }} />
                  </button>
                </div>
              </div>
            </div>
            <Card className="p-0 me-3 instanceCard" style={{ width: "17%" }}>
              <Card.Img variant="top" src={images[i]}  className='imgBadge'/>
              <Card.Body>
                <Card.Title className="textcolor">{names[i]}</Card.Title>

               
              </Card.Body>
            </Card>

            <Card className="p-0 me-3 instanceCard" style={{ width: "17%" }}>
              <Card.Img variant="top" src={images[i + 1]} className='imgBadge'/>
              <Card.Body>
                <Card.Title className="textcolor" >{names[i + 1]}</Card.Title>
               
              </Card.Body>
            </Card>

            <Card className="p-0 me-3 instanceCard " style={{ width: "17%" }}>
              <Card.Img variant="top" src={images[i + 2]} className='imgBadge'/>
              <Card.Body>
                <Card.Title className="textcolor">{names[i + 2]}</Card.Title>
                
              </Card.Body>
            </Card>
            <Card className="p-0 me-3 instanceCard" style={{ width: "17%" }}>
              <Card.Img variant="top" src={images[i + 3]} className='imgBadge'/>
              <Card.Body>
                <Card.Title className="textcolor" >{names[i + 3]}</Card.Title>

              </Card.Body>
            </Card>
            <div className="p-0 me-3" style={{ width: "3%", hight: "3%" }}>
              <div className="p-0">
                <div >
                  <button onClick={handleChange1} className="btn btn-light ">
                  <ArrowForwardIosIcon sx={{ height: 11, width: 11 }}/>    
                                </button>
                </div>
              </div>
            </div>
          </Row>
                    {/* ///////////////silder display2 ////////*/}
                    <Row className="p-0 m-0 d-lg-none justify-content-center  d-flex align-items-center d-felx">
          
            <div className="p-0 me-4" style={{ width: "3%", hight: "3%",fontSize:'.1rem' }}>
              <div className="p-0">
                <div >
                  <button onClick={handleChange4} className="btn btn-light ">
                   <ArrowBackIosNewIcon  sx={{ height: 11, width: 11 }} />
                  </button>
                </div>
              </div>
            </div>
            <Card className="p-0 me-3 instanceCard" style={{ width: "30%" }}>
              <Card.Img variant="top" src={images[i]}  className='imgBadge'/>
              <Card.Body>
                <Card.Title className="textcolor">{names[i]}</Card.Title>

               
              </Card.Body>
            </Card>

            <Card className="p-0 me-3 instanceCard" style={{ width: "30%" }}>
              <Card.Img variant="top" src={images[i + 1]} className='imgBadge'/>
              <Card.Body>
                <Card.Title className="textcolor" >{names[i + 1]}</Card.Title>
               
              </Card.Body>
            </Card>

            
           
            <div className="p-0 me-3" style={{ width: "3%", hight: "3%" }}>
              <div className="p-0">
                <div >
                  <button onClick={handleChange3} className="btn btn-light ">
                  <ArrowForwardIosIcon sx={{ height: 11, width: 11 }}/>    
                                </button>
                </div>
              </div>
            </div>
          </Row>
{/* //////////////////////////////// */}
        </Row>
      </Col>
      {/* <Col lg={1}></Col> */}
    </Row>
  );
}

export default ContainerCatdoc;
