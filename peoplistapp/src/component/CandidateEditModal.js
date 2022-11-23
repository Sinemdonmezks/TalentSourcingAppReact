import React, { useEffect, useState } from "react";
import { update, getOneCandidate } from "../api/apicalls";

function CandidateProfileModal({ id, hiden, setHiden, active }) {
  const [candidate, setCandidate] = useState({});

  const getCandidate = async () => {
    const response = await getOneCandidate(id);
    setCandidate(response.data);
    console.log(candidate);
    console.log(id);
  };
  useEffect(() => {
    getCandidate();
  }, [id]);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, e.target.value);
    setCandidate((c) => ({ ...c, [name]: value }));
  };
  const updateCandidate = async () => {
    console.log(candidate);
    const response = await update(candidate);
    console.log(response);
    setHiden(true);
  };

  return (
    <div tabindex="-1" aria-labelledby="exampleModalLabel">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title fs-5 text-decoration-underline"
              id="exampleModalLabel"
            >
              
              Aday Bilgilerini Düzenle{" "}
            </h1>
          </div>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">
             
              İsim Soyisim
            </label>
            <br />
            <input
              type="text"
              name="nameSurname"
              value={candidate.nameSurname}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">
              
              Email
            </label>
            <br />
            <input
              type="text"
              name="email"
              value={candidate.email}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">
              
              Telefon
            </label>
            <br />
            <input
              type="text"
              name="phone"
              value={candidate.phone}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">
              
              Adayın Durumu
            </label>
            <br />

            <select
              class="form-select"
              aria-label="Default select example"
              name="status"
              value={candidate.status}
              onChange={onChange}
            >
              <option value="SOURCED">SOURCED</option>
              <option value="INTERVIEWING">INTERVIEWING</option>
              <option value="OFFER_SEND">OFFER_SEND</option>
              <option value="HIRED">HIRED</option>
            </select>
            <br />
          </div>

          <div className="modal-footer">
            <button
              onClick={updateCandidate}
              type="button"
              className="btn btn-secondary m-1"
            >
              
              Güncelle
            </button>
            <button
              onClick={() => setHiden(true)}
              type="button"
              className="btn btn-warning"
              data-bs-dismiss="modal"
            >
              
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfileModal;
