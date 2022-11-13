import React from "react";
import "./style.css";
import {ChevronRight, ChevronLeft} from "react-bootstrap-icons";
import { ButtonGroup, Button } from "react-bootstrap";

export default ({header}) => {
    return (
        <div className="btnGroups">
            <h3>{header}</h3>
            <ButtonGroup size="sm">
                <Button variant="light" className="btnsGroup rounded-circle" ><ChevronLeft /></Button>
                <Button disabled variant="light"></Button>
                <Button variant="light" className="btnsGroup rounded-circle"><ChevronRight /></Button>
            </ButtonGroup>
        </div>
    )
}