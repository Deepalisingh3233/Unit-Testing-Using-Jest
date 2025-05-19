import React, { useEffect, useState } from 'react'

const APICall = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  },[])

  const getData = async() =>{
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    setData(result);
  }

  console.log(data);
  return (
      <div>
        <h1>API Call: List of Users</h1>
        <ul>
            {
            data.map((item) => (
                <li key = {item.id} >{item.name}</li>
            ))
        }
        </ul>
      </div>
  )
}

export default APICall;

