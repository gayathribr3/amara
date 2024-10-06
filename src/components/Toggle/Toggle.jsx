import React, { useState } from 'react'
import './Toggle.css'
const Toggle = () => {
    const [isForwarded, setIsForwarded]=useState(false);
    const handleClick = () => {
    setIsForwarded(!isForwarded);
    };
  return (
    <div className={`heart ${isForwarded ? 'forward' : 'reverse '}`} onClick={handleClick}>
      <span className="circle" />
    </div>
  );
}

export default Toggle

