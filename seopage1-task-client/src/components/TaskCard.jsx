/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import moment from "moment";
import User from "./User";


export default function TaskCard({ data ,setAttachmentsTaskID , setmodal}) {
  return (
    <div className="bg-slate-200 bg-opacity-80 space-y-1 p-2 px-3 rounded-lg">

      <div className="users flex min-h-10 justify-between items-center">
        <User avatar={"https://i.ibb.co/9ZV4gBG/user.png"} user={data.author} ></User>
        <User avatar={"https://i.ibb.co/BLL3Kg7/avatar-for-programin-hero.png"} user={"Nahid Hasan"} ></User>
      </div>

      <div className="task text-gray-600 min-h-10 justify-between flex gap-2 items-center">
      <div className="flex gap-2 items-center">
      <i className="fa-solid fa-layer-group"></i>
      <p className="text-sm">{data.task.slice(0,30)+"..."}</p>
      </div>
      <div className="flex gap-1 items-center text-sm font-semibold"><i className="fa-solid fa-clipboard-list"></i> <p>1/2</p></div>
      </div>  
      
      <div className="details font-semibold text-gray-600 min-h-10 justify-between flex gap-2 items-center">
      <img src={'https://i.ibb.co/jbtWVnR/2-m.png'} className="h-6  w-6 rounded-full" alt="" />
      <img src={'https://i.ibb.co/d5f2TYj/5-f.png'} className="h-6  w-6 rounded-full" alt="" />
      <p>12+</p>
       <p><i className="fa-regular fa-comments mr-[2px]"></i> 15</p>
       <p>
      <i onClick={()=>(setAttachmentsTaskID(data._id),setmodal(true))} className="fa-solid hover:cursor-pointer fa-paperclip mr-[2px]"></i> {data?.attachments?.length}
    </p>
       <p className="text-sm"><i className="fa-solid fa-calendar-days mr-1"></i>{moment(data.date).format("MMM Do YY")}</p>
      </div>

    </div>
  );
}
