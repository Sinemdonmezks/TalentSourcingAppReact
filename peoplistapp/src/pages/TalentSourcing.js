import React, { useState } from "react";
import RegisterModel from "../component/RegisterModel";
import Modal from "../component/Modal";
import CandidateListModal from "../component/CandidateListModal";
import CandidateProfileModal from "../component/CandidateEditModal";
function TalentSourcing() {
  const [hiden, setHiden] = useState(true);
  const [active, setActive] = useState();
  const [isClick, setIsClick] = useState(false);

  const openRegisterModal = () => {
    setHiden(false);
  };

  const openEditModal = () => {
     isClick ? setIsClick(false) : setIsClick(true);
    
  };

  return (
    <>
      <div >
        <nav class="navbar bg-dark  ">
          <div class="container-fluid mb-5">
            <h1 class="navbar-brand mx-auto text-white fs-1" >
              @ TalentSourcing
            </h1>
          </div>
        </nav>

      <div className="d-flex justify-content-evenly my-5">
        <button 
          onClick={openRegisterModal}
          type="button"
          class="btn btn-dark ">
          Kayıt Formu
        </button>

        <button onClick={openEditModal} type="button" class="btn btn-dark">
          Aday Listesi
        </button>
      </div>
        <Modal
          hiden={hiden}
          setHiden={setHiden}
          databstarget={"#exampleModal"}
        >
          <RegisterModel title="AdayKaydı" setHiden={setHiden}></RegisterModel>
        </Modal>
        {isClick ? <CandidateListModal setActive={setActive}></CandidateListModal> : ""}
      </div>
    </>
  );
}

export default TalentSourcing;
