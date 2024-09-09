import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import addNotification from 'react-push-notification';

export default function AddSpecies() {
    let x = localStorage.getItem('ID');
    if (x==="null") {
        window.location.href = '/AdminLogin'
        
    }
    const[name=null, setName] = React.useState('')
    const[water_temp=null, setWater] = React.useState('')
    const[ph_level=null, setPh] = React.useState('')
    const[tank_size=null, setTank] = React.useState('')
    const[behaviour=null, setBehaviour] = React.useState('')
    const[diet=null, setDiet] = React.useState('')

    const Register=(e)=>{

        e.preventDefault()
        const Species={name,water_temp,ph_level,tank_size,behaviour,diet}
        console.log(Species)
        fetch("http://localhost:8080/surviva;/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(Species)
    }).then(response => {
      if (response.status === 200) {
        addNotification({
          title: 'Notification',
          message:"Registration Complete",
          native:true        
        })
        window.location.href = '/AddSpecies'
      } else {
        addNotification({
          title: 'status',
          message:"Registration failed. PLease check the Details you filled",
          native:true        
        })
      }
    }
    )
    }

    

  return (
    <div class="offset-md-1">
      <h1 align="center">Add Species</h1><br></br>
    <Container 
        
      component="form"
      
      noValidate
      autoComplete="off"
    >
      <div className="input-group mb-5">
      <TextField id="filled-basic" label="First Name" variant="filled" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      </div>
      <div className="input-group mb-5">
      <TextField id="filled-basic" label="Phone Number" variant="filled" fullWidth
      value={water_temp}
      onChange={(e)=>setWater(e.target.value)}
      />
      </div>
      <div className="input-group mb-5">
      <TextField id="filled-basic" label="Email" variant="filled" fullWidth
      value={ph_level}
      onChange={(e)=>setPh(e.target.value)}
      />
      </div>
      <div className="input-group mb-5">
      <TextField id="filled-basic" label="Address" variant="filled" fullWidth
      value={tank_size}
      onChange={(e)=>setTank(e.target.value)}
      />
      </div>
      <div className="input-group mb-5">
      <TextField id="filled-basic" label="behaviour" variant="filled" fullWidth
      value={behaviour}
      onChange={(e)=>setBehaviour(e.target.value)}
      />
      </div>
      <div className="input-group mb-5">
      <TextField id="filled-basic" label="diet" variant="filled" fullWidth
      value={diet}
      onChange={(e)=>setDiet(e.target.value)}
      />
      </div>
      <div className="input-group mb-5">
     <Button variant="contained" color="success" onClick={Register}>Success
     </Button>
     </div>
    </Container>
    </div>
    
  );

}