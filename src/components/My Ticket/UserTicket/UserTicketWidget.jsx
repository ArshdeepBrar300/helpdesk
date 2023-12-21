import React from 'react'
import Star from './Star';
import { useNavigate } from 'react-router-dom';

function UserTicketWidget({ TicketNo, Subject, Status, Support, Date, Rate }, ind) {

    const [openDialog, setOpenDialog] = React.useState(false);
    // navigate(`/view-ticket/${TicketNo}`
    const handleOpen = () => setOpenDialog(!openDialog);
    const navigate = useNavigate();
    console.log(ind);
    return (
        <div>
            <div className={`${ind % 2 == 0 ? 'bg-stone-300' : 'bg-stone-400'} bg-opacity-40 self-stretch flex px-4 items-start justify-evenly py-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5`}>
                <button className="justify-center  text-blue-700 text-center text-md  underline  my-auto" onClick={handleOpen}>
                    {TicketNo}
                </button>
                <div className="justify-center w-1/6 flex-col text-black text-opacity-90 text-center text-md  ">
                    {Subject}
                </div>
                <div className={`justify-center w-1/6 h-min text-black text-center text-md py-0.5  ${Status == 'In Progress' ? 'bg-green-400' : Status == 'On hold' ? 'bg-sky-900 text-white' : 'bg-black text-white'}  items-stretch px-3.5 rounded-xl self-start`}>
                    {Status}
                </div>
                <div className="justify-center w-1/6 text-black text-opacity-90 text-center text-md  self-start">
                    {Support}
                </div>
                <div className="justify-center w-1/6 text-black text-opacity-90 text-center text-md  self-center my-auto">
                    {Date}
                </div>





                <div className='w-2/7 flex justify-evenly'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />




                </div>



            </div></div>
    )
}

export default UserTicketWidget