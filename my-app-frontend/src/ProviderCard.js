function ProviderCard(props) {

    console.log("Props:", props)


    return( 
      
        <div>
            <h1>{props.providerProp.name}</h1>
            <p>Practice Type: {props.providerProp.practice_type}</p>
            <img src={props.providerProp.image_url}/>
            <p>{props.providerProp.bio}</p>
            <p>Languages: {props.providerProp.languages}</p>
            <button>Start Visit</button>
            </div>
)
}

export default ProviderCard