import React from 'react'
import { UserDashboard } from '../index'
import DashboardWidget from './DashboardWidget'
import OperationSupport from '../../assets/dashboard/operation.png'

import TechnicalSupport from '../../assets/dashboard/technical.png'
function OperationDashboard() {

    console.log('operation');
    return (


        <div className='px-20 m-0 h-full flex flex-col justify-center items-center'>

            <div className="flex w-full flex-col mt-4 mx-auto px-5 justify-items-center  ">
                <div className="text-black text-center text-3xl self-center w-full">
                    Dashboard
                </div>
                <div className="self-center  w-full mx-8  max-md:max-w-full max-md:mt-10">
                    <div className=" flex max-md:flex-col justify-center mt-8 max-md:items-stretch max-md:gap-0">
                        <DashboardWidget title={'Total Tickets'} count={12} bgcolor={'bg-blue-500'} />
                        <DashboardWidget title={'Total Solved'} count={8} bgcolor={'bg-green-400 '} />
                        <DashboardWidget title={'Total Awaiting Approval'} count={2} bgcolor={'bg-red-500'} />
                        <DashboardWidget title={'Total in Progress'} count={2} bgcolor={'bg-yellow-200'} />


                    </div>
                </div>

            </div>

            <div className="mt-8 max-md:max-w-full h-2/3 justify-between w-full ">
                <div className="gap-6 flex max-md:flex-col justify-center h-full max-md:items-stretch max-md:gap-0">
                    <div className=" items-stretch w-2/5 max-md:w-full mb-4  max-md:ml-0">
                        <div className="bg-teal-300 flex  flex-col justify-center items-center h-full  box-border max-md:max-w-full max-md:mt-10 max-md:px-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ded9325435881929ee0bec62f57bc8f3a18a016e2ba07e02f5cbc475da6f4d9?"
                                className="aspect-[1.06] object-contain object-center  w-3/5 overflow-hidden max-w-full px-6 "
                            />
                        </div>
                    </div>
                    <div className="flex flex-col h-48 max-md:flex-col items-stretch w-6/12  max-md:w-full max-md:ml-0">
                        <div className="flex  flex-col h-full max-md:max-w-full max-md:mt-10">
                            <div className="bg-teal-300 h-full flex items-stretch justify-evenly gap-5  pt-6 pb-1 max-md:max-w-full  max-md:pl-5">
                                <div className="flex flex-col items-stretch">
                                    <img
                                        src={TechnicalSupport}
                                        className="w-14 object-contain object-center  overflow-hidden self-center"
                                    />
                                    <div className="text-sky-900 text-center text-2xl self-center ">
                                        3
                                    </div>
                                    <div className="text-black text-center text-xl ">
                                        Technical Supports
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch ">
                                    <img
                                        src={OperationSupport}
                                        className=" w-16 object-contain object-center  overflow-hidden self-center"
                                    />
                                    <div className="text-sky-900 text-center text-2xl self-center">
                                        4
                                    </div>
                                    <div className="text-black text-center text-xl">
                                        Operation Team
                                    </div>
                                </div>
                            </div>
                            <div className="bg-teal-300 flex flex-col justify-center items-center mt-3 px-16 py-4 h-2/5 rounded-3xl max-md:max-w-full max-md:px-5">
                                <div className="flex  max-w-full flex-col items-stretch">
                                    <div className="text-black text-center text-xl whitespace-nowrap">
                                        Customer Feedback
                                    </div>
                                    <div className="self-center  flex h-8 max-w-full items-start gap-1.5 mt-1 max-md:justify-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73f0d3a388dd26032e292577394066f4b756da1c4cf8eacadf169ac06f60f9b1?"
                                            className=" object-contain object-center h-8 fill-lime-50 overflow-hidden shrink-0 flex-1"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/844b0c75d1cdf02e2b863dcf868191dc30fa4e6e6c7040c1090a8a5734b3bbb0?"
                                            className=" object-contain object-center  h-8 w-full fill-lime-50 overflow-hidden shrink-0 flex-1"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d41ef83e1d1482415f21def3a6a2dd23f2c0d018bb59e18ef15f099442b8dca3?"
                                            className=" object-contain object-center  h-8 w-full fill-lime-50 overflow-hidden shrink-0 flex-1"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73f0d3a388dd26032e292577394066f4b756da1c4cf8eacadf169ac06f60f9b1?"
                                            className=" object-contain object-center  h-8 w-full fill-lime-50 overflow-hidden shrink-0 flex-1"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7645e67d102604c53f105217fc053705405503c38246bf7a850d958c422ebe76?"
                                            className=" object-contain object-center  h-8 w-full fill-lime-50 overflow-hidden shrink-0 flex-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OperationDashboard