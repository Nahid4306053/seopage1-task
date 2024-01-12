/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import UploadIMG from "../Utils/UploadIMG";

export default function AttachmentModel({ setmodal, attachmentsTaskID }) {
  const [files, setfiles] = useState([]);
  const queryCLient = useQueryClient();
  const [loading, setloading] = useState(false);
  const mutation = useMutation({
    mutationFn: async (formdata) => {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL_V1}/task/attach/${attachmentsTaskID}`,
        formdata
      );
      return res;
    },
    onSuccess: () => {
      queryCLient.invalidateQueries("tasks");
      toast.success("Files attached successfully");
      setloading(false);
      setmodal(false);
    },
    onError: () => {
      toast.error("There is serever side errro occured");
      setloading(false);
    },
  });
  const uploadAttach = async (e) => {
    e.preventDefault();
    setloading(true);
    const err = [];
    const filtype = ["image/jpg", "image/jpeg", "image/png"];
    Object.values(files).map((ele, ind) => {
      if (!filtype.includes(ele.type)) {
        err.push(["Only .jpg .png and .jpeg are allowe"]);
        toast.error("Only .jpg .png and .jpeg are allowe");
      }
    });
    if (err.length === 0) {
      const attachs = await Promise.all(
        Object.values(files).map(async (ele, ind) => {
          const result = await UploadIMG(ele);
          if (result.data.data.display_url) {
            return result.data.data.display_url;
          }
        })
      );
      if (attachs.length > 0) {
        mutation.mutate({ attachments: attachs });
      } else {
        setloading(false);
      }
    } else {
      setloading(false);
    }
  };
  return (
    <div className="h-screen fixed flex justify-center top-0 z-[9] left-0 items-center w-screen bg-[#00000039] p-10">
      <div className="Model max-h-screen overflow-y-auto custom-scrollbar max-w-2xl w-full min-h-48 bg-white rounded-lg ">
        <div>
          <Toaster />
        </div>
        <div className="flex justify-end">
          <i
            onClick={() => setmodal(false)}
            className="fa-solid fa-xmark p-2 bg-red-400 text-white cursor-pointer"
          ></i>
        </div>
        <div className="mainpart  p-5">
          {files && (
            <div className="files">
              {Object.values(files).map((ele, ind) => {
                return <li key={ind}>{ele?.name}</li>;
              })}
            </div>
          )}
          <p className="text-center py-5">You can Attach Only Img Files</p>
          <form
            onSubmit={uploadAttach}
            className="flex justify-center gap-5 flex-wrap items-center h-full "
          >
            <span className="px-5 py-3 relative bg-sky-400 text-white ">
              <input
                name="attach"
                onChange={(e) => setfiles(e.target.files)}
                className="w-full h-full top-0 left-0 opacity-0 absolute cursor-pointer"
                accept=".jpg, .png, .jpeg"
                multiple
                type="file"
              />{" "}
              <i className="fa-solid fa-arrow-up-from-bracket mr-2"></i>
              Upload Files
            </span>

            {files.length > 0 && (
              <button
              disabled={loading ? true : false}
                type="submit"
                className="px-5 py-3 relative bg-green-600 text-white "
              >
                {" "}
               {loading ? "Files Attaching...." : "Attach Files Now"} 
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
