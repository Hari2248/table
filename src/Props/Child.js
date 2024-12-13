import React from 'react'
// 1 basics props usage
// function Child({passdata}) {
//   return (
//     <div>
//         <h1>{passdata}</h1>
       

//     </div>
//   )
// }
// 2 passing a function as props
// function Child({greeting}){
//     return(
//         <div>
//             <h1>{greeting}</h1>
//             <button onClick={greeting}>clickme</button>
//         </div>
//     )
// }

//3 passing objects as props
// function Child({userDetails}){
//     return(
//         <div>
//             <h1>Name:{userDetails.name}</h1>
//             <h1>Age:{userDetails.age}</h1>
//         </div>
//     )
// }

// 4 passing state from parent to child
// function Child({message}){
//     return(
//         <div>
//             <h1>hai:{message}</h1>
//         </div>
//     )
// }

// 5 callback function for child to update Parent
// function Child({onMessageChange}){
//     return(
// <div>
//     <button onClick={()=>{onMessageChange("Hi parent")}}> send message to parent</button>
// </div>
//     )
// }

// 6 conditional rendering in child based on  props
// function Child({status}){
    

//     return(
//         <div>
// <h1>{status ? "welcome back":"please login"}</h1>
//         </div>
//     )
// }


// 7 passing jsx as props
function Child({renderElement}){
    return(
        <div>
            <h1>{renderElement}</h1>
        </div>
    )
}
export default Child