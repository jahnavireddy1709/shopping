import React, { useState } from 'react'
import Payment from './Payment';

export default function Cart({user}) {
    const [isClicked, setIsClicked] = useState(false);
    function handleOnClick(){
         setIsClicked(true);
}
    if(isClicked){
         return(
         <Payment user = {user}/>
    )
}
  return (
    <>
    <h2>Cart page</h2>
    <h4>All looks good??</h4>
    <button onClick={handleOnClick}>Proceed to payment</button>
    </>
  )
}


