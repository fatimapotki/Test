import React, { useState, useEffect } from 'react';
import './App.css';
import UseTest from './UseTest';


// const [totalReactPackage, setTotalReactPackages] = useState("");

// useEffect(() => {
//   // GET request using fetch inside useEffect React hook
//   fetch('https://api.npms.io/v2/search?q=react')
//     .then(response => response.json())

//     .then(data => setTotalReactPackages(data.total))
//     .then(err => console.error(err))

// }, []);
// const [data, setData] = useState(null);
// const [load, setLoad] = useState(true);
// const [error, setError] = useState(null);

// useEffect(() => {
//   fetch(`https://api.github.com/users/eunit99/repos`)
//     .then(response => response.json())
//     .then((usefulData) => {
//       console.log(usefulData);
//       setLoad(false);
//       setData(usefulData);
//     })
//     .catch((e) => {
//       console.error(`An error occurred: ${e}`)
//     });
// }, []);

//   return (
//     <div className='text-center'>
//       {load && <p>Loading...</p>}
//       {!load && <p>Fetched data</p>}
//       {/* <h3>REACT HTTP GET</h3>
//       <div>Total: {totalReactPackage} </div> */}
//     </div>
//   )
// }
function App() {
  return (
    <div >
      <UseTest />
    </div>
  )
}

export default App;
