import React from "react";
import "./style.css"

function Portfolio() {
    return (
      <div style={{ 
        backgroundImage: `url("https://c0.wallpaperflare.com/preview/84/694/443/codes-coding-css-css3.jpg")` 
      }}>
 
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-1"><strong> Jennifer Vereecken </strong></h1>
                <p className="display-5"><em>An up and coming full-stack web-developer</em></p>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#aboutme">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mywork">My Work</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#contactinfo">
                    Contact Info
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://docs.google.com/document/d/1cHTupbDPFT9phm5bkZzOs__Mud3neEUjyoeSB3dJBeI/edit?usp=sharing">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
        </nav>
        <div id="mywork">
            
            
    
    <h1 className="display-5"> My Projects </h1>
    <div className="row" id="projectCards">
        <div className="col-row-3">
            <div className="card">
                <div className="card-body">
                  <p className="card-text">The Move is an app created to make finding a social gathering simple and easy</p>
                  <p><a href="https://radiant-harbor-61772.herokuapp.com/Event" class="btn btn-primary">Go to The Move</a></p>
                  <p><iframe src="https://drive.google.com/file/d/1-yNQutSaKI_z2Uu1lh7ny9vnw-JERto2/preview" width="340" height="280"></iframe></p>
                </div>
            </div> 
        </div>
        <div className ="col-row-3">
            <div className="card">
                <div className="card-body">
                <p class="card-text">This is a simple Password Generator App 
                      <p><a href="https://jbeans12.github.io/passwordGenerator/Develop/" class="btn btn-primary">Go to Password Generator</a></p>
                      <p><iframe src="https://drive.google.com/file/d/1a871-agozS-k5gMuPmNHT6Z30Qd95sXz/preview" width="340" height="280"></iframe></p>
                  </p>
                </div>
            </div>
        </div>
        <div className ="col-row-3">
            <div className="card">
                <div className="card-body">
                  <p className="card-text">This is a Marijuana Delivery App called GoodDeez LLC
                  <p><a href="https://rocky-castle-10340.herokuapp.com/" class="btn btn-primary">Go to GoodDeez</a></p>
                  <p><iframe src="https://drive.google.com/file/d/1M4EpsXDbIip_mQu6c593kIFVUbxLyIok/preview" width="340" height="280"></iframe></p>
                  </p>
                </div>
            </div>
        </div>
    </div>
    </div>

    <div className="card">
        <div className="card-body">
          <div id="aboutme">
            <h2>About Me</h2>
        <p>Hello! My name is Jennifer and I currently live in Los Angeles, California but will soon be realocatiing to the East Coast.
          I am a full-stack webdeveloper in the making! I recently graduated from UCLA extension for codinig.
          I can't wait to contiun down this path and see what I can do.
          My goals for my furture are to become a pro web-developer and continue my work and education in this feild. 
          I hope to work my way to the top of a buisness and manage a team. 
        </p>
        </div>
        </div>
    </div>

    <div className="card">
      <div id="contactinfo">
        <h2>Contact Info</h2>
        <div className="email">
          Email: <a href="jennvereecken1@yahoo.com"> jennvereecken1@yahoo.com </a>
            GitHub: <a id="github" href="https://github.com/jbeans12"> jbeans12 </a>
            LinkedIn:<a id="linkedIn" href="LINKINPLACEHOLDER"> Jennifer Vereecken </a>
            Resume: <a id="Resume" href="https://docs.google.com/document/d/1cHTupbDPFT9phm5bkZzOs__Mud3neEUjyoeSB3dJBeI/edit?usp=sharing"> 2021</a>
        </div>
        </div>
    </div> 
   </div>
</div>

    );
} 

export default Portfolio;