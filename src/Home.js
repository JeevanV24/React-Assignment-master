import React from "react";
import { Link } from "react-router-dom";

function LandingPageButton() {
    return(
        <>
        <Link to="/Register" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Register!
            </span>
        </button>
    </Link>
    
    
    <Link to="/Login" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                 Login!
            </span>
        </button>
    </Link>
    </>
    );
    
    
    
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            I am Jeevan
        </div>
        
        <div style={{"font-size": "36px"}}>
             
        Feel free to Register yourself and Login. 
           Amazing things waiting once you log in!
            Hurry Up!!
        </div>
        <br />
        <LandingPageButton />
    </div>
}

function LandingFrame() {
    const style = {
        "background-image": `url("https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage/>
    </div>
}
function Home() {
    return <div>
        <LandingFrame />
    </div>
}
export default Home