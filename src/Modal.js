import './styleForm.css'
export default function Modal({ModalHidden,erroeMSg}){
  if(ModalHidden){
    return <div  id="modal">
    <div id="modalcontent">
 
 <h1  style={{color:erroeMSg?"red" :"green"}}>
  {erroeMSg!=null?erroeMSg:"The Form has been submited successfully"}</h1>
    </div>
</div>
  }else{
    <></>
  }
 
}