import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const AboutDr = {
    name:"Dr. Holder",
    age: 58,
    job:"singer",
    Num : 200,}

  return (
    <div className="App">
      <header className="App-header">


      <DoctorDetails name={AboutDr.name} age={AboutDr.age} job={AboutDr.job} LucchamiNum={AboutDr.Num}></DoctorDetails>

      <DoctorDetails name={AboutDr.name} age={AboutDr.age} job={AboutDr.job} LucchamiNum={AboutDr.Num} ></DoctorDetails>

      </header>
    </div>
  );

}

function DoctorDetails(props){
  var AboutDrStyle = {
    color:'red',
    backgroundColor :'White',
    border: ' 2px solid red ',
    borderRadius: '10px',
    padding : '20px',
    textAlign:'left',
    width: '500px',
    marginBottom:'20px',    
  }

  return (
      <div  style={AboutDrStyle}>
          <h1>Doctor Name : {props.name} </h1>
          <h2>Doctor Age : {props.age} </h2>
          <h3>Doctor Job : {props.job} </h3>
          <h4>Doctor's Num: {props.Num} </h4>
      </div>
  )
    
}
export default App;
