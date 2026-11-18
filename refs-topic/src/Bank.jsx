import React, { useRef, useState } from 'react'

const Bank = () => {

    let [balance, setBalance] = useState(5000)

    let balRef=useRef();

    let hanldeBalance=()=>{

        console.log(balRef.current.value)

        setBalance(Number(balance)+Number(balRef.current.value))
    }
    return (
        <section>
            <h2>Bank Transaction</h2>
            <h3>Account Holder:Pavan</h3>
            <h3>Balance Amount:₹ {balance}/-</h3>


            <input type="number" ref={balRef} placeholder='Enter Amount to Deposit' />
            <button onClick={hanldeBalance}>Deposit</button>
        </section>
    )
}

export default Bank
