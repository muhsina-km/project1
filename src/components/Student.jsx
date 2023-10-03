import React, { useState } from 'react'

const Student = () => {

    const[sn,setSn] = useState('');
    const[db,setDb] = useState('');
    const[gr,setGr] = useState('');
    const[qt,setQt] = useState('');
    const[cs,setCs] = useState('');
    const[error,setError] = useState(false);

    const ReadSname = (event) => {
        setSn(event.target.value);
        console.log(sn);
    }

    const ReadDob = (event) => {
        setDb(event.target.value);
        console.log(db);
    }

    const ReadGender = (event) => {
        setGr(event.target.value);
        console.log(gr);
    }

    const ReadQuali = (event) => {
        setQt(event.target.value);
        console.log(qt);
    }

    const ReadCourse = (event) => {
        setCs(event.target.value);
        console.log(cs);
    }

    const CheckHandler = (event) => {
        if(sn.trim() === '' || cs.trim() === '' ){
            setError(true)
          }else{
            setError(false)
          }
    }

  return (
    <div>
      
      <h1>Student Registration Form</h1>

      <form>

        Student Name: <input type="text" onChange={ReadSname} name="sn" id="s1" />
        <br />
        DOB: <input type="date" onChange={ReadDob} name="dob" id="d1" />
        <br />
        Gender: <input type="radio" onChange={ReadGender} name="g" id="r1" />Male
                <input type="radio" name="g" id="r1" />Female
                <input type="radio" name="g" id="r1" />Transgender
        <br />
        Qualification: <input type="checkbox" onChange={ReadQuali} name="q" id="q1" />SSLC
                    <input type="checkbox" name="q" id="q1" />+2
                    <input type="checkbox" name="q" id="q1" />UG 
                    <input type="checkbox" name="q" id="q" />PG
        <br />
        Course: <input type="text" onChange={ReadCourse} name="c" id="c1" />
        <br />
        <input type="button" onClick={CheckHandler} value="save" />    
        <br />
        {error && 'Error Occured'}

      </form>

    </div>
  )
}

export default Student
