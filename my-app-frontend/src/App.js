import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {useEffect, useState} from 'react'

import PatientCard from './PatientCard';
import ProviderCard from './ProviderCard';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Providers from './components/ProvidersComponent';
import ProviderContainer from './containers/ProviderContainer';
import NewPatient from './components/NewPatient';

function App() {


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


const [providers, setProviders] = useState( [ ] )
console.log("State of Providers", providers)


useEffect(()=> {
  fetch("http://localhost:9292/providers")
    .then (r=>r.json())
    .then ((fetchedProviders) => {console.log("fetchedProviders",fetchedProviders)
      
      setProviders([...fetchedProviders])
      
    })


} 
,[] )



  return (<>
  <NavBar/>
  
  <Switch>
    <Route path="/Providers">
      <section className="layout"> <ProviderContainer providersToMap={providers}/></section>
    </Route>
    <Route path="/new" component={NewPatient}/>
    <Route exact path="/">
      <Home/>
    </Route>
  </Switch>
  </>);
}


export default App;
