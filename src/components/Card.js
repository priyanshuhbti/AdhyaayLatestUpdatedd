import React, { useState, useRef } from "react";
import "./Card.css";
import Tshirt from "../assets/Tshirt.png";






export default function Card({ name, detail }) {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sizesboxRef = useRef(null);
  const purchaseRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = event;
    const x = clientX - card.offsetLeft - width / 2;
    const y = clientY - card.offsetTop - height / 2;
    var mult = 40;
    setXRotation((y / height) * mult);
    setYRotation((x / width) * mult);
  }
  function handleMouseEnter() {
    
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    const desc = descRef.current
    title.style.transform = "translateZ(150px)";
    
    sizesBox.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
    desc.style.transform = "translateZ(75px)";
  }
  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);

    const img = imgRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    title.style.transform = "translateZ(0px)";
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizesBox.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
  }

  return (
    
      <div 
      
        className="card"
        ref={cardRef}
        style={{
         transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imgRef}
          src={Tshirt}
          alt="Nike-Shoe"
          className="sneaaker-img"
        />
        <h1 className="title" ref={titleRef} >
          {name}
        </h1>
        <p ref={descRef}>
          {detail}
        </p>
        <ul className="sizes-box" ref={sizesboxRef}>
          <li>38</li>
          <li>40</li>
          <li>42</li>
          <li>44</li>
        </ul>
        <div className="button-box" ref={purchaseRef}>
          <button className="purchase" >
            Purchase
          </button>
        </div>
      </div>
  );
}