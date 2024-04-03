import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children})=> {
    const [attendenceData ,setAttendenceData] = React.useState([])
    const [bool,setBool] = useState(false);
    let stdData =[];
return(
    <UserContext.Provider value={{attendenceData ,setAttendenceData,stdData,bool,setBool}}>
        {children}
    </UserContext.Provider>
)

}

export default UserContextProvider;