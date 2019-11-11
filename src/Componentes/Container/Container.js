import React from 'react'
import './Container.css';


function Container(props) {
    return (
        <div className="main-container">
            <div className="container">
                <div className="shadow">
                    <p>A long time ago, in a galaxy far,far away...</p>
                </div>
                    <h3>May the force be with you</h3>
                <audio autoplay>
                    <source src="./starwars.mp3" type="audio/mpeg" />
                </audio>
            </div>
        </div>
        
    )
}

export default Container