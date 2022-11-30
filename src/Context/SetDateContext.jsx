import React from 'react'

const SetDateContext = React.createContext()
function SetDateContextProvider(props) {
    const [date, setDate] = React.useState(new Date())
  return (
    <SetDateContext.Provider value={date}>
        {props.children}
    </SetDateContext.Provider>
    )
}

export default SetDateContextProvider