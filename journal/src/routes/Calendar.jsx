import React from "react";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CalendarGrid from "../components/CalendarGrid.jsx";

const Calendar = () => {
    return<>
        <Header />
        <main>
        <CalendarGrid />
        </main>
        <Footer/>
        </>       
}

export default Calendar;