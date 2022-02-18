import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  { useState , useEffect } from "react";
import Axios from 'axios';
import './datatable.css';

function Read() {
/*Allow list of people to be used in state */
const [golfDataList ,setGolfDataList] = useState([]);
    useEffect(() =>{
        Axios.get("http://localhost:3001/read").then((response) =>{
            console.log(response);
            setGolfDataList(response.data); 
        });
    },[]);

/*Allow user to delete person on submit of delete button */
const deleteRecord = (id) => { //Calling api request to delete id
  Axios.delete(`http://localhost:3001/delete/${id}`)
};
  return (
    <div className = "t">
        <h1 className = 't-title'>Golf Season Data</h1>
    {/*For every person in list of people,output their data in a table format */}
    {golfDataList.map((val,key) =>{
        return <div key ={key}>
<div >         
  <table className="t-table">
    <thead>
      <tr className ="t-headings">
        <th className ="t-labels">Full Name</th>
        <th className="t-labels">Date </th>
        <th className="t-labels">Course Played</th>
        <th className="t-labels-score">Score</th>
        <th className="t-labels">User Notes</th>
      </tr>
    </thead>
    <tbody  >
                <td className='t-data'>{val.fullName}</td>
                <td className='t-data'>{val.date}</td>
                <td className='t-data'>{val.coursePlayed}</td>
                <td className='t-data-score'>{val.score}</td>
                <td className='t-data'>{val.userNotes}</td>
                {/*Allow user to click delete button and delete person */}
                <button className = "t-button" onClick = {() => deleteRecord(val._id)}>Delete</button>
    </tbody>
  </table>
</div>   
</div>
    })}
</div> 
   
    
  );
}
export default Read;
