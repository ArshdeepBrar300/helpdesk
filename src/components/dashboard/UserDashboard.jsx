import React from 'react'
import DashboardWidget from './DashboardWidget'
function UserDashboard() {
    return (


        <div className="flex w-full flex-col mt-9 mx-auto px-5 justify-items-center  ">
            <div className="text-black text-center text-4xl self-center w-full">
                Dashboard
            </div>
            <div className="self-center  w-full mx-8 mt-12 max-md:max-w-full max-md:mt-10">
                <div className=" flex max-md:flex-col  max-md:items-stretch max-md:gap-0">
                    <DashboardWidget title={'Total Tickets'} count={12} bgcolor={'bg-blue-500'} />
                    <DashboardWidget title={'Total Solved'} count={8} bgcolor={'bg-green-400 '} />
                    <DashboardWidget title={'Total Awaiting Approval'} count={2} bgcolor={'bg-red-500'} />
                    <DashboardWidget title={'Total in Progress'} count={2} bgcolor={'bg-yellow-200'} />


                </div>
            </div>

        </div>


    )
}

export default UserDashboard