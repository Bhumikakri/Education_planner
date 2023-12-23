import Main from "./component/main";
import { useState } from "react";
import Card from './component/Card';

function App() {

  const[planner,setplanner]=useState([]);

  function Cardfuntion(e){
    // console.log(e);
    localStorage.setItem('planner',JSON.stringify(planner));
    setplanner([...planner,e]);
  }
  return (
    <div className="App">
      <h1>Geekster Education Planner</h1>
      <Main makingcard={Cardfuntion} />
      {
        planner.map((objectvalue)=>{
          return <Card {...objectvalue}/>
          })
      }
    </div>
  );
}

export default App;
