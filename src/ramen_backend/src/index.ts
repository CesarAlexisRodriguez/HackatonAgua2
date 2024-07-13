import { Server } from 'azle';
import express from "express";


export default Server(() => {
    const app = express();
    app.use(express.json());
    

    app.get('/registros', (req, res) => {
        const Registros = [
            {
                litros: 6,
                tiempo: 7 
            },
            {
                litros: 10,
                tiempo: 8
            },
            {
                litros: 15,
                tiempo: 14
            }
        ];
        return res.status(200).json(Registros)
          
    })

    return app.listen();
})