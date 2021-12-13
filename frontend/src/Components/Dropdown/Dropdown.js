import React from 'react'
import './Dropdown.css'
export default function Dropdown({phones,handleInput}) {


    return (
        <>
             <div className="dropdown">
            <button className="dropbtn">Call History</button>
            <div className="dropdown-content">
              {phones.map((item, idx) => {
                return (
                  <div key={idx} onClick={(event)=>handleInput(event.target.outerText)}>
                    {item.phone}
                  </div>
                );
              })}
            </div>
          </div>
        </>
    )
}
