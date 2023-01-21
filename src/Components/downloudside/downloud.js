import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./downloud.css";
export default function Mediadownloud(fulid) {
  // const theme = useTheme();
  const apple = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-apple"
      viewBox="0 0 16 16"
    >
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
    </svg>
  );
  const Google = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-google-play"
      viewBox="0 0 16 16"
    >
      <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
    </svg>
  );
  const store = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
  </svg>
  );
  const care=<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-pulse" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Zm8.252-6.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z"/>
</svg>
const parent=<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
<path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>
const calander=<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
<path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
</svg>
const sheild=<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shield-plus" viewBox="0 0 16 16">
<path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
<path d="M8 4.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5a.5.5 0 0 1 .5-.5z"/>
</svg>
  return (
    <>
      <Row className="containerSizedownloud m-0 p-0">
        <Row>
          <Col lg={2}> </Col>
          <Col lg={8}>
            {/* ///////////fristTEXT////////////// */}

            <Row className="firstDownRow justify-content-evenly">
              <Col lg={2}>
                <Row className="firstDownRowrowicon ">{care}</Row>
                <Row className="firstDownRowrowtittle ">All your healthcare needs</Row>
                <Row className="firstDownRowrowtext ">Search and book a clinic visit, home visit, or a teleconsultation. Order your medicine and book a service or operation.</Row>
              </Col>
              <Col lg={2}>
                <Row className="firstDownRowrowicon ">{parent}</Row>
                <Row className="firstDownRowrowtittle ">Verified patient reviews
</Row>
                <Row className="firstDownRowrowtext ">Doctor ratings are from patients who booked and visited the doctor through Vezeeta.</Row>
              </Col>
              <Col lg={2}>
                <Row className="firstDownRowrowicon ">{calander}</Row>
                <Row className="firstDownRowrowtittle ">Your booking is confirmed
</Row>
                <Row className="firstDownRowrowtext ">Your booking is automatically confirmed, as the doctor specifies his working hours and is notified of the booking details.</Row>
              </Col>{" "}
              <Col lg={2}>
                {" "}
                <Row className="firstDownRowrowicon ">{sheild}</Row>
                <Row className="firstDownRowrowtittle ">Book for free, and pay in the clinic</Row>
                <Row className="firstDownRowrowtext ">The consultation fees stated on Vezeeta are the actual doctor's fees with no extra charges.</Row>
              </Col>{" "}
            </Row>
            {/* ///////////////////////// */}
            {/* ///////////secondPharmacy////////////// */}

            <Row className="secondownRow d-flex justify-content-evenly mb-4 ">
              <Col lg={5}>
                <Row className="firstDownText mt-5 pt-3 mb-4">
                  {" "}
                  Download Vezeeta Application{" "}
                </Row>
                <Row className="secondDownText mb-4">
                  {" "}
                  Search, compare and book doctor consultations with ease. Order
                  your medicines & get them deilvered within 60 minutes. Track
                  your steps count & earn points on hitting the daily goal{" "}
                </Row>
                <Row>
                  <Col sx={4} className="thirdDownText">
                    <button className="btn btn-light thirdDownText">
                      {apple} App Store
                    </button>{" "}
                  </Col>
                  <Col sx={4} className="thirdDownText">
                    <button className="btn btn-light thirdDownText">
                      {Google}Google Play
                    </button>{" "}
                  </Col>
                  <Col sx={4} className="thirdDownText">
                    <button className="btn btn-light thirdDownText">
                      {store}App Gallery
                    </button>{" "}
                  </Col>
                </Row>
              </Col>
              <Col lg={4}>
                <img
                  className="imgcol2"
                  src="/Images/dowanloadApp-eg-en.jfif"
                  alt="downloud"
                />{" "}
              </Col>

              {/* <Row>
                <Col lg={8} className="pt-4 pb-2 ps-4 fs-4 fw-bold">
                  Pharmacy{" "}
                </Col>
              </Row>
              <Row>
                <Col lg={8} className=" pb-3  ps-4">
                  Get your medicine and all your pharmacy needs{" "}
                </Col>
              </Row>
              <Row>
                <Col lg={8} className="pb-4  ps-4">
                  <button className="btn btn-light text-primary fs-6 fw-bold btn-lg">
                    Place holder
                  </button>{" "}
                </Col>
              </Row> */}
            </Row>
            {/* ///////////////////////// */}
            {/* ///////////third////////////// */}
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Row>
    </>
  );
}
