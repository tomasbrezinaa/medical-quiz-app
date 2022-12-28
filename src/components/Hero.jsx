import React from 'react'
import "./hero.css"

const Hero = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Vitaj</h2>
                <button onClick={handleLogout}>Log Out</button>
            </nav>
        </section>
    )
}

export default Hero


