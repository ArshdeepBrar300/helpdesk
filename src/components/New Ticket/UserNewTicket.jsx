import React from 'react'
import { Button } from '../index'
import Input from '../Input';
import Captcha from '../../assets/newTicket/captcha.png'
function UserNewTicket() {
    console.log('userticket');
    return (
        <div>
            <div className="flex w-full flex-col mt-1 mx-auto px-5 justify-items-center max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch mt-2 max-md:max-w-full">
                    <div className="flex flex-col px-20 max-md:max-w-full max-md:px-5">
                        <div className="text-black text-center text-3xl self-center">
                            Create New Ticket
                        </div>
                        <div className="self-stretch mt-6 max-md:max-w-full max-md:mr-2 max-md:mt-10">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch   w-[50%] max-md:w-full max-md:ml-0">

                                    <div className="flex items-center justify-between  max-md:flex-wrap max-md:px-20">
                                        <div className="text-black text-lg whitespace-nowrap  my-auto">
                                            Ticket No.
                                        </div>
                                        <div>
                                            <Input className="border shadow-sm bg-stone-300 bg-opacity-60 flex shrink-0 w-60 flex-col h-9 rounded-xl border-solid border-black border-opacity-0 max-md:w-30" />
                                        </div>

                                    </div>

                                    <div className="flex justify-between  mt-2 items-start  max-md:flex-wrap  max-md:px-20">
                                        <div className="text-black text-lg mt-1 whitespace-nowrap">Name: </div>
                                        <div>
                                            <Input className="border shadow-sm bg-stone-300 bg-opacity-60  flex shrink-0  w-60 justify-end  h-9 rounded-xl border-solid border-black border-opacity-0 max-md:w-30" />
                                        </div>

                                    </div>

                                </div>
                                <div className="flex flex-col items-stretch ml-8 w-[50%] max-md:w-full max-md:ml-0 max-md:mt-8">


                                    <div className="flex items-center justify-between  max-md:flex-wrap  max-md:px-20">
                                        <div className="text-black text-lg whitespace-nowrap   my-auto">
                                            Date
                                        </div>
                                        <div>
                                            <Input className="border  h-9  shadow-sm bg-stone-300 bg-opacity-60  flex shrink-0 w-56  flex-col 
                                            max-md:w-30 rounded-xl border-solid border-black border-opacity-0" />
                                        </div>

                                    </div>

                                    <div className="flex justify-between  mt-2 items-start  max-md:flex-wrap  max-md:px-20">
                                        <div className="text-black text-lg mt-1 whitespace-nowrap">Department: </div>
                                        <div>
                                            <Input className="border  h-9 shadow-sm bg-stone-300 bg-opacity-60  flex shrink-0  w-56  flex-col rounded-xl border-solid border-black max-md:w-30 border-opacity-0" />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className=" text-black text-lg flex flex-col mt-2 ">
                            <div className='flex'>
                                Subject :
                            </div>


                            <div className="mt-1 ">
                                <Input className="border  h-9 shadow-sm bg-stone-300 bg-opacity-60 rounded-xl  border-opacity-0 max-md:w-30 " />
                            </div>
                        </div>



                        <div className="self-center w-full max-w-full mt-2 max-md:max-w-full">
                            <div className="gap-5  flex flex-row max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col w-[50%] max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col items-stretch justify-around max-md:mt-6 max-md:w-30">
                                        <div className="text-black flex text-lg">Category:</div>
                                        <Input className="border  h-9  shadow-sm bg-stone-300 bg-opacity-60 rounded-xl border-opacity-0  " />
                                        <div className="text-black text-lg flex mt-1">Type:</div>
                                        <Input className="border  h-9  shadow-sm bg-stone-300 bg-opacity-60 rounded-xl   border-opacity-0  " />
                                        <div className="text-black flex text-lg mt-1">
                                            Priority:
                                        </div>
                                        <Input className="border  h-9 shadow-sm bg-stone-300 bg-opacity-60 rounded-xl   border-opacity-0  " />
                                    </div>
                                </div>
                                <div className="flex flex-col h-full w-[50%] max-md:w-full max-md:ml-0">
                                    <div className='flex text-lg'>
                                        Description:

                                    </div>
                                    <div className='flex-col flex '>
                                        <Input className="border  shadow-sm pb-32 bg-stone-300 relative bg-opacity-60 rounded-xl mt-2 border-opacity-0  " />
                                        <div className=' flex items-end justify-end'>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba289fd9a9a1406c5b35aed1c05ada25da374fb3002993fd321b26bb7a0148f8?"
                                                className="absolute w-10 object-contain object-center mt-28 mr-2 mb-2 overflow-hidden max-md:mt-10"
                                            />
                                        </div>


                                    </div>



                                </div>
                            </div>





                        </div>
                        <div className="self-center w-full max-w-full max-md:max-w-full">
                            <div className=" flex justify-between mb-8 max-md:flex-col max-md:items-stretch max-md:gap-0 max-md:">
                                <div className=" h-4 w-1/3 mt-4 object-contain max-md:w-full max-md:ml-0">
                                    <img
                                        src={Captcha}

                                        className=" object-contain object-center  overflow-hidden  w-full max-md:max-w-full max-md:mt-1"
                                    />
                                </div>
                                <div className="flex flex-col justify-end ml-5 mt-8  w-1/5 max-md:w-full max-md:ml-0 ">
                                    <Button type='submit' className="text-black text-center  text-2xl whitespace-nowrap bg-teal-300 items-center   px-6 rounded-xl max-md:mt-16 max-md:px-5">Submit</Button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserNewTicket