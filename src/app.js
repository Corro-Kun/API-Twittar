import express from "express";
import cors from "cors";
import morgan from "morgan";

const App = express();
 
App.use(express.json())

App.use(cors())
App.use(morgan("dev"))


export default App