import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRestActor } from "@bundly/ic-react";
import {Table, Navbar, Container, Nav} from 'react-bootstrap';

export const Registros = () => {
    useEffect(() => {
        getRegistros()
    }, [])
    
    const bnd = useRestActor("backend");
    const [registros, setRegistros] = useState([]);

    const getRegistros = async () => {
        try {
            const res = await bnd.get("/registros");
            console.log(res.data)
            setRegistros(res.data)
        } catch (error) {
            console.log("Error", error)
        }
    }
    return(
        <>

    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/">AC SAFE</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
    </Navbar>


        {
            registros.map((obj)=>(
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Dia</th>
          <th>Litros</th>
          <th>Horas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{obj.litros}</td>
          <td>{obj.tiempo}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>{obj.litros}</td>
          <td>{obj.tiempo}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>{obj.litros}</td>
          <td>{obj.tiempo}</td>
        </tr>
      </tbody>
    </Table>

            ))
        }
        </>
    )
}

