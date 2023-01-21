import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const App2 = () => {
const names = ["Images/autoSlider1.jpg", "Images/autoSlider2.jpg", "Images/autoSlider3.jpg","Images/autoSlider4.jpg"];

 let [seconds, setSeconds] = useState(0);

  // const items = [];

  // for (let i = 0; i < names.length; i++) {
  //   items.push(<li>{names[i]}</li>);
  // }
  useEffect(() => {
        const timer = setInterval(() => {
          setSeconds(seconds +1)   
           if(seconds>names.length-2){
            // setSeconds(seconds=0)   
          }

        }, 3000);
    //     //            // clearing interval
    return () => clearInterval(timer);
      });
    
  
  return(
    <>        
        <Row >

          <Container fluid >
     {/* <ul>{names[seconds]}</ul>; */}
{/* <img src="Images/logo-vezeeta.jfif" alt='logo'/>  */}
<img className=" imgSlider" src={names[seconds]} alt='logo'/> 

</Container>
</Row>


   </>
  )
}
export default App2;