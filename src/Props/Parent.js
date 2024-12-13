import React, { useState } from 'react'
import Child from './Child';

//basic props usage
// function Parent() {
//   const name="deepu";
//   return (
//     <div>
//       <Child passdata={`hello,${name}`}/>

//     </div>
//   )
// }


//passing function as props
// function Parent(){
//   const handleClick=()=>{
//     alert("heloo all members")
//   }
//   return(
//     <div>
//       <Child greeting={handleClick}/>
//     </div>
//   )
// }
// 3 passing objects as props
// function Parent(){
//   const user={
//       name:"hari",
//       age:23
//   };
//   return(
//       <div>
//           <Child userDetails={user}/>
//       </div>
//   )
// }


// 4 passing state from parent to child
// function Parent(){
//   const[message,setMessage]=useState("hello from parent")
//   return(
//     <div>
//       <Child message={message}/>
//     </div>
//   )
// }

// 5 callback functiion for child to update parent
// function Parent(){
//   const[message,setMessage]=useState("");
//   const handleMessageChange=(newMessage)=>{
//     setMessage(newMessage);
// console.log(message)
//   };
//   return(
//     <div>
//       <h1>message from parent:{message}</h1>
//       <Child onMessageChange={handleMessageChange}/>

//     </div>
//   )
// }


// 6 conditional rendering in child based on  props
// function Parent(){
//   const isLoggin=false;

//   return(
//       <div>
// <Child status={isLoggin}/>
//       </div>
//   )
// }

// 7 passing jsx as props
function Parent(){
  const customElement=<button>Custom Button</button>
  return(
    <div>
      <Child renderElement={customElement}/>
    </div>
  )
}

export default Parent