import React from 'react';
import '../CSS/RoundedBox.css';

export default function RoundedBox({title, text, ImageComponent, imageAlt}) {
  return (
    <div className="rounded-box">
      <div className="inter-normal">	  
        {title && <h3 className="rounded-box-title">{title}</h3>}
        {text && <p className="rounded-box-text">{text}</p>}
	{ImageComponent && <ImageComponent className="rounded-box-image" />}
      </div>
    </div>
  )
}
