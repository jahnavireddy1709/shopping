import React, { useState } from 'react'

import Shopping from './Shopping';

export default function Login({user}) {
    const [isClicked, setIsClicked] = useState(false);
    function handleOnClick(){
         setIsClicked(true);
}
    if(isClicked){
         return(
            <>
            <h2>Payment page</h2>
            <h4>Username : {user.username}</h4>
            <h4>Wallet : {user.wallet}</h4>
            <button onClick={handleOnClick}>PAY</button>
            <h4>Updated Wallet : {user.wallet-5000}</h4>
            </>
         
    )
}
  return (
    <>
    <h2>Payment page</h2>
    <h4>Username : {user.username}</h4>
    <h4>Wallet : {user.wallet}</h4>
    <button onClick={handleOnClick}>PAY</button>
    </>
  )
}


