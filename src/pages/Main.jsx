import React from "react";
import Header from "../components/MainHeader";
import Footer from "../components/Footer";
import {Container, Row, Col, Card, ButtonGroup, Button} from "react-bootstrap"
import "./Main.css"
import Product from "../components/Card"
import Banner from "../components/Banner";
import Supplement from "../components/Supplement";
import News from "../components/News";
import Headlines from "../components/Headlines";
import Watched from "../components/Watched";





export default () => {
    return (
        <>
        
       <Header/>
       
        <Container className="mainContainer">
            <Row className="mainContent">
                <Col xs={12} >
                   <Banner title="Подарок за первый заказ!" text="Легкое говяжье - пластины"/>
                </Col>

                <Headlines header="Хиты"/>

                <Col xs={3} className="spaceBtm"><Product/></Col>
                <Col xs={3} className="spaceBtm"><Product/></Col>
                <Col xs={3} className="spaceBtm"><Product/></Col>
                <Col xs={3} className="spaceBtm"><Product/></Col>
                <Col xs={6} className="spaceBtm"> <Supplement title="Наборы" text="для дрессировки" price="от 840 Р"/></Col>
                <Col xs={6} className="spaceBtm"> <Supplement title="Микс масел" text="пищевая здоровая натуральная добавка"/></Col>
                
                <Headlines header="Лакомства"/>

                <Col xs={3} className="spaceBtm"><Product/></Col>
                <Col xs={3} className="spaceBtm"><Product/></Col>
                <Col xs={3} className="spaceBtm"><Product/></Col>
                <Col xs={3} className="spaceBtm"><Product/></Col>
                <Col xs={6} className="spaceBtm"><Supplement title="Рога северного оленя" text="от 10 до 30 кг"/></Col>
                <Col xs={6} className="spaceBtm"><Supplement title="Слипы из шеи индейки" text="100% натуральное" /></Col>

                <Headlines header="Новости"/>

                <Col xs={3}><News infoText="Дрессировка щенка: что нужно знать"/></Col>
                <Col xs={3}><News infoText="Идем гулять с собакой в лес"/></Col>
                <Col xs={3}><News infoText="Сухие корма для собак"/></Col>
                <Col xs={3}><News infoText="6 лакомств для собак"/></Col>
                
                <Col xs={12}> <Banner title="Подарок за первый заказ!" text="Легкое говяжье - пластины"/></Col>
                
                <Headlines header="Вы смотрели"/>

                <Col><Watched price="500 Р" amount="1 шт" infoText="Игрушка-погремушка для мелких пород"/></Col>
                <Col><Watched price="500 Р" amount="1 шт" infoText="Игрушка-погремушка для средних пород"/></Col>
                <Col><Watched price="500 Р" amount="1 шт" infoText="Игрушка-погремушка для крупных пород"/></Col>
                <Col><Watched price="500 Р" amount="1 шт" infoText="Бублик из бычьего корня"/></Col>
                <Col><Watched price="500 Р" amount="1 шт" infoText="Печенья с яблоком"/></Col>
            </Row>
        </Container>

       <Footer/>
       </>
    )
}