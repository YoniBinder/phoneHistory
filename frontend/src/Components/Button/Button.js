import React from 'react'
import axios from 'axios';
import './Button.css'
export default function Button({newPhone,phoneInput}) {

    function addCall() {
        axios
          .post(`${process.env.REACT_APP_PROXY}/phones`, {
            phone: phoneInput,
            date: new Date(),
          })
          .then(function (response) {
              newPhone(response.data)
           
          })
          .catch(function (error) {
            console.log(error);
          });
      }



    return (
        <div>
             <button type="submit" className="SubmitBtn" onClick={addCall}>
            Submit
          </button>
        </div>
    )
}
