import React from "react";
import RouteHandler from "./RouteHandler";
import { ChakraProvider } from '@chakra-ui/react'
import "./styles.css";

const App = () => {
    return (
        <>
        <ChakraProvider>
            <RouteHandler />
        </ChakraProvider>
        </>
    );
}

export default App;