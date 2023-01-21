// import * as React from 'react';
// import Button from '@mui/material/Button';

// const App3 = () => {
//   return <Button variant="contained">Hello World</Button>;
// }
// export default App3;
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
///////////////////////
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import Autocomplete from '@mui/material/Autocomplete';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

 export  function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App4() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
      <>
    <Box className='d-lg-block d-none' sx={{ width: '77%' }} style={{borderColor:'white',borderStyle:'solid',borderRadius:'20PX',backgroundColor:'white'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
        <Tab className='justify item center mt-2 '  icon={<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-calendar-plus" viewBox="0 0 16 16">
  <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>

} iconPosition="start" label={`Book a doctor `}sx={{ minWidth: '50%',fontWeight:"bold" }}{...a11yProps(0)} />

          <Tab className='justify item center mt-2 'icon={<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
</svg>}iconPosition="start" label="Telehealth call with doctor" sx={{ minWidth: '50%' ,fontWeight:"bold" }}{...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* tabs1 Dropdown */}
        <div >
    <span>
     
      <FormControl sx={{ minWidth:"20%"}}>
        <InputLabel id="demo-controlled-open-select-label" style={{color:'#0070cd'}}>Choose specialty</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Choose specialty"
          onChange={handleChange2}

        >
          <MenuItem value="">
            <em>Choose specialty</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </span>
      <span>
    
      <FormControl sx={{ minWidth: "20%"}}>
        <InputLabel id="demo-controlled-open-select-label"style={{color:'#0070cd'}}>Choose city</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Choose city"
          onChange={handleChange2}

        >
          <MenuItem value="">
            <em>Choose city</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </span>
      <span>
    
      <FormControl sx={{ minWidth: "20%"}}>
        <InputLabel id="demo-controlled-open-select-label"style={{color:'#0070cd'}}>Choose area</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          icon={<FavoriteIcon/>}
          iconPosition="start"
          label="Choose area"
          onChange={handleChange2}

        >
          <MenuItem value="">
            <em>Choose area</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField 
  id="outlined-name"
  label="Doctor namr or hospital"
//   value={name}
  onChange={handleChange}
/>
      <Button variant="contained" sx={{ minWidth: "18%" ,minHeight:55,backgroundColor:"#f44336"}}>
    <span><SearchIcon/></span> Search
</Button>
      </span>
    </div>
       {/* tabs2 */}
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='d-flex justify-content-center' >
    <span>
     
      <FormControl sx={{ minWidth:"20rem"}}>
        <InputLabel id="demo-controlled-open-select-label" style={{color:'#0070cd'}}>Choose specialty</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Choose specialty"
          onChange={handleChange2}

        >
          <MenuItem value="">
            <em>Choose specialty</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </span>
     
      <span >
    
     
    
      <Button variant="contained" sx={{ minWidth: "19%" ,minHeight:55,backgroundColor:"#f44336"}}>
    <span><SearchIcon/></span> Search
</Button>
      </span>
    </div>   
       </TabPanel>
      
    </Box>
    {/* ///////////////// */}
   
     
    </>
      
  
  );
}

// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Prestige', year: 2006 },
//   { title: 'The Lion King', year: 1994 },
  
//   { title: '3 Idiots', year: 2009 },
//   { title: 'Monty Python and the Holy Grail', year: 1975 },
// ];
// <Autocomplete
// id="combo-box-demo"
// options={top100Films}
// getOptionLabel={(option) => option.title}
// style={{ width: 300 }}
// renderInput={(params) => <TextField 
//   {...params}  label="Combo box" icon={<SearchIcon/>}  />}
//   />
//       {/* ///////////////// */}
//       <div class="d-flex flex-row  ">

//       <Dropdown>
//   <Dropdown.Toggle id="dropdown-button-dark-example1" variant="white" className='d-inline-flex'  style={{borderColor:'#d1d0ce',borderStyle:'solid',borderRadius:'.2rem',color:"#0070cd",padding:'1.1rem'}}>
//     Dropdown Button
//   </Dropdown.Toggle>

//   <Dropdown.Menu variant="blue">
//     <Dropdown.Item href="#/action-1" active>
//       Action
//     </Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//     <Dropdown.Divider />
//     <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
// <Dropdown>
//   <Dropdown.Toggle id="dropdown-button-dark-example1" variant="white" className='d-inline-flex'  style={{borderColor:'#d1d0ce',borderStyle:'solid',borderRadius:'.2rem',color:"#0070cd",padding:'1.1rem'}}>
//     Dropdown Button
//   </Dropdown.Toggle>

//   <Dropdown.Menu variant="blue">
//     <Dropdown.Item href="#/action-1" active>
//       Action
//     </Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//     <Dropdown.Divider />
//     <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
// <Dropdown>
//   <Dropdown.Toggle id="dropdown-button-dark-example1" variant="white" className='d-inline-flex'  style={{borderColor:'#d1d0ce',borderStyle:'solid',borderRadius:'.2rem',color:"#0070cd",padding:'1.1rem'}}>
//     Dropdown Button
//   </Dropdown.Toggle>

//   <Dropdown.Menu variant="blue">
//     <Dropdown.Item href="#/action-1" active>
//       Action
//     </Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//     <Dropdown.Divider />
//     <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
// <div class="input-group">
// <div class="form-outline">
// <input type="search" id="form1" class="form-control" />
// <label class="form-label" for="form1">Search</label>
// </div>
// <button type="button" class="btn btn-primary">
// <i class="fas fa-search"></i>
// </button>
// </div>

// </div>
