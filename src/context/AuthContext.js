import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [userloggeduid, setUserloggeduid] = useState(null) 
    const userloggeduidHandler = (userid) => {
        setUserloggeduid(userid);
        AsyncStorage.setItem('userloggeduid', userid);
    }

    const checkIsLogged = async () => {
        try{
            const value = await AsyncStorage.getItem('userloggeduid');
            if(value !== null){
                setUserloggeduid(value);
            }
            else {
                console.log('Use logged UID not found in AsyncStorage');
            }
        }catch (error){
            console.log('Errorr retriieviing userloggeduiid:', error);
        }
    }

    console.log('From Context (UID)', userloggeduid)
    const data1 = 'Context Data'
    return <AuthContext.Provider value={{data1, userloggeduid, userloggeduidHandler}}>
        {children}
    </AuthContext.Provider>
}
export {AuthProvider, AuthContext}