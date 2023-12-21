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
        <div key={TicketNo}>
            <div className={`${ind % 2 == 0 ? 'bg-stone-300' : 'bg-stone-400'} max-md:overflow-scroll bg-opacity-40 self-stretch flex px-4 items-start justify-evenly py-2.5 max-md:max-w-full  max-md:px-2 max-md:py-0 `}>
                <button className="justify-center  text-blue-700 text-center text-md  underline  my-auto max-md:text-xs" onClick={handleOpen}>
                    {TicketNo}
                </button>
                <div className="justify-center w-1/6 max-md:w-16 flex-col text-black text-opacity-90 text-center max-md:text-xs text-base  ">
                    {Subject}
                </div>
                <div className={`justify-center w-1/6 max-md:w-16 max-md:mt-2 h-min text-black text-center max-md:text-xs  text-md py-0.5  ${Status == 'In Progress' ? 'bg-green-400' : Status == 'On hold' ? 'bg-sky-900 text-white' : 'bg-black text-white'}  items-stretch px-3.5 rounded-xl self-start`}>
                    {Status}
                </div>
                <div className="justify-center w-1/6 text-black text-opacity-90 text-center text-md max-md:text-xs  self-start">
                    {Support}
                </div>
                <div className="justify-center w-1/6 text-black text-opacity-90 text-center text-md max-md:text-xs  self-center my-auto">
                    {Date}
                </div>





                <div className='w-2/7 flex justify-evenly'>
                    <Star key='1' />
                    <Star key='2' />
                    <Star key='3' />
                    <Star key='4' />
                    <Star key='5' />




                </div>



            </div>
        </div>
    )
}

export default UserTicketWidget