import React from 'react'
import UserTicketData from './UserTicketData'
import Input from '../../Input'
import UserTicketWidget from './UserTicketWidget'
function UserTicket() {
    return (

        <div className="flex w-full flex-col h-full mt-4 mx-auto px-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-center max-md:max-w-full">
                <div className="text-black text-center text-3xl ">
                    List of Ticket
                </div>
                <div className="self-stretch flex flex-col mt-4 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
                    <div className="border relative shadow-md bg-stone-300 flex max-w-full items-center  justify-between  rounded-xl  border-opacity-0 self-start">
                        <Input className="justify-center bg-stone-300 bg-opacity-60  flex w-[300px] max-w-full items-center border-none   rounded-tl-xl rounded-bl-xl self-start .pl text-black placeholder-gray-700 text-xl  my-auto"
                            placeholder='Find ticket'
                        />
                        <div className="flex-col  fill-black fill-opacity-90 overflow-hidden self-stretch relative flex mr-2 aspect-[0.825] w-[30px] justify-center items-center">

                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9f50363f9931c1b968fdb0b09ba580f289b993490461798edf10e2cfd740f8a?"
                                className="aspect-[0.83] object-contain object-center w-full fill-black fill-opacity-90  overflow-hidden"
                            />
                        </div>

                    </div>
                    <div className="flex items-stretch gap-2.5 ml-7 mt-8 self-start max-md:justify-center max-md:ml-2.5">
                        <div className="justify-center text-black text-center text-xl leading-5 tracking-normal self-center my-auto">
                            Show:
                        </div>
                        <select className='bg-stone-400 py-1 px-2 ' name="" id="entries">
                            <option value="10" selected="selected">10</option>
                        </select>
                        <div className="justify-center text-black text-center text-xl leading-5 tracking-normal self-center my-auto">
                            Entries
                        </div>
                    </div>
                    <div className="flex w-full max-w-full  justify-start mt-8  pl-2 max-md:flex-wrap max-md:justify-center">
                        <div className="justify-center w-min  text-black text-center text-xl  whitespace-nowrap self-start">
                            Ticket No.
                        </div>
                        <div className="justify-center w-1/6  text-black text-center text-xl  self-stretch">
                            Subject
                        </div>
                        <div className="justify-center w-1/6  text-black text-center text-xl  self-start">
                            Status
                        </div>
                        <div className="justify-center w-1/6 ml-4  text-black text-center text-xl ">
                            Support by
                        </div>
                        <div className="justify-center w-1/6  text-black text-center text-xl self-start">
                            Date
                        </div>
                        <div className="justify-center w-1/6  text-black text-center text-xl  self-start ">
                            Rate
                        </div>
                    </div>
                    {
                        UserTicketData.map((userticket, ind) => UserTicketWidget(userticket, ind))
                    }


                    <div className="self-stretch flex w-full  items-stretch justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                        <div className="justify-center text-black  text-xl leading-5 shrink basis-auto">
                            Showing 1 to 5 of 5 entries
                        </div>
                        <div className="flex items-stretch gap-0.5 self-start max-md:justify-center">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06caef9fd7cadb13880ca344d23575a8ea723823d9b4d1d7efaa90138ab0982e?"
                                className="aspect-[0.80] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c61266e67fa9d743f4da5b7fc13792f834e26b69a945e9cc0866e9c0c33b0f4?"
                                className="aspect-[0.40] object-contain object-center w-2 fill-black fill-opacity-90 overflow-hidden shrink-0 max-w-full self-start"
                            />
                            <div className="justify-center text-black text-opacity-90 text-center text-2xl leading-5 tracking-normal  self-start">
                                1
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf6af2df3cc65c2b5c4a1f47c7a0b5ccddb7f9f594c77c9e10bbae36a74d2f84?"
                                className="aspect-[0.41] object-contain object-center w-[7px] fill-black fill-opacity-90 overflow-hidden shrink-0 max-w-full self-start"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d108ca8f230688496a39e03335577e82b8cbfb6d31c4283c56646405000fc7?"
                                className="aspect-[0.83] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default UserTicket