import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { todos } from "./data.json";
import { Link } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";

function App() {
    async function getEntries() {
        const response = await fetch("http://localhost:8080/");
        console.log(response);
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) {
            throw Error(body.message)
        }
        setValue(body);
        return body;
    }
    const [value, setValue] = React.useState([{"_id":"6617639eba33a586a3530b04","title":"First Entry","text":"4/10/2024 hello how are you"},{"_id":"661766432de82f03a3338432"},{"_id":"661766c72de82f03a3338434"},{"_id":"661767482de82f03a3338435"},{"_id":"661767a8b2666a5fe4b23201"},{"_id":"661767d44cab48f48fc0a479"},{"_id":"66176ae3922f926a3551e9e0","title":"hello","text":"this is a test"},{"_id":"66176f67dbf119ac3afd32e8","title":"Another fItem","entry":"ffff"},{"_id":"66176fe6dbf119ac3afd32e9","title":"Another fItem","entry":"ffff"},{"_id":"66176ffedbf119ac3afd32ea","title":"lbbhlb","entry":"oji;aoi;jg;joiaw"},{"_id":"66177378dbf119ac3afd32ec","title":"Go hug your mom","entry":"fff"},{"_id":"66177436dbf119ac3afd32ed","title":"","entry":""}]);
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log("it worked");
        console.log(e);
        console.log(e.target.title.value);
        console.log(e.target.entry.value);
        fetch("http://localhost:8080/", {
            method: "POST",
            body: JSON.stringify({
                title: e.target.title.value,
                entry: e.target.entry.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        e.target.reset();
        getEntries();
    } 
    return (
        <>
            <Header/>
            <main>
            <h2>Journaling Streak: NUMBER days.</h2>
            <label htmlFor="quickEntry">Write in your Journal:</label>
            <textarea id="quickEntry" name="quickEntry" cols="50" rows="20">
                Write in here...
                </textarea>

                <form id="myForm" onSubmit={handleSubmit} >
                <label htmlFor="title">Text:</label><br/>
                <input type="text" id="title" name="title"></input><br/>
                <label htmlFor="entry">Textarea:</label><br/>
                <textarea id="entry" name="entry"></textarea><br/><br/>
                <input type="submit" value="Submit"/>
            </form>

            <h2>Recent Entries</h2>
            <ul>
                {value.map((x) => (
                    <li key={x.id}>
                        <Link to={x.title }>{x.title}</Link>
                    </li>
                ))}
                </ul>
            </main>
            <Footer/>
        </>

    );
}

export default App
