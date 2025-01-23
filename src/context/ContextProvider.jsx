import React from "react";
import userContext from "./UserContext";
import { useState } from "react";

const ContextProvider = ({children})=>{
  const [user, setuser] = useState(null)
  return(
    <userContext.Provider value={{user,setuser}} >
     {children} {/*  // jo b araha hain whi pass krdo   */}
    </userContext.Provider>
  )
}

export default ContextProvider;



























