import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
  <div class ="body-navbar">
    <div class="container-navbar">
            <div class="section section-left"></div>

            <div class="section section-middle">
                <nav class="navbar">

                    <div class="navbar-links">

                        <div class="navbar-logo">
                            <a href="/">
                                <svg width="59" height="50">
                                <text transform="translate(0 23)" fill="#707070" font-size="25"
                                    font-family="BodoniMTPosterCompressed, Bodoni MT Poster">
                                    Galeria
                                </text>
                                <text transform="translate(11 45)" fill="#c78e41" font-size="25"
                                    font-family="BodoniMTPosterCompressed, Bodoni MT Poster">
                                    Sophilia
                                </text>
                            </svg>
                            </a>
                            
                        </div>

                        <a class="navbar-link" href="/">Home</a>
                        <a class="navbar-link" href="/gallery">Gallery</a>
                        <a class="navbar-link" href="/viewingroom">Viewing Rooms</a>

                    </div>
                    <Link to="/ticket">
                        <div class="navbar-status">
                            <svg width="89" height="80" viewBox="0 0 98 100">
                                <g id="TicketLogo" transform="translate(-1464)">
                                    <rect id="Rectangle_5" data-name="Rectangle 5" width="98" height="100"
                                        transform="translate(1464)" fill="#c78e41" opacity="0.72" />
                                    <text id="VIEWINGROOM" transform="translate(1468 67)" fill="#fff"
                                        font-family="Corbel-Bold, Corbel" font-weight="700" font-size="20">
                                        <tspan x="12" y="-7">
                                            TICKET
                                        </tspan>
                                    </text>
                                </g>
                            </svg>
                        </div>
                    </Link>

                </nav>
            </div>
        </div>
  
  </div>
  
  );
  
};

  export default Navbar;