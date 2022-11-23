import React from 'react'

function Modal({children,databstarget,hiden,setHiden,active}) {
    let className= hiden ? "mymodel d-none" : "mymodel";
    console.log(hiden);
  return (
    
         <div className={className}>
            <div className="innermodel border border-5 border-warning rounded-5 w-25 h-75 p-lg-5"  id={databstarget} tabindex="-1" aria-labelledby="exampleModalLabel" >
          {Array.isArray(children)?children[active]:children}  </div>
          
         </div>
    
  )
}

export default Modal