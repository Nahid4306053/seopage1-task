/* eslint-disable react/jsx-no-target-blank */


import './App.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Track from './components/Track'
import { Toaster } from 'react-hot-toast'

function App() {
  const {data:tasks,isError,isLoading} = useQuery({
    queryKey : ['tasks'],
    queryFn : ()=>{
      const res = axios.get(`${import.meta.env.VITE_API_URL_V1}/task/all`);
      return res;
    }
    
  })
  const status = ['incomplete', 'to-do', 'doing', 'under review', 'completed']
  return (
    isLoading ? <p className='text center'>Please Wait Data is Loading....</p>
    :isError ? <p className='text center'>There is server side Problem occured</p>
    : 
    <div className='flex gap-5 h-screen p-10 overflow-y-hidden w-full '>
      <div><Toaster/></div>
     {status.map((ele,ind)=>{
       return <Track key={ind} data={tasks.data} status={ele}></Track>
     })}
    </div>
  )
}

export default App
