import React,{useEffect, useState} from 'react'
import {getallCandidateDetail,getallCandidate, deleteCandidate} from "../api/apicalls"
import CandidateEditModal from './CandidateEditModal'
import CandidateDetailModal from './CandidateDetailModal '
import Modal from "./Modal"

//   ADAY DÜZENLEME SAYFASI  //

function CandidateListModal() 
{
    const [candidates,setCandidates]=useState([]);
    const [id,setId]= useState(0);
    const[email,setEmail]=useState();
    
    const [isClickEdit,setIsClickEdit]= useState(false);
    const[isClickDetail,setIsClickDetail] =useState(false);

    const [hiden,setHiden] = useState(true);
    const [active, setActive] = useState();
    const [candidateDetails,setCandidateDetails] = useState([]);
    const [candidateDetail,setCandidateDetail] = useState({});

    const allCandidate = async ()=> {
        const response = await getallCandidate();
       await setCandidates([...response.data]);
       // console.log(response.data);
           }
           useEffect(()=>{
               allCandidate()
           },[hiden]) 

    const deleteMyCandidate = (e) => {
         setId(e.target.value);
        const myId= e.target.value;
         deleteCandidate(myId);
        let list = [...candidates]
         list=list.filter((x)=>x.id!==myId)
       setCandidates([...list])
    }
    const getCandidateDetail = async () => {
        const response = await getallCandidateDetail();
         setCandidateDetails([...response.data]);
        console.log(candidateDetails);
        console.log(response);
        
    }
    useEffect(()=>{
     getCandidateDetail()
     console.log(candidateDetail)
    },[candidates])

    const showDetail = (e)=> {
        setCandidateDetail(candidateDetails.find((d)=>d.candidateId==e.target.value))
       
    }

  return (
    <div >
        <table className="w-100 table table-striped">
            <thead >
            <tr >
                <th className="text-center" scope="col">İsim Soyisim </th>
                <th className="text-center" scope="col"> Email </th>
                <th className="text-center" scope="col"> Telefon </th>
                <th className="text-center" scope="col"> Durum </th>
                <th className="text-center" scope="col"> Detay </th>
            </tr>
            </thead >

            <tbody >

                    {candidates.map((data,index)=>(<tr className="text-center" key={index} value={data.id}>  
                        <td>{data.nameSurname}</td>  
                        <td>{data.email}</td>  
                        <td>{data.phone}</td>  
                        <td>{data.status.toString()}</td> 
                         <td>
                            <div class="dropdown">
                                <button onClick={showDetail} value ={data.id} tabindex="-1" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Görüşme Detayı
                                </button>

                                 <ul class="dropdown-menu">
                                    <li><p>Görüşme içeriği : </p></li>
                                     <li class="dropdown-item">{candidateDetail?.content}</li> 
                                    <li><p>Görüşme tarihi : </p></li>
                                     <li class="dropdown-item">{candidateDetail?.date}</li> 
                                    <li><p>Görüşülecek adaya cevap verildi mi? : </p></li>
                                     <li class="dropdown-item"> {candidateDetail?.candidateResponded?"cevapladı":"cevaplamadı"}</li> 
                                    <li><p>Görüşme ne ile gerçekleşecek? : </p></li>
                                     <li class="dropdown-item">{candidateDetail?.type?.toString()}</li>  
                                   
                                   </ul>
                            </div>
                        </td>  

                        <td> 
                            <div >
                                 <button className="m-1 btn btn-secondary " value= {data.id} 
                                 onClick={deleteMyCandidate}
                                 > Sil </button>

                                <button className="m-1 btn btn-secondary" onClick={()=> {
                                setId(data.id);
                                setIsClickEdit(true);
                                setHiden(false);
                                setActive(0);
                                 }}> Düzenle </button>

                                 <button className="m-1 btn btn-secondary" onClick={()=> {
                                    setId(data.id);
                                setEmail(data.email);
                                setIsClickDetail(true);
                                setHiden(false);
                                setActive(1);

                                 }}> Aday Detay </button>
                            </div>
                        </td> 
                    </tr>))} 
                 
            </tbody>

        </table>
        <Modal hiden={hiden} setHiden={setHiden} active={active} databstarget={"#exampleModal"} >
            {isClickEdit ? <CandidateEditModal id={id} setHiden={setHiden} ></CandidateEditModal> : "" }
            {isClickDetail ? <CandidateDetailModal id={id} setHiden={setHiden}></CandidateDetailModal> : ""} 
        </Modal>

    </div>
  )
}

export default CandidateListModal;