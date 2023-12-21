import { useCallback, useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { authService } from "./index";
import { useForm } from "react-hook-form"
import { login as authLogin } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
const SignIn = ({ SignIn }) => {


    var isSignIn = SignIn;
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()


    console.log(isSignIn);
    const createUser = async (data) => {
        // setLoading(true)
        // setError("")
        var profile = 'user'
        try {
            const userData = await authService.createAccount(data)
            console.log(userData)
            // profile=userData.labels
            if (userData) {
                const userData = await authService.getCurrentUser()

                if (userData) dispatch(authLogin({ userData, profile }));
                setLoading(false)
                navigate("/home")
            }
        } catch (error) {
            // console.log(userData)
            console.log(error.message)
        }
    }

    const login = async (data) => {
        // setError("")
        // setLoading(true);
        data = { ...data, email: `${data.name}@${data.name}.com` }
        console.log(data);
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                console.log(userData);
                const profile = userData.labels
                if (userData) dispatch(authLogin({ userData, profile }));
                // setLoading(false);
                navigate("/home")
            }

        } catch (error) {
            // setError(error.message)

        }

    }
    return (
        <div className="bg-teal-400 w-full flex flex-col h-full justify-center items-stretch">
            <div className="bg-turquoise-50 bg-opacity-30  h-screen box-border py-10  flex w-full flex-col justify-center items-center max-md:max-w-full max-md:px-5">
                <div className={`bg-zinc-100 bg-opacity-50 w-[65%]  ${isSignIn && 'py-8'} flex max-w-full-col justify-center items-center px-20 max-md:max-w-full max-md:my-10 max-md:px-5`}>
                    <div className="flex w-full  max-w-full flex-col max-md:mb-10">
                        <div className={`text-zinc-950 text-center ${isSignIn ? 'mt-8' : 'mt-2'} text-3xl italic font-bold self-center max-md:text-4xl`}>
                            Helpdesk System
                        </div>
                        {!isSignIn && <div className="text-lg text-black text-center mt-2 ">Sign up here</div>}
                        <form onSubmit={handleSubmit(isSignIn ? login : createUser)} >
                            {!isSignIn && <Input className="text-black text-xl whitespace-nowrap border bg-white self-stretch justify-center w-[50%] mt-8 py-3 border-solid border-black items-start max-md:max-w-full  max-md:px-5" name="email" placeholder="Email" type="email" {...register("email", { required: true })} />}
                            <Input className={`text-black text-xl whitespace-nowrap border bg-white self-stretch justify-center ${isSignIn ? 'mt-8' : 'mt-4'} w-20 py-3 border-solid border-black items-start max-md:max-w-full  max-md:px-5`} name="username" placeholder="Username" {...register("name", { required: true })} />
                            <Input className={`text-black text-xl whitespace-nowrap border bg-white  justify-center ${isSignIn ? 'mt-8' : 'mt-4'} py-3 border-solid w-20 border-black items-start max-md:max-w-full  max-md:px-5`} name="password" placeholder="Password" type="password" {...register("password", { required: true })} />


                            <Button
                                type="submit"
                                className={`w-3/5 rounded-3xl flex-col text-white text-xl relative whitespace-nowrap overflow-hidden self-center   max-w-full justify-center items-center ${isSignIn ? 'mt-10' : 'mt-6'} px-8 py-3 max-md:mt-10 max-md:px-5 ${isSignIn ? 'mb-4' : 'mb-1'} ${isSignIn ? 'bg-green-500' : 'bg-blue-600'} `}
                            >{isSignIn ? 'Sign in' : 'Sign Up'}</Button>

                        </form>
                        <div className={`flex w-full  max-w-full  items-center justify-between gap-5 mt-4 mb-4  max-md:flex-wrap max-md:mt-10`}>
                            <button className="text-red-600 text-xl " onClick={() => navigate('/forget-password')}>
                                Forgot password
                            </button>
                            <button onClick={() => { if (isSignIn) { navigate('/signup') } else { navigate('/login') } }} className="text-black text-xl">{!isSignIn ? 'Sign in' : 'Sign Up'}</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default SignIn;
