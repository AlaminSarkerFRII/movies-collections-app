import { Routes, Route } from "react-router-dom"
import './App.css';
import Booking from "./components/Booking/Booking";
import Login from "./components/Login/Login";
import Home from "./pages/Home/Home";
import TicketDetails from "./pages/TicketDetails/TickectDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="ticket/:id" element={<TicketDetails/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="booking" element={<Booking/>}></Route>
      </Routes>
    </>
  );
}

export default App;
