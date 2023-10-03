import React, { useState } from 'react'

const Loginn = (props) => {

    const [em,setEm] = useState('');
    const [pass,setPass] = useState('');
    const [error,setError] = useState('');

    const EmailHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setEm(event.target.value);
    }

    const PasswordHandler = (event) => {   
        event.preventDefault();  
      console.log(event.target.value);
      setPass(event.target.value);
    }

    const CheckError = (event) => {    
        event.preventDefault(); 
        if(em.trim() === ''|| pass.trim() === ''){
            setError(true);
            return;
          }

          props.checkLogin(em,pass);
      }


    //   const ReadData = (event) => {
    //     event.preventDefault();
    //     if(!CheckError()){
    //     const myobj ={
    //       a:em,
    //       b:pass
    //     }
    //     console.log(myobj);
        
    //     fetch(
    //       "https://react-project-1-473b3-default-rtdb.asia-southeast1.firebasedatabase.app/Item.json",
    //       {
    //         method:"POST",
    //         body:JSON.stringify(myobj),
    //         headers: {
    //           "Content-Type" : "application/json",
    //         },
    //       }
    //     )
    //   }
    //   }
  

  return (
    <div>
      
      Email: <input type="email" onChange={EmailHandler}/>
      <br />
      Password: <input type="password"  onChange={PasswordHandler}/>
      <br />
      <button type='submit' onClick={CheckError}>Login</button>

      {error && <h4 style={{color:"red"}}> Error Occured </h4>}

    </div>
  )
}

export default Loginn
