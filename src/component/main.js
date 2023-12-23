import {useState} from 'react';
import './main.css';


const Main=(props)=>{

    const[Subject,setsubject]=useState('');
    const[hour,sethour]=useState(0);


    function subjectFn(e){
        setsubject(e.target.value);
    }

    function hoursFn(e){
        sethour(e.target.value);
    }

    function addPlanner(){
        const container={
            Subject,
            hour
        }
        if(Subject=='' && hour ==''){
            alert('enter subject and hour');
        }
        else{
            props.makingcard(container);
        }

    }


    return(
        <>
        <div className='allInputs'>
        Subject:-
        <input type="text" placeholder="Subject" onChange={subjectFn} value={Subject}/>
        Hour:-
        <input type="number" placeholder="Hour"  onChange={hoursFn} value={hour}/>
        <button onClick={addPlanner}>Add</button>
        </div>
        
        
        </>
    )
}

export default Main;