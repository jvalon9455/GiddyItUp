import React, { useState, useEffect } from 'react';

import "./Bounty.css";
import API from "../utils/API";
import KidProfile from '../KidProfile/KidProfile';






function Bounty() {

    const [tasks, setTasks] = useState([]);
    

    //load all tasks
    useEffect(() => {
        loadTasks();
    }, [])

    //load all tasks and sets them to tasks
    function loadTasks() {
        API.getTasks()
            .then((res) => {
                console.log("This is from bounty.js", res);
                setTasks(res.data)
            })
            .catch((err) => console.log(err));
    };

    
    return (
        <>
        <div className="bounty-page">
        <div className="container">

                <KidProfile />

                <div className="row" >
                    <div className="col-md-3"></div>
                    <div id="boardTitle" className="col-md-5">Bounty Board</div>
                    <div className="col-md-3 ">
                    </div>
                </div>

                <div className="row bounty-container">
                    <div className="col-md-2"></div>
                    <div className="bountyContainer col-md-8">
                        <div className="row" id="row1">
                            {tasks.map(task => (
                                <>
                                    <div key={task.identifier} className="taskContainer col-md-3">
                                        <div id="taskPoints">Bounty: ${task.points}</div>   
                                       
                                        <hr />
                                        <div id="taskName">  
                                            <strong>{task.task}</strong>  
                                        </div>
                                        <hr />
                                        <div id="placeText">
                                            <strong>Place:</strong> {task.location} 
                                        </div>
                                        <div id="notesText"><strong>Notes: </strong>{task.description}</div>
                                        {/* <button onClick={() => deleteTask(task._id)}>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                            </svg>
                                        </button> */}
                                     </div>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row bounty-space">

                </div>
            </div>

        </div>
            

        </>
    );
}


export default Bounty;