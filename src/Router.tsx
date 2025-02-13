import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Car } from "./pages/Car";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />} >
                <Route path="/" element={<Home/>} />
                <Route path="/carrinho" element={<Car/>} />
            </Route>
        </Routes>
    )
}