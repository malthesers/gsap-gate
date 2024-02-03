"use strict";

import "./style.css";

//Import and register gsap + plugins
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  loadPlatform();
});

function loadPlatform() {
  fetch("./platform-01.svg")
    .then((res) => res.text())
    .then((svg) => {
      document.querySelector("#platform-container").innerHTML = svg;
    })
    .then(() => {
      addDraggableInteractions();
    });
}

function addDraggableInteractions() {
  const leftDoor = document.querySelector("#sliding-door-left");
  const rightDoor = document.querySelector("#sliding-door-right");
  const spinDoor = document.querySelector("#rotating-door");

  Draggable.create(leftDoor, {
    type: "x",
    dragResistance: "0.5",
    bounds: {
      minX: "-1000",
      maxX: "0",
    },
  });

  Draggable.create(rightDoor, {
    type: "x",
    dragResistance: "0.5",
    bounds: {
      minX: "0",
      maxX: "1000",
    },
  });

  Draggable.create(spinDoor, {
    type: "rotation",
    onDragEnd: function () {},
  });

  gsap.set(spinDoor, {
    svgOrigin: "960 200",
  });
}
