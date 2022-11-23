import React,{useEffect, useState} from 'react'
import {register,getallCandidate} from "../api/apicalls"

// .    KAYIT FORMU  //
function RegisterModel(
    {setHiden}
) {
    const [candidate,setCandidate] = useState({
    
    });
    const onChange = (e) => {
        const {name,value}=e.target;
        console.log(name,e.target.value);
        setCandidate((c)=>({...c,[name]:value}));
    }

    const registerCandidate = async () => {
        console.log(candidate);
        const response = await register(candidate);
        console.log(response);
        setHiden(true);
    }
    

  return (

<div tabindex="-1" aria-labelledby="exampleModalLabel" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel"> Kayıt Formu </h1>
      </div>
      <div className="modal-body"> 
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label"> İsim Soyisim</label>
            <input type="text" className="form-control" id="nameSurname" name="nameSurname" placeholder="Example Example" onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label"> Email </label>
            <input type="email" className="form-control" id="email" name="email" placeholder="example@gmail.com"onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label"> Telefon </label>
            <input type="phone" className="form-control" id="phone" name="phone" placeholder="0(5..)... .. .." onChange={onChange}/>
          </div>
        </form>
      </div>
      <div className="modal-footer">
         <button onClick = {registerCandidate} type="button" className="btn btn-secondary m-1"> Kaydet </button>
        <button onClick={()=>(setHiden(true))} type="button" className="btn btn-warning " data-bs-dismiss="modal"> Kapat </button>
       
      </div>
    </div>
  </div>
</div>

  )
}

export default RegisterModel