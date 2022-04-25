import React from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

/* page imports */
import HomePage from "./pages/HomePage";

const RouteHandler = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteHandler;