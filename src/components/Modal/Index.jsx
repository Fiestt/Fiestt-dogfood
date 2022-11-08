import React, { useState } from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({isActive, changeActive}) => {
    return <div className={isActive ? "popupBox active" : "popupBox"}>
        <div className="popup">
            <XCircle className="popupClose" onClick={e => { changeActive(false) }} />
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"></Form.Control>
                </Form.Group>
                <Button variant="warning" type="submit">Войти</Button>
            </Form>
        </div>
    </div>
}