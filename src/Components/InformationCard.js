import React from "react";

function InformationCard(props) {
  return (
    
    <div className="info-cards">
      <p className="info-card-title">{props.title}</p>
      <img className="info-card-description" src={props.img} alt="image" />
    </div>
    
  );
}

export default InformationCard;
