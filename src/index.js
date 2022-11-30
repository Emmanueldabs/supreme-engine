import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://preview.redd.it/498ywvmd24k41.jpg?auto=webp&s=82e6f5caeca1f630fd4b246eb33d37afccbaa478" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-light">Gaming Setup</h5>
        <p class="text-light">So um like umm in couldn't get one of these but that's fine because idk like when im 18 porbably more i will get it but don't get your hopes up too soon because i might get stapped by my parents or ill not have enough money to buy it anyway:/</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.ytimg.com/vi/RViuYz1mnIU/maxresdefault.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Fastest airplane</h5>
        <p>Can't get it and don't want to but it is ungodlyy fast</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://static.toiimg.com/thumb/resizemode-4,msid-80635321,width-1070/80635321.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-danger">i litteraly can't buy this -steve Jobs- iPhone 14</h5>
        <p class="text-danger">reeeee speeeeedddddddd</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </>
);