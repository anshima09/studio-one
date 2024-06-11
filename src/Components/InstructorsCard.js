import React from "react";


function DoctorCard(props) {
  return (
    <div className="dt-card">
      <img src={props.img} alt={props.name} className="dt-card-img" />
      <p className="dt-card-name">{props.name}</p>
      <p className="dt-card-title">{props.title}</p>
      <p className="dt-card-title">{props.years}</p>
      <a className="dt-card-title" href={props.id}><p>@instagram_handle</p></a>
    </div>
  );
}

export default DoctorCard;
