import { useState,useEffect } from "react";
import "./App.css";
import Button from './Components/Button/Button'
import Dropdown from './Components/Dropdown/Dropdown'
import Input from './Components/Input/Input'
import axios from 'axios'
function App() {
  const [phoneInput, setPhoneInput] = useState("");
  const [phones, setPhones] = useState([]);

  useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_PROXY}/phones`)
        .then(function (response) {
          let newList=response.data.sort((a, b) => b.date.localeCompare(a.date)).slice(0,5);
          setPhones(newList);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [phones]);
  
  function handleInput(value) {
    setPhoneInput(value);
  }
  function newPhone(data){
    setPhoneInput("");
    setPhones((prev) => [...prev, data]);
  }

  return (
    <div>
      <h1>Phone History</h1>
      <div className="container">
        <div className="grid-item">
         <Dropdown phones={phones} phoneInput={phoneInput} handleInput={handleInput}/>
        </div>

        <div className="grid-item">
          <Input phoneInput={phoneInput} handleInput={handleInput}/>
        </div>

        <div className="grid-item">
         <Button newPhone={newPhone} phoneInput={phoneInput}/>
        </div>
      </div>

      <h3>made by Yoni Binder</h3>
    </div>
  );
}

export default App;
