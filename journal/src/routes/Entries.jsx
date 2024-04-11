import React from "react";
import {useParams} from "react-router-dom";
import { todos as items } from "../data.json";


const Entry = () => {
    const { slug } = useParams();
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
    const [value, setValue] = React.useState([{ "_id": "6617639eba33a586a3530b04", "title": "First Entry", "text": "4/10/2024 hello how are you" }, { "_id": "661766432de82f03a3338432" }, { "_id": "661766c72de82f03a3338434" }, { "_id": "661767482de82f03a3338435" }, { "_id": "661767a8b2666a5fe4b23201" }, { "_id": "661767d44cab48f48fc0a479" }, { "_id": "66176ae3922f926a3551e9e0", "title": "hello", "text": "this is a test" }, { "_id": "66176f67dbf119ac3afd32e8", "title": "Another fItem", "entry": "ffff" }, { "_id": "66176fe6dbf119ac3afd32e9", "title": "Another fItem", "entry": "ffff" }, { "_id": "66176ffedbf119ac3afd32ea", "title": "lbbhlb", "entry": "oji;aoi;jg;joiaw" }, { "_id": "66177378dbf119ac3afd32ec", "title": "Go hug your mom", "entry": "fff" }, { "_id": "66177436dbf119ac3afd32ed", "title": "", "entry": "" }]);

    
    const item = value.find((x) => x.title == slug);

    return (<div>
        <h1>Journal Entries</h1>
        <p>{item._id}</p>
        <p>{item.title}</p>
        <p>{item.entry}</p>
    </div>)
    
}

export default Entry;