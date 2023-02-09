import {createContext, useState} from "react";

const Notification=({message, type})=>{
    const notificationStyle={
        position:'absolute',
        top: 50,
        right: 50,
        backgroundColor: type === 'success' ? 'violet' : 'red',
        color:'white',
        padding:'10px 20px',
    }

    if(!message){
        return null;
    }

    return(
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export const NotificationContext = createContext()
export const NotificationProvider = ({children}) => {

    const [message, setMesagge] = useState('')
    const [type, setType] = useState('success')

    const setNotification = (message, time, type) => {
        setMesagge(message)
        setType(type)

        setTimeout(() => {
            setMesagge('');
        }, time * 1000)
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} type={type}/>
            {  children }
        </NotificationContext.Provider>
    )
}