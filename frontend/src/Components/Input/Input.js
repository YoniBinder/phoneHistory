import React from 'react'
import './Input.css'
export default function Input({handleInput,phoneInput}) {


    return (
        <div>
            <label>please enter phone number:</label>
          <br />
          <input
            type="number"
            className="inputText"
            onChange={(event)=>handleInput(event.target.value)}
            value={phoneInput}
          ></input>
        </div>
    )
}
