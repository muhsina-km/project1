
// import React, { useEffect, useState } from 'react';
// import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Loginn from './components/Loginn';
// import Home from './components/Home';
import Course from './components/Course';
import Header from './components/Header';
import Product from './components/Product';
import Errorpage from './components/Errorpage';
import RootLayout from './components/RootLayout';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
// import Loginn from './components/Loginn';
// import Home from './components/Home';
// import Header from './components/Header';

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    errorElement: <Errorpage/>,
    children : [
      {path:"/",element:<Product/>},
      // {path:"/products",element:<Product/>},
      {path:"/products/:productid",element:<ProductDetails/>}
    ],},
    ]);

function App() {

//   const [islogin,setisLogin] = useState(false);
  
//   useEffect(()=>{
//   const storevalue =localStorage.getItem("islogin");
//   if(storevalue==="1")
//   {
//     setisLogin(true);
//   }
// },[])

//   const Logged = (em,pass) => {
//     setisLogin(true);
//     localStorage.setItem("islogin","1")
//   }

//   const Logoutcheck = () => {
//     setisLogin(false);
//   }

  

  return (
    <div className="App">

    {/* <React.Fragment>
    
    {!islogin && <Loginn checkLogin={Logged}/>}
    {islogin && <Home onLogout={Logoutcheck}/>}

    </React.Fragment> */}

    <RouterProvider router={router}/>

    </div>
  );
}

export default App;
