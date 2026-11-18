// import React, { useRef } from 'react'

// const Example1 = () => {

//     let h1Ref=useRef()
//     console.log(h1Ref)


//     let hanldClick=()=>{
//         console.log(h1Ref )
//     }
//     return (
//         <div>
//             <h1 ref={h1Ref} onClick={hanldClick}>HEllo All </h1>
//         </div>
//     )
// }

// export default Example1




import React, { useRef, useState } from 'react'

const Example1 = () => {
    let imggRef=useRef(); 
    let [state,setState]=useState(false)

    let handleImage=()=>{
        if(!state){
            imggRef.current.style.borderRadius="50%"
        }else{
            imggRef.current.style.borderRadius="0"

        }
        setState(!state)
    }
  return (
    <div>
      <img onMouseOver={handleImage} onMouseOut={handleImage} ref={imggRef} src="https://avatars.githubusercontent.com/u/160094074?v=4" alt="" />
    </div>
  )
}

export default Example1
