import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {useEffect, useState} from 'react'
import ProviderCard from '../ProviderCard';

function ProviderContainer(){


const [providers, setProviders] = useState( [ ] )
console.log("State of Providers", providers)


useEffect(()=> {
    fetch("http://localhost:9292/providers")
    .then (r=>r.json())
    .then ((fetchedProviders) => {console.log("fetchedProviders",fetchedProviders)
        
        setProviders([...fetchedProviders])
        
        }
    )
} 

,[] )


    return(<>



    {providers.map(
    (eachProvider)=>{
    return(<ProviderCard
    key={eachProvider.id}
    providerProp={eachProvider}/>)
        }
    )
}
    
    </>
    )

}
export default ProviderContainer