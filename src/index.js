import React from "react"
import "./css/style.css"
import ReactDOM from "react-dom"
import Header from "./Header.js"
import MainContent from "./MainContent.js"
import Footer from "./Footer.js"

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById("root")).render(
    <div className="index-div">
        <div className="index-div-2">
            <Header />
            <MainContent />
            <Footer />
        </div>
    </div>
)