import axios from 'axios';
import './App.css'
import ChildComp, { Child1Comp } from './components/ChildComp'
import { useEffect, useRef, useState } from 'react';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComp from './components/Header/HeaderComp';
import CEOPage from './pages/About/CEOPage';

// function App() {
//   return (
//     <>
//       <p className="p1" style={{"backgroundColor": "red"}}>MY React Project</p>
//       <div>Div Container</div>
//       <h2>H2 Tag</h2>
//     </>
//   )
// }

// function App() {
//   let name = "Dinesh";
//   let age = 20;
//   let active = false;
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let obj = {
//     "name": "Name 1",
//     "phone": 1234567980
//   }
//   let menus = ["Home", "About", "Contact", "Blog"];
//   let output = [];
//   for(let i=0; i<menus.length; i++) {
//     output.push(<li key={i}>{menus[i]}</li>);
//   }
//   console.log(output);

//   return (
//     <>
//       {
//         active
//           ?
//           (
//             <>
//               <p>Name: {name}</p>
//               <p>Age: {age}</p>
//             </>
//           )
//           :
//           <p>Active: {active.toString()}</p>
//       }
      
//       {
//         active && <p>YES ITS ACTIVE TRUE</p>
//       }
      
//       <p>Array: {arr}</p>
//       <p>Object: {obj.name}, {obj.phone}</p>
//       <ul>
//         {
//           menus.map((v, i) => {
//             return (
//               <li key={i}>{v}</li>
//             )
//           })
//         }
//       </ul>

//       <ul>
//         {output}
//       </ul>

//       {
//         (active)
//           ?
//             "Yes"
//           :
//             "No"
//       }
//     </>
//   )
// }

// function App() {
//   let name = "Dinesh";
//   let age = 20;
//   let studentData = {
//     "id": 1,
//     "name": "Name 1",
//     "phone": 1234567890
//   }

//   // let active = true;
//   const [active, setActive] = useState(true);

//   function handleChange() {
//     console.log(active, " before change");
//     // active = false;
//     setActive(false);
//     console.log(active, " after change");
//   }

//   // const handleChange = () => {

//   // }

//   return (
//     <>
//       {/* <ChildComp name={name} age={age} data={studentData} />
//       <Child1Comp /> */}
      
//       Active: {active.toString()}
//       <p><button onClick={handleChange}>Change</button></p>

//       {
//         active
//           ?
//           <ChildComp />
//           :
//           <Child1Comp />
//       }
//     </>
//   )
// }

// function App() {
//   let usernameRef = useRef("");
//   let passwordRef = useRef("");

//   const [usernameState, setUsernameState] = useState("");
//   const [passwordState, setPasswordState] = useState("");

//   const handleImpureForm = () => {
//     console.log("Button clicked");
//     let username = document.getElementById("txtUsername").value;
//     let password = document.getElementById("paPassword").value;
//     console.log(username, password);
//   }

//   const handleHalfImpure = () => {
//     let username = usernameRef.current.value;
//     let password = passwordRef.current.value;
//     console.log(username, password);
//   }

//   const handlePure = () => {
//     console.log(usernameState, passwordState)
//   }
//   return (
//     <>
//       <h2>Impure Component Way</h2>
//       <input type="text" id="txtUsername" placeholder='Username:' /><br />
//       <input type="text" id="paPassword" placeholder='Password:' /><br />
//       <button onClick={handleImpureForm}>Login</button>

//       <br /><br />

//       <h2>Half Impure/Pure Component Way</h2>
//       <input type="text" ref={usernameRef} placeholder='Username:' /><br />
//       <input type="text" ref={passwordRef} placeholder='Password:' /><br />
//       <button onClick={handleHalfImpure}>Login</button>

//       <br /><br />

//       <h2>Pure Component Way</h2>
//       <input type="text" onChange={(e) => {setUsernameState(e.target.value)}} placeholder='Username:' /><br />
//       <input type="text" onChange={(e) => {setPasswordState(e.target.value)}} placeholder='Password:' /><br />
//       <button onClick={handlePure}>Login</button>
//     </>
//   )
// }

// function App() {
//   const [task, setTask] = useState("");
//   const [taskLists, setTaskLists] = useState([]);

//   const handleAddTask = () => {
//     console.log(task);
//     setTaskLists([...taskLists, task])
//   }

//   const handleDeleteTask = (event) => {
//     // console.log(event.target.id);
//     let temp = taskLists.filter((v, i) => i !== parseInt(event.target.id));
//     // console.log(temp);
//     setTaskLists(temp);
//     console.log(taskLists);
//   }

//   return (
//     <>
//       <h1>Todo List</h1>
//       <input type="text" onChange={(e) => setTask(e.target.value)} placeholder='Enter Task Name:' /><button onClick={handleAddTask}>Add Task</button>

//       <br />
//       {
//         taskLists.length > 0 && taskLists.map((v, i) => {
//           return (
//             <div key={i}>
//               {v} <button id={i} onClick={handleDeleteTask}>X</button>
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }

// function App() {
//   // const [count, setCount] = useState(0);
//   // const [name, setName] = useState("Dinesh");
//   const [country, setCountry] = useState("India");
//   const [universities, setUniversities] = useState([]);

//   const fetchData = () => {
//     axios.get('http://universities.hipolabs.com/search?country='+country)
//       .then((response) => {
//         console.log(response);
//         setUniversities(response.data);
//       })
//   }

//   // useEffect(() => {
//   //   setCount(count + 1);
//   // }, [name]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       {/* <h1>useEffect</h1> */}

//       {/* {count}<br />
//       {name}<br />
//       <button onClick={() => setName("ReactJs")}>Change Name</button> */}

//       <h1>Universities - {country}</h1>
//       {
//         universities.length > 0 && universities.map((v, i) => {
//           return (
//             <div key={i}>
//               <p>Name: {v.name}</p>
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }

function App() {
  return (
    <>
      <BrowserRouter>
      <HeaderComp />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/about/ceo' element={<CEOPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// // Regular Function
// FuncName();
// function FuncName() {
//   return "..."
// }

// // Anonymous Function
// let FuncName1 = function() {
//   return "..."
// }
// FuncName1();

// // Arrow Function
// let FuncName2 = () => {
//   return "..."
// }
// FuncName2();

// let FuncName3 = () => "...";
// FuncName2();

// var a = 10;
// var a = 20;

// let b = 10;
// let b = 20;

// for(var i = 0; i < 10; i++) {
// }

{/* <div></div>

<img src="">

<img src="" />

<dinesh></dinesh> */}


// let testFunc = 
// Array.map((a, b, c) => {
//   return a + b + c;
// });