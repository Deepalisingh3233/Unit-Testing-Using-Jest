import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './User';
import handleOtherMethod from './helper';

function App() {
  const [data, setData] = useState("");
  const handleData = () => {
    setData("Hello");
  }

 
  return (
    <div>
      <h1>Functional Component methods testing</h1>
      <button data-testid = "btn1" onClick={handleData}>Update</button>
      <button onClick={handleOtherMethod}>Print</button>
      <h2>{data}</h2>
    </div>
  );
}

// function App() {
//   const [data, setData] = useState("");
//   return (
//     <div className="App">
//       <h1>Test OnChange Event with Input Text</h1>
//       <input type='text' value={data} onChange={(e) => setData(e.target.value+"test")}/>

//       <h1>Test Click Event with Button</h1>
//       <button onClick={() => setData("updated data")}>Update Data</button>
//       <h1>{data}</h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <p>First React Test CASE</p>
//       <p>Deepali Singh</p>
//       <input type='text' 
//       readOnly 
//       placeholder='Enter user name' 
//       name='username' 
//       id='userID' 
//       value='Deepali Singh' />
//       <br/>
//       <br/>
//       <br/>
      
//       <img
//         src="https://images.pexels.com/photos/17690714/pexels-photo-17690714.jpeg"
//         title="Beautiful girl in the park"
//         width="500"
//       />
//     </div>
//   );
// }

export default App;
