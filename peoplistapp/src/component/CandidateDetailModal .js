import React, { useEffect, useState } from "react";
import { getOneDetail, saveDetail } from "../api/apicalls";

function CandidateDetailModal({ id, hiden, setHiden, active }) {
  const [candidateDetail, setCandidateDetail] = useState({});
  console.log(id);

  const getCandidateDetail = async () => {
    const response = await getOneDetail(id);
    setCandidateDetail(response.data);
  };

  useEffect(() => {
    getCandidateDetail();
  }, [id]);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, e.target.value);
    setCandidateDetail((c) => ({ ...c, [name]: value }));
  };

  const saveCandidateDetail = async () => {
    console.log(candidateDetail);
    const response = await saveDetail(candidateDetail);
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
              Detayı Düzenle
            </h1>
            <br />
          </div>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">
              Görüşme Detayı
            </label>
            <br />
            <input type="text" name="content" value={candidateDetail.content} onChange={onChange} />
          </div>

          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">
              Tarih
            </label>
            <br />
            <input type="date" name="date" value={candidateDetail.date} onChange={onChange} />
          </div>

          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">
              Cevaplanma Durumu
            </label>
            <br />
            <select
              class="form-select"
              aria-label="Default select example"
              name="candidateResponded"
              onChange={onChange}
              value= {candidateDetail.candidateResponded}
            >
              <option value="true">Cevaplandı</option>
              <option value="false">Cevap Verilmedi</option>
            </select>
          </div>

          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">
              İletişim Tipi
            </label>
            <br />
            <select
              class="form-select"
              aria-label="Default select example"
              name="type"
              value={candidateDetail.type}
              onChange={onChange}
            >
              <option value="EMAIL">Email</option>
              <option value="PHONE">Telefon</option>
              <option value="LINKEDN">Linkedn</option>
            </select>
          </div>

          <div className="modal-footer">
            <button
              onClick={saveCandidateDetail}
              type="button"
              className="btn btn-secondary m-1"
            >
              Kaydet
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

export default CandidateDetailModal;
