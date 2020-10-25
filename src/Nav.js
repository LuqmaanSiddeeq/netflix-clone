import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [nav, setNav] = useState()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setNav(true);
            }
            else setNav(false);
        });
        return() => {
            window.removeEventListener("scroll")
        }
    }, [])
    


    return (
        <div className={`nav ${nav && "nav__black"}`}>
            <img 
            src="images/nav/logo.png" 
            alt="netflix Logo" 
            className="nav__logo"/>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrMUYNi9vrE2cZj-KRAPdn1ztjAeVa73VmzQ&usqp=CAU" 
            alt="netflix Logo" 
            className="nav__avatar"/>
        </div>
    )
}

export default Nav
