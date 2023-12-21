import React from 'react'
import { useSelector } from 'react-redux'
function DashboardWidget({ title, count, bgcolor }) {
    const profile = useSelector((state) => state.auth.profile)
    return (
        <div className={`flex flex-col items-stretch w-3/12   ml-5 max-md:w-full max-md:ml-0`}>
            <div className={`bg-neutral-400 flex ${profile == 'user' && 'grow '} flex-col items-stretch w-full pr-1.5 pb-2 rounded-3xl max-md:mt-7`}>
                <div className={`${bgcolor} ${profile == 'user' ? 'h-52' : 'h-40'} z-[1] flex mt-0 flex-col justify-between items-stretch px-auto pt-2 rounded-3xl
               max-md:px-15`}>

                    <div className={`text-black text-center ${profile == 'user' ? 'mt-4 text-2xl' : 'mt-2 text-xl px-4 '}  `}>
                        {title}
                    </div>
                    <div className={`text-sky-900 text-center ${profile == 'user' ? 'text-6xl mt-8' : 'text-5xl mt-4'}  mb-6 max-md:text-4xl max-md:mt-10`}>
                        {count}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardWidget