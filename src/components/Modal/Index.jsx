import React, { useState } from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({ isActive, changeActive, api, setToken }) => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const handler = e => {
        e.preventDefault();
        console.log("xxxxxx")
        api.logIn({ "email": email, "password": pwd })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem("shopUser", data.token);
                setToken(data.token);
                setEmail("");
                setPwd("");
                changeActive(false);
            })
    }

    return <div className={isActive ? "popupBox active" : "popupBox"}>
        <div className="popup">
            <XCircle className="popupClose" onClick={e => { changeActive(false) }} />
            <Form onSubmit={handler}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={pwd}
                        onChange={e => setPwd(e.target.value)}
                    />
                </Form.Group>
                <Button variant="warning" type="submit">Войти</Button>
            </Form>
        </div>
    </div>
}