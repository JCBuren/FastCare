import { NavLink } from "react-router-dom"




function NavBar(){

    return(

        
        <header className="header">
            <h1 className="logo"><a href="#">FastCare Telehealth</a></h1>
            <ul className="main-nav">
                <NavLink to="/">
                    <h3>Home</h3>
                </NavLink>


                <NavLink to="/Providers">
                    <h3> List of Providers </h3>
                </NavLink>

                <NavLink to="/new">
                    <h3> Create an Account </h3>
                </NavLink>
            </ul>
        </header>
        


    )

}
export default NavBar