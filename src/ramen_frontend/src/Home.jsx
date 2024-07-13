import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRestActor } from "@bundly/ic-react";
import {Navbar, Container, Nav, Card, Button, Placeholder, images} from 'react-bootstrap';
import { AuthButton } from '@bundly/ic-react';
import Logo from "./images/logo.jpeg"
import './Registros';

export const Home = () => {
    useEffect(() => {
        getUsers()
    }, [])
    
    const bnd = useRestActor("backend");
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await bnd.get("/users");
            console.log(res.data)
            setUsers(res.data)
        } catch (error) {
            console.log("Error", error)
        }
    }

    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="/">AC SAFE</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link ><AuthButton/></Nav.Link>
                <Nav.Link href="/data">Registros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={Logo} />
        <Card.Body>
          <Card.Title>AC SAFE</Card.Title>
          <Card.Text>
            Nosotros somos un equipo de desarrollo que esta realizando el proyecto llamado AC SAFE, 
            donde reutilizamos el agua desperdiciada por los Aires Acondicionados a traves del drenado 
            y registro de lo recaudado.
          </Card.Text>
          <Button variant="primary"><AuthButton/></Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Proyecto</Card.Title>
          <Card.Text>
            Nuestro producto es capaz de identificar el nivel de agua que contiene el recipiente donde se concentrara 
            el agua salvada del desperdicio de los Aires Acondicionados, ademas de un registro en nuestra base de datos
            donde podemos ver los litros salvados por dia. 
          </Card.Text>
          <Button variant="primary" href='/data'>Ver Registros</Button>
        </Card.Body>
      </Card>
        </>
    )
}