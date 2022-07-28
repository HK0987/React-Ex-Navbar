import React from 'react';
import "./style.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav className="nav">
            <div className="left-div">
                <ul className="nav-ul">
                    <img className="logo" src="./Images/logo.png" alt="Logo" />
                    <li><div>home</div></li>
                    <li><div>services</div></li>
                    <li><div>cart</div></li>
                    <li><div>about</div></li>
                    
                </ul>
            </div>
            <div className="right-div">
                <span className="span"><input type="text" className="search-text btn" /></span>

                <button className="search-btn  btn">SEARCH</button>
            </div>
        </nav>
      </div>
      <div className="body">
      <div className="body-div">
        <div className="div-para">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores asperiores nulla omnis iusto, a dolore error cupiditate ut modi excepturi ullam corporis saepe placeat quas tempora adipisci dolorum iure molestiae.
          </p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
