import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

// version 18
// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App/>);
createRoot(document.getElementById('root')).render(<App/>);

// version 17
// ReactDOM.render(<App/>,document.getElementById('root'))