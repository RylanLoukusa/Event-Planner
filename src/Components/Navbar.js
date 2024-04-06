import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/information" activeStyle>
                        Information
                    </NavLink>
                    <NavLink to="/information-special" activeStyle>
                        Special Information
                    </NavLink>
                    <NavLink to="/meal-deal" activeStyle>
                        Meal Deal
                    </NavLink>
                    <NavLink to="/payment" activeStyle>
                        Payment
                    </NavLink>
                    <NavLink to="/questionaire" activeStyle>
                        Questionaire
                    </NavLink>
                    <NavLink to="/summary" activeStyle>
                        Summary
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;