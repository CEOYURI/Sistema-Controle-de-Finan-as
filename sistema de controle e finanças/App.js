import React,{ useState,useEffect } from "react";
import "./App.css"
import { Form } from "./Form";
export const App =()=> {
    const data = localStorage.getItem("Banco");
    let apagado =""
  let  question = false;
    const [dados, setdados] = useState(data? JSON.parse(data): [])
    useEffect(()=>{
   
},[dados])


const handleAdd = (add)=>{
const newDados = [...dados, add]
setdados(newDados)

localStorage.setItem("Banco", JSON.stringify( newDados))

}
const onDelete = (id)=>{
     const newfilter = dados.filter((da)=> da.id !== id)

     if(newfilter){
        apagado = "valor apagado"
        question = true
     }
     setdados(newfilter)
     localStorage.setItem("Banco", JSON.stringify(newfilter))
}
    return(
    <>
    <div className="container">
    <header className="header">
        <div className="title">Controle de Estoque</div>
    </header>
    </div>
        <Form handleAdd={handleAdd}/>
        <table>
            <tbody>
            <tr>
                <th>#id</th>
                <th>descricao</th>
                <th>Valor</th>
                <th>quantidade</th>
                <th>Acção</th>
            </tr>
            { dados.map((da)=>
            <tr key={da.id}>
                <td>{da.id}</td>
                 <td>{da.descricao}</td>
                 <td>{da.valor + " kz"}</td>
                 <td>{da.quantidade}</td>
                 <td><button onClick={()=>onDelete(da.id)} className="delete">Deletar</button></td>
                
            </tr>
            )
            }
            </tbody>
        </table>
        <div className="infor">
            {question == true ?<div>{apagado} </div>:''}
        </div>
    </>
    )
}
