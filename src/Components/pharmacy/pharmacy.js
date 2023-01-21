import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import "./pharmacy.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function MediaControlCard(fulid) {
  // const theme = useTheme();

  return (
    <>
      <Row className="containerSize m-0 p-0">
        <Row>
          <Col lg={1}> </Col>
          <Col lg={10}>
            {/* ///////////fristTEXT////////////// */}
            <Row className="firstPharmacyRow ">
              New services for better healthcare
            </Row>
            {/* ///////////////////////// */}
            {/* ///////////secondPharmacy////////////// */}

            <Row className="secondPharmacyRow d-flex justify-content-center mb-4">
              <Row>
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
              </Row>
            </Row>
            {/* ///////////////////////// */}
            {/* ///////////third////////////// */}

            <Row>
              <Col lg={6} className="secondPharmacyCol ps-0 pe-4">
                {" "}
                {/* ///////////thirdCard1////////////// */}
                <div className="cardMain ">
                  <Card sx={{ display: "flex" }} className=" mb-5">
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="Images/desktop.jpg"
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography
                          component="div"
                          variant="h6"
                          className="cardCol2 fw-bold"
                        >
                          Teleconsultation{" "}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          style={{ fontSize: "15px" }}
                        >
                          Teleconsultation Schedule a voice or video call with a
                          specialized doctor{" "}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      >
                        <IconButton
                          aria-label="play/pause"
                          className="mt-0 pt-0"
                        >
                          <span>
                            <a
                              href="#Content"
                              style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                textDecoration: "none",
                              }}
                            >
                              Book a call
                            </a>{" "}
                            <PlayArrowIcon
                              sx={{ height: 20, width: 25, color: "red" }}
                            />
                          </span>{" "}
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                </div>
                {/* ///////////////////////// */}
              </Col>
              <Col lg={6} className=" ps-0">
                {/* ///////////thirdCard2////////////// */}

                <div className="cardMain ">
                  <Card sx={{ display: "flex" }}className=" mb-5" >
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="Images/desktop2.jpg"
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}                          className="p-3"
>
                        <Typography
                          component="div"
                          variant="h6"
                          className="cardCol2 fw-bold"
                        >
                          Home Visit{" "}
                        </Typography>
                        <Typography
                          style={{ fontSize: "15px" }}
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          Choose the specialty, and the doctor will visit you at
                          home.{" "}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      >
                        <IconButton
                          aria-label="play/pause"
                          className="mt-0 pt-0"
                        >
                          <span>
                            <a
                              href="#Content"
                              style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                textDecoration: "none",
                              }}
                            >
                              Book a visit
                            </a>{" "}
                            <PlayArrowIcon
                              sx={{ height: 20, width: 25, color: "red" }}
                            />
                          </span>
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                </div>
                {/* ///////////////////////// */}
              </Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Row>
    </>
  );
}
