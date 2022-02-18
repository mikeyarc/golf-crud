import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { useState } from "react";
import Axios from 'axios';
import './form.css';
import golfpic from '../images/golfpic.svg';


function App() {

    /*UseState Hooks*/
    const [fullName,setFullName] = useState("");
    const [date,setDate] = useState("");
    const [coursePlayed,setCoursePlayed] = useState("");
    const [score,setScore] = useState("");
    const [userNotes,setUserNotes] = useState("");
/*Create list of all people persisted into db by the submit button*/
    const addToList = () => {
        console.log(fullName + " " + coursePlayed);
        Axios.post("http://localhost:3001/insert",{fullName: fullName,
                                                    date: date,
                                                    coursePlayed: coursePlayed,
                                                    score:score,
                                                    userNotes:userNotes});
    };

/*View returned to client */
  return (
    /*Format the form in mobile responsive view */
    <div className='f-container'>
        <h1 className='title'>2022 Golf Round Tracker</h1>
        <div className="logo">
          <img className='logo-img' src={golfpic} alt="Logo" />
          </div>
         
     <div className="f-form">
      <Form>
          {/*Input for Full Name */}
        
        <Form.Group>
          <Form.Label className = "f-label">Full Name:</Form.Label>
          <Form.Control className = "f-input"  type='text' 
                        onChange = {(event) => {
                    setFullName(event.target.value);
          }}
          />
        </Form.Group>
        
        {/*Input for Date */}
        <Form.Group>
          <Form.Label className = "f-label">Date:</Form.Label>
          <Form.Control className = "f-input" placeholder = "YYYY-MM-DD" type='text'
                        onChange = {(event) => {
                    setDate(event.target.value);
      }}
                            />
        </Form.Group>
         {/*Input for Course Played */}
         <Form.Group>
          <Form.Label className = "f-label">Course Played:</Form.Label>
          <Form.Control className = "f-input" type='text'
                        onChange = {(event) => {
                     setCoursePlayed(event.target.value);
                     }}/>
        </Form.Group>
        {/*Input for Score*/}
        <Form.Group>
          <Form.Label className = "f-label">Score:</Form.Label>
          <Form.Control className = "f-input" type='text'
                        onChange = {(event) => {
                    setScore(event.target.value);
 }}/>
        </Form.Group>
        {/*Input for User Notes*/}
        <Form.Group>
          <Form.Label className = "f-label">User Notes:</Form.Label>
          <Form.Control className = "f-input" placeholder = "What happened out there?" as='textarea'
                        onChange = {(event) => {
                    setUserNotes(event.target.value);
             }}/>
        </Form.Group>
        <Button  className = "f-button"type='submit' onClick = {addToList} >Submit</Button>
      </Form>
      </div>
    </div> 
   
    
  );
}
export default App;