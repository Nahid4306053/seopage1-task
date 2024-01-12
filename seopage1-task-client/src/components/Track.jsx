/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import TaskCard from "./TaskCard";
import AttachmentModel from "./AttachmentModel";


export default function Track({status,data}) {
  const [finaldata,setfinalData] = useState([]);
  const [modal,setmodal] = useState(false);
  const [attachmentsTaskID, setAttachmentsTaskID] = useState()
  useEffect(()=>{
  if(data){
     const filterdata = data.filter((ele)=> ele.status === status);
     setfinalData(filterdata);
  }
  },[data])
                  
  return (
                     
    <div className="min-w-[400px] h-full max-h-full custom-scrollbar overflow-y-auto ">
       <div className="trak_head sticky top-0 b h-9 rounded-full overflow-hidden flex items-center justify-between">
          <div className="flex items-center bg-white gap-3 h-full w-full">
          <div className={`h-full w-10 ${status === "incomplete" && "bg-red-600"} ${status === "doing" && "bg-yellow-500"} ${status === "to-do" && "bg-sky-500"}
           ${status === "under review" && "bg-slate-300"}
           ${status === "completed" && "bg-green-600"} `}>
           </div>     
           <h1 className="text-xl font-semibold capitalize ">{status}</h1>             
         </div> 
         <div className="w-14 bg-slate-300 h-full flex font-semibold justify-center items-center text-lg">{finaldata.length}</div>        
       </div>
       <div className="grid gap-5 mt-5">
         {finaldata.map((ele,ind)=>{ 
            return (<TaskCard setmodal={setmodal} setAttachmentsTaskID={setAttachmentsTaskID} data={ele} key={ele._id}></TaskCard>)        
         })}
       </div>
       {modal && attachmentsTaskID && <AttachmentModel  setmodal={setmodal} attachmentsTaskID={attachmentsTaskID} ></AttachmentModel>}
    </div>
  )
}
