import React, { useRef, useState } from 'react'

const UncontrolledForms = () => {
    let [result,setResult]=useState({
        total:"",
        average:"",
        percentage:""
    })
    let sub1Ref=useRef()
    let sub2Ref=useRef()
    let sub3Ref=useRef()

    let handleCalculate=(e)=>{
        e.preventDefault()
        
        let s1=Number(sub1Ref.current.value)
        let s2=Number(sub2Ref.current.value)
        let s3=Number(sub3Ref.current.value)

        setResult({
            total:s1+s2+s3,
            average:(s1+s2+s3)/3,
            percentage:((s1+s2+s3)/300)*100
        })
    }
  

   
  return (
    <form onSubmit={handleCalculate}>
        <fieldset>
            <legend>Studnet</legend>
            <label htmlFor="sub1">Enter Subject 1 Marks:</label>
            <input type="number" ref={sub1Ref} id='sub1' placeholder='Enter Subject 1 Marks' /><br /><br />
            <label htmlFor="sub2">Enter Subject 2 Marks:</label>
            <input type="number" ref={sub2Ref} id='sub2' placeholder='Enter Subject 2 Marks' /><br /><br />
            <label htmlFor="sub3">Enter Subject 3 Marks:</label>
            <input type="number" ref={sub3Ref} id='sub3' placeholder='Enter Subject 3 Marks' /><br /><br />
            <button >Calculate </button>
        </fieldset>

        <div>
            <h3>Total Marks:{result.total}</h3>
            <h3>Avergae Marks:{result.average}</h3>
            <h3>Percentage:{result.percentage}</h3>

        </div>
    </form>
  )
}

export default UncontrolledForms
