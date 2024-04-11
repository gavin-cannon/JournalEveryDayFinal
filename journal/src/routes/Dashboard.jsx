import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Entry from "./Entries.jsx";
import { todos } from "../data.json";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return <>
        <Header />
        <main>
         <ul>
                {todos.map((x) => (
                    <li key={x.id}>
                        <Link to={x.slug}>{x.todo}</Link>
                    </li>
                ))}
                </ul>
        </main>
        <Footer/>
    </>
}

export default Dashboard;