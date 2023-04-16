import express from "express";
import cors from "cors";
import morgan from "morgan";

const App = express();
 
App.use(express.json())

App.use(cors())
App.use(morgan("dev"))

App.use((req, res, next) =>{
  res.status(404).json({
     Error: "no existe la ruta solicitada"
  })
})


export default App
