import { Router, Request, Response } from "express";
import userController from "./controllers/user"
const routes = Router();

//rota de teste, hello word
routes.get("/", (req: Request, res: Response) : any => {
    return res.send('rota de teste')
})

//rota que retorna json, uma lista nomeada "items"
routes.get("/funcionarios", (req: Request, res: Response) : any => {
    return res.json({
        items: [
            {
                id: "1",
                nome: "Andre",
                cargo: "dev",
                idade: 22,
                custoPorHora: 120.0,
                temLicenca: false
            },
            {
                id: "2",
                nome: "Adulto",
                cargo: "aluno",
                idade: 17,
                custoPorHora: 10.0,
                temLicenca: true
            },
            {
                id: "3",
                nome: "3K",
                cargo: "caixa do condor",
                idade: 22,
                custoPorHora: 32.70,
                temLicenca: true
            }
        ]
    })
})

routes.get("/sexo", (req: Request, res: Response) : any => {
    return res.json({
        items: [
            {
                id: "1",
                nome: "Jujuba",
                image: "https://cdn.awsli.com.br/800x800/2216/2216236/produto/15043726591095a6369.jpg"
            },
            {
                id: "2",
                nome: "cebola",
                image: "https://shoppr.com.br/cdn/shop/products/yellow_onion1.jpg?v=1568779689",
            },
            {
                id: "3",
                nome: "Joca",
                image: "https://www.jornaljoca.com.br/wp-content/uploads/2021/11/joca-lendo2-copy.jpeg"
            },
        ]
    })
})

routes.post("/users", (req: Request, res: Response) : any => userController.create(req,res))
routes.get("/users", (req: Request, res: Response) : any => userController.read(req,res))
routes.put("/users/:id", (req: Request, res: Response) : any => userController.update(req,res))
routes.delete("/users/:id", (req: Request, res: Response) : any => userController.delete(req,res))
routes.post("/login", (req: Request, res: Response) : any => userController.login(req,res))

export default routes