
import React, { useEffect, useState } from 'react'

const Course = () => {

    const[Cn,setCn] = useState('');
    const[du,setDu] = useState('');
    const[fe,setFe] = useState('');
    const[error,setError] = useState(false);
    const[value,setValue] = useState([]);

  
    useEffect(() => {
      Viewdata()
    },[])

    const ReadCourseName = (event) => {
        console.log(event.target.value);
        setCn(event.target.value);
    }

    const ReadDuration = (event) => {     
      console.log(event.target.value);
      setDu(event.target.value);
    }

    const ReadFee = (event) => {
      console.log(event.target.value);
      setFe(event.target.value);
    }

    const CheckError = (event) => {
      if(Cn.trim() === ''|| du.trim() === ''|| fe.trim() === ''){
        setError(true);
        return true;
      }
      else{
        setError(false)
        return false
      }
    }

    const Readdata = (event) => {
      event.preventDefault();
      if(!CheckError()){
      const myobj ={
        a:Cn,
        b:du,
        c:fe
      }
      console.log(myobj);
      
      fetch(
        "https://react-project-1-473b3-default-rtdb.asia-southeast1.firebasedatabase.app/Item.json",
        {
          method:"POST",
          body:JSON.stringify(myobj),
          headers: {
            "Content-Type" : "application/json",
          },
        }
      )
    }
    }

    function snapshotToArray(snapshot) {
      const array = [];
      Object.keys(snapshot).forEach((key) => {
        array.push(snapshot[key]);
      });
      return array;
    }

    const Viewdata = () => {
      // event.preventDefault();
      fetch("https://react-project-1-473b3-default-rtdb.asia-southeast1.firebasedatabase.app/Item.json").then((response) => {
        console.log(response);
        // console.log response.json();
        return response.json()
      }).then((data) => {
        console.log (data);
        setValue(snapshotToArray(data));
      })
  }
  let screen = ''
  screen = value.length > 0 && value.map((item) => {
      return <p>{item.a}</p>
  })
  
  let screen1 = ''
  screen1 = value.length > 0 && value.map((item) => {
      return <p>{item.b}</p>
  })

  let screen2 = ''
  screen2 = value.length > 0 && value.map((item) => {
      return <p>{item.c}</p>
  })
  

  return (
    <div>
      
      <h1>  Course Registration</h1>

      <form>
        Course Name: <input type="text" onChange={ReadCourseName} name="cname" id="c1" />
        <br />
        Duration: <input type="number" onChange={ReadDuration} name="dura" id="d1" />
        <br />
        Fee Structure: <input type="number" onChange={ReadFee} name="fee" id="f1" />
        <br />
        <input type="button" onClick={Readdata} value="save" />
        <br />
        <input type="button" onClick={Viewdata} value="view" />
        <br />
        {error && <h4 style={{color:"red"}}> Error Occured </h4>}
      </form>
       {screen}
       {screen1}
       {screen2}
    </div>
  )
}

export default Course
