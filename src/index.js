import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AppContainer from './components/AppContainer';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";
import ConnectBar from "./components/ConnectBar";
import Sidebar from "./components/Sidebar";
import PinkRaffle from "./components/PinkRaffle";
import YellowRaffle from "./components/YellowRaffle";
import Stake from "./components/Stake";
import SRP from "./components/SRP";
import Footer from "./components/Footer";

function App() {
    return (
            <div id={'topBar'}>
                <div id={'connectBar'}>
                    <ConnectBar />
                    <div id={'burger'}>
                        <Sidebar />
                    </div>
                </div>
                <Header />
            </div>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <div id={'container'}>
        <BrowserRouter>
            <App />
            <Routes>
                <Route path="/" element={<AppContainer />} />
                <Route path="pink" element={<PinkRaffle />} />
                <Route path="yellow" element={<YellowRaffle />} />
                <Route path="stake" element={<Stake />} />
                <Route path="srp" element={<SRP />} />
            </Routes>
            <br/>
            <br/>
            <Footer />
        </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
