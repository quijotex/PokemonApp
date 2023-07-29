import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {

    //si la condicion se cumple, muestro la vista -> Oulet
    //si no se cumple, redirijo -> Navigate
const data = JSON.parse( localStorage.getItem("userRegister") )

    if( data?.password?.length > 8) {
        return <Outlet/>
    } else {
        return <Navigate to="/" />
    }


}

export default ProtectedRoute