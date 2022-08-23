import { useState, useEffect } from "react";

const NewPatient = () => {

  const [patients, setPatients] = useState( [ ] )
  console.log("State of Patients", patients)


  useEffect(()=> {
    fetch("http://localhost:9292/patients")
      .then (r=>r.json())
      .then ((fetchedPatients) => {console.log(fetchedPatients)
        
        setPatients([...fetchedPatients])
        
      })

  
  } 
,[] )
// const [newFirstName, setNewFirstName] = useState("")
// const [newLastName, setNewLastName] = useState("")
// const [newEmail, setNewEmail] = useState("")
// const [newDOB, setNewDOB] = useState("")
// const [newLocation, setNewLocation] = useState("")

const [newPatientInfo, setNewPatientInfo] = useState ({

  firstname: "",
  lastname: "",
  dob: "",
  email: "",
  location: ""
})


const handleNewFirstName = (synthEvent) =>{
  setNewPatientInfo({...newPatientInfo, firstname: synthEvent.target.value})
}

const handleNewLastName = (synthEvent) =>{
  setNewPatientInfo({...newPatientInfo, lastname: synthEvent.target.value})
}

const handleNewDOB = (synthEvent) =>{
  setNewPatientInfo({...newPatientInfo, dob: synthEvent.target.value})
}

const handleNewEmail = (synthEvent) =>{
  setNewPatientInfo({...newPatientInfo, email: synthEvent.target.value})
}

const handleNewLocation = (synthEvent) =>{
  setNewPatientInfo({...newPatientInfo, location: synthEvent.target.value})
}

const confirmSubmit = "Thank you for Signing up! Please check your Email for a temporary password."


const newPatientSubmit =(synthEvent)=> {
  synthEvent.preventDefault()


      fetch("http://localhost:9292/patients", {
        method:"POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newPatientInfo)
      })
        .then(r=>r.json() )
        .then( (newPatientObj) =>{
          
          setNewPatientInfo( [ newPatientObj, ...patients ] )
        alert(confirmSubmit)
        })
}

      
      
  






return(


<form
  onSubmit={(newPatientSubmit)}>
    
    
<h1 class="h1ForInput">Sign up for a New Account!</h1>

<label class="label-input">First Name: </label>
  <input class="css-input" placeholder="First Name..." onChange={handleNewFirstName} value={newPatientInfo.firstname}/> <br></br>      

<label class="label-input">Last Name</label>
  <input class="css-input" placeholder="Last Name..." onChange={handleNewLastName} value={newPatientInfo.lastname}/><br></br>   

<label class="label-input">Email Address</label>
  <input class="css-input" placeholder="Email Address..." onChange={handleNewEmail} value={newPatientInfo.email}/><br></br>   

<label class="label-input">Date of Birth</label>
  <input class="css-input" placeholder="Date of Birth (xx/xx/xxxx)..." onChange={handleNewDOB} value={newPatientInfo.dob}/><br></br>   

  <label class="label-input">State</label>
  <input class="css-input" placeholder="State you are Located..." onChange={handleNewLocation} value={newPatientInfo.location}/><br></br><br></br>   
  

  <input type="submit"/>

</form>
)
}


export default NewPatient