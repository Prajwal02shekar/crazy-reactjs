// import { useState } from "react";

import { useState } from "react"

// function HOC(OriginalComp) {
//     function newComp(){

//         let [count,setCount]=useState(0)
//         let handleCount=()=>{
//             setCount(count+1)

//         }
//         return <OriginalComp count={count} handleCount={handleCount}/>
//     }return newComp;

// }
// export default HOC;


function CommonFun(Origional){
    function newComp(){
        let [money,setMoney]=useState(10)
        let handleMoney=()=>{
            setMoney(money*2)
        }
        return <Origional money={money} handleMoney={handleMoney}/>
    }
    return newComp;
}
export default CommonFun