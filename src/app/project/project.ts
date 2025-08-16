import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  projects = [
    {
      projName: "FAN-O-FAN",
      img: "assets/fan.png",
      description:
        "FanoFan is a sleek, responsive frontend website showcasing modern fan designs, styles, and features, built with Html, Css, Js and Gsap.",
      liveLink: "https://mirdanish804.github.io/FAN-O-FAN/",
      githubLink: "https://github.com/MirDanish804/FAN-O-FAN.git"
    },
    { 
      projName: "LAB AUTOMATION",
      img: "assets/Lab.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime voluptatibus harum iure similique animi quo tempore atque deserunt autem!",
      liveLink: "https://mirdanish804.github.io/LabAutomation/",
      githubLink: "https://github.com/MirDanish804/LabAutomation.git",
    },
    { 
      projName: "Weather_API",
      img: "assets/Weather.png",
      description:
        "It's weather app  where you can check Wheather of any city or place in the world just put any place or city name and get wheather info!",
      liveLink: " https://mirdanish804.github.io/Weather-API/",
      githubLink: "https://github.com/MirDanish804/Weather-API.git",
    },
  ]

}
