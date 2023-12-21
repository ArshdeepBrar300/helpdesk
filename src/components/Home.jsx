import { React, useEffect, useState } from 'react'

import { Dashboard } from './index'
import { Arrow, LogoutImg, MyTicketImg, NewTicketImg, DashboardImg, TicketApprovalImg } from './assets'
import { NewTicket, UserTicket } from './index'
import { logout } from '../store/authSlice'
import authService from '../appwrite/auth'
import { useSelector, useDispatch } from 'react-redux'

function Home() {

    const dispatch = useDispatch();
    const [menuIndex, setMenuIndex] = useState(0)
    const profile = useSelector((state) => state.auth.profile)
    console.log(profile);
    const onMenuItemSelect = (ind) => {
        setMenuIndex(ind)
    }
    const logouthandle = async () => {
        await authService.logout()
        dispatch(logout())
    }

    return (

        <div className="bg-white  flex flex-col items-stretch w-full ">
            <div className="bg-teal-300 flex w-auto flex-col pl-6 pr-8 py-2 items-start max-md:max-w-auto max-md:px-5">

                <div className="self-stretch flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-neutral-100 text-3xl italic font-bold  max-md:text-4xl">
                        Helpdesk
                    </div>
                    <div className="flex items-stretch gap-4 mt-1 self-start">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b533c264003f4e93c7caff6d2e2186af919b7d2ec8cab15c58de2a9f9efb5321?"
                            className="aspect-[5.41] object-contain object-center w-[157px] overflow-hidden shrink-0 max-w-full"
                        />
                        <button type='subhmit' onClick={logouthandle}> <img src={LogoutImg} /></button>


                    </div>
                </div>
            </div>
            <div className=" w-full max-md:max-w-full h-screen">
                <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-5">
                    <div className="flex flex-col  max-md:w-full h-screen max-md:h-full max-md:ml-0">
                        <div className="bg-stone-500 bg-opacity-30 flex w-48 grow  flex-col pt-2.5  max-md:pr-5 max-md:w-full  max-md:h-full">

                            <div className="self-center flex items-center justify-between  mt-5 max-md:justify-center ">
                                {menuIndex == 0 && <img
                                    loading="lazy"
                                    src={Arrow}
                                    className=" w-[8px] fill-black overflow-hidden shrink-0  ml-4"
                                />}
                                <button className='flex' onClick={() => onMenuItemSelect(0)}>
                                    <img
                                        loading="lazy"
                                        src={DashboardImg}
                                        className="aspect-[1.34] object-contain object-center w-[39px] overflow-hidden self-stretch shrink-0 max-w-full ml-2"
                                    />
                                    <div className="text-black text-xl grow whitespace-nowrap self-start">
                                        Dashboard
                                    </div>
                                </button>

                            </div>
                            <div className="flex self-center ml-4  items-center justify-between gap-1.5 mt-4 max-md:justify-center mr-2">
                                {menuIndex == 1 && <img
                                    loading="lazy"
                                    src={Arrow}
                                    className="aspect-[0.65] object-contain object-center w-[8px] fill-black overflow-hidden shrink-0 max-w-full my-auto"
                                />}
                                {profile == 'user' ?
                                    <button className='flex' onClick={() => onMenuItemSelect(1)}>
                                        <img
                                            loading="lazy"
                                            src={NewTicketImg}
                                            className="aspect-[1.34] object-contain object-center w-[39px] overflow-hidden self-stretch shrink-0 max-w-full"
                                        />
                                        <div className="text-black text-xl grow whitespace-nowrap self-start">
                                            New Ticket
                                        </div>
                                    </button> :
                                    profile == 'operation' ?
                                        <button className='flex items-center justify-center w-4/5 ml-6' onClick={() => onMenuItemSelect(1)}>
                                            <img
                                                loading="lazy"
                                                src={TicketApprovalImg}
                                                className="aspect-[1.34] object-contain object-center w-[26px] overflow-hidden self-stretch shrink-0 max-w-full"
                                            />
                                            <div className="text-black text-xl  self-start">
                                                Ticket Approval
                                            </div>
                                        </button>
                                        : null
                                }
                            </div>
                            <div className="flex self-center ml-4  items-center justify-between gap-1.5 mt-4 max-md:justify-center mr-2">
                                {menuIndex == 2 && <img
                                    loading="lazy"
                                    src={Arrow}
                                    className="aspect-[0.65] object-contain object-center w-[8px] fill-black overflow-hidden shrink-0 max-w-full my-auto"
                                />}
                                <button className='flex' onClick={() => onMenuItemSelect(2)}>
                                    <img
                                        loading="lazy"
                                        srcSet={MyTicketImg}
                                        className="aspect-[1.14] object-contain object-center w-[30px] overflow-hidden self-stretch shrink-0 max-w-full"
                                    />
                                    <div className="text-black text-xl ml-2 grow whitespace-nowrap self-start">
                                        My Ticket
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col w-full justify-end '>
                        {menuIndex == 0 ?
                            <Dashboard />
                            :
                            (menuIndex == 1 ? (profile == 'user') ? < NewTicket /> : null : menuIndex == 2 ? <UserTicket /> : null)
                        }
                        <div className="bg-teal-300 h-11 max-md:max-w-full max-md:flex-wrap max-md:px-5">


                        </div>

                    </div>
                </div>
            </div>
        </div >


    )
}

export default Home