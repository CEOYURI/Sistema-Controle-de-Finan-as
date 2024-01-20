import React ,{useState}from "react";

export  const Form = ({handleAdd})=>{
    let dat = new Date();
    
   const [Desc, Setdes] = useState("") 
   const [Valor, Setvalor] = useState(0) 
   const [Quanti, Setquanti] = useState(0)
   
    const Salvar = ()=> {
if(!Desc || !Valor || !Quanti){
    alert("Erro! campos vazios")
    return
}  else if(Quanti <1 || Valor <1){
    alert("os valores devem ser maior que zero")
    return
} 
            
      const add = {
        id: dat.getTime(),
        descricao: Desc.trim(),
        valor: Valor,
        quantidade: Quanti
      }
      handleAdd(add)
      Setdes("")
      Setvalor(0)
      Setquanti(1)
        
  }
   
    return(
        <>
        <form className="form">
            <div className="form-group">
                <label>Descrição</label>
                <input value={Desc} onChange={(e)=> Setdes(e.target.value)} name="nome" />
            </div>
            <div className="form-group">
            <label>Valor</label>
                <input value={Valor}  onChange={(e)=> Setvalor(e.target.value)} name="va" type="number" />
            </div>
            <div className="form-group">
            <label>Quantidade</label>
                <input value={Quanti}  onChange={(e)=> Setquanti(e.target.value)} type="number" name="qa" />
            </div>
            <div className="form-group">
                <button onClick={Salvar} className="add" > Adicionar </button> 
            </div>
        </form>
        </>
    )
}