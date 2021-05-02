import React from "react";


function Portfolio() {
    return (
 
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
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Contact Info
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#email">Email</a>
                    <a className="dropdown-item" href="#linkedIn">LinkedIn</a>
                    <a className="dropdown-item" href="#github">GitHub</a>
                  </div>
                </li>
              </ul>
            </div>
        </nav>
        <div id="mywork">
            <div className="card text-center">
                <div className="card-header"> Featured Project </div>
                    <div className="card-body">
                        <h5 className="card-title">Password Generator</h5>
                            <iframe src="https://drive.google.com/file/d/15-oCYuZx6Oknzdx__yjGCIIHCev7A_u3/preview" width="440" height="280"></iframe>
                                <a href="https://jbeans12.github.io/passwordGenerator/Develop/" class="btn btn-primary">Go to Password Generator</a>
                    </div>
            </div>
    </div>
    <h1 className="display-5"> Other Works </h1>
    <div className="row">
        <div className="col-row-3">
            <div className="card">
                <div className="card-body">
                  <p class="card-text">This is a simple weather app. 
                      When you search a city or town and press "Enter" the app will automatically show 
                      current date and time, current temperature, curret weather, current humidity, current windspeed, 
                      and the days Low and High temperatures. 
                      <a href="https://jbeans12.github.io/weatherApp/" class="btn btn-primary">Go to Weather App</a>
                  </p>
                </div>
            </div> 
        </div>
        <div className ="col-row-3">
            <div className="card">
                <div className="card-body">
                  <p className="card-text">This is Princess LouLou-BabyFace's fan page. Revel in her cuteness!
                      
                  </p>
                  <a href="https://jbeans12.github.io/loulou/" class="btn btn-primary">Go to Lous FanPage</a>
                </div>
            </div>
        </div>
        <div className ="col-row-3">
            <div className="card">
                <div className="card-body">
                  <p className="card-text">This is Neji the cat. He LOVES chicken.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="card">
        <div className="card-body">
            <h2>About Me</h2>
        <p>Hello! My name is Jennifer and I currently live in Los Angeles, California. I am so excited to see how far I will go in this course. Obviously this page is at a bare-minimum but I'm looking forward to growing and expanding my portfolio. In my free time I love to cook and hangout with my boyfriend and cats. I wish I could travel more right now but hopefully soon I'll be able to go on new adventure. 

            My goals for my furture are to become a pro web-developer and continue my work and education in this feild. I hope to work my way to the top of a buisness and manage a team. 
        </p>
        </div>
    </div>

    <div className="contactinfo">
        <h2>Contact Info</h2>
        <div className="email">Email:<a href="jennvereecken1@yahoo.com"> jennvereecken1@yahoo.com</a>
            GitHub:<a id="github" href="https://github.com/jbeans12"> jbeans12 </a>
            LinkedIn:<a id="linkedIn" href="LINKINPLACEHOLDER"> Jennifer Vereecken</a>
        </div>
    </div> 
   
</div>

    );
} 

export default Portfolio;