import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// import { AuthContextProvider } from "./context/AuthContext";
// import { ChatContextProvider } from "./context/ChatContext";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <AuthContextProvider>
//   <ChatContextProvider>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//    </AuthContextProvider>
//     </ChatContextProvider>
// )

//import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";

import App from './App.jsx';
import './index.css';

import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChatContextProvider>
        <App />
      </ChatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);





// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { AuthContextProvider } from "./context/AuthContext";
// import { ChatContextProvider } from "./context/ChatContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <AuthContextProvider>
//     <ChatContextProvider>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </ChatContextProvider>
//   </AuthContextProvider>
// );
