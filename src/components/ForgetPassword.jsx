import { useCallback, useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
const ForgetPassword = () => {
    console.log('okok');

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const formSubmit = (data) => {


    }
    return (
        <div className="bg-teal-400 w-full flex flex-col h-full max-md:h-screen justify-center items-stretch">
            <div className="  h-full py-3  flex w-full flex-col justify-center items-center max-md:max-w-full max-md:px-5">
                <div className={`bg-zinc-100 bg-opacity-50 w-[65%]  my-20 h-full  py-8 flex max-w-full-col justify-center items-center px-36  max-md:max-w-full max-md:my-10 max-md:px-5`}>
                    <div className="flex  max-w-full flex-col mt-10  max-md:mb-10">

                        <div className="text-2xl text-black text-center max-md:text-lg  ">Dont't worry, Enter your email below and we will send you a link to change password.</div>
                        <form onSubmit={handleSubmit(formSubmit)} >

                            <Input className="text-black text-xl whitespace-nowrap border bg-white self-stretch justify-center max-md:text-md  mt-8 py-3 border-solid border-black max-md:max-w-full  max-md:px-5" name="email" placeholder="Email" />





                        </form>
                        <div className="flex-col w-full max-w-full items-center justify-between gap-5   self-start max-md:flex-col max-md:mt-10">

                            <Button
                                type="submit"
                                className='w-3/5 rounded-3xl flex-col text-white text-xl relative whitespace-nowrap overflow-hidden self-center  max-md:text-md max-w-full justify-center items-center mt-10 px-8 py-3 max-md:mt-2 max-md:px-5 mb-4 bg-green-500'
                            > Submit</Button>
                            <Button
                                type="submit"
                                className='w-3/5 rounded-3xl flex-col text-white text-xl relative whitespace-nowrap overflow-hidden self-center   max-w-full justify-center items-center px-8 py-3 max-md:mt-2 max-md:px-5 bg-blue-500' onClick={(() => { navigate('/login') })}

                            > Sign In</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default ForgetPassword;
