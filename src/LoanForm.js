import './styleForm.css'
import Modal from './Modal'
import { useState } from 'react'


export default function LoanForm() {
    const [errorMsg, seterrormsg] = useState(null)
    const [showModal, setshowmodal] = useState(false)
    const [loaneInput, setloaneinput] = useState({
        name: "",
        phone: "",
        age: "",
        isemployee: false,
    })
    console.log(loaneInput)

    function handelValue(event) {
        const { name, type, value, checked } = event.target;

        if (type === "checkbox") {
            setloaneinput({
                ...loaneInput,
                [name]: checked,
            });
        } else {
            setloaneinput({
                ...loaneInput,
                [name]: value,
            });
        }
    }

    // moadel
    function handlsubmitMoadel(event) {
        event.preventDefault();
        
        if (loaneInput.age < 18 || loaneInput.age > 100) {
            seterrormsg("The age is not allowed")
        } else if (loaneInput.phone.length !== 12) {
            seterrormsg("Phone number must be exactly 10 digits")
        } else {
            seterrormsg(null)
        
        }
        setshowmodal(true)
    }
 
// hide moadal 
function hidemodal() {
    setshowmodal(false)
}

// check btn disabled style  true or false
let disabld = !loaneInput.name || !loaneInput.phone || !loaneInput.age;

return (
    <div className='flex' style={{ flexDirection: 'column' }} onClick={hidemodal}>
        <form className='Loaenform' onSubmit={handlsubmitMoadel}>
            <h1>Requesting a Loan </h1>
            <hr></hr>
            <label>Name</label>
            <input name='name' value={loaneInput.name} onChange={handelValue}></input>

            <label>Phone Number</label>
            <input name='phone' value={loaneInput.phone} onChange={handelValue}></input>

            <label>Age</label>
            <input type='number' name='age' value={loaneInput.age} onChange={handelValue}></input>

            <label style={{ marginTop: "30px" }}>Are you employee?</label>
            <input name='isemployee' type='checkbox' checked={loaneInput.isemployee} onChange={handelValue}></input>

            <label>Salary</label>
            <select name='salary' onChange={handelValue}>
                <option value="less">Less than 500$</option>
                <option value="500-2000">Between 500$ and 2000</option>
                <option value="above">Above 2000</option>
            </select>

            <button className={disabld ? 'checkdisbled' : ''} disabled={disabld} id='submitloaenBtn'>submit</button>

        </form>
        <Modal erroeMSg={errorMsg} ModalHidden={showModal} />
    </div>

)
    
}
