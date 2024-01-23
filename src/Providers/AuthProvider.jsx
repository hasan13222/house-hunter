import { createContext, useEffect, useState } from "react"
import useAxiosSecure from "../hooks/useAxiosSecure";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const {axiosSecure} = useAxiosSecure();


    useEffect(() => {
        axiosSecure.get('/isLogin')
        .then(res => {
            if(res.data?.success === false){
                setUser(null);
            } else {
                setUser(res.data);
            }
        })
    }, [axiosSecure])

    const contextValues = {
        user,
        setUser
    }
  return (
    <AuthContext.Provider value={contextValues}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider