import React from 'react'

function Star() {
    return (
        <div className="flex-col fill-black fill-opacity-20 stroke-[1px] stroke-black stroke-opacity-0 mix-blend-darken overflow-hidden self-center relative flex aspect-[0.8461538461538461] w-[22px] justify-center items-center my-auto">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd9b442926050357811b1847e18052ea054610da6a9544e78ac24ac6222c6f55?"
                className="absolute h-full w-full object-cover object-center inset-0"
            />
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b539ecfe8bc13d64a7538ae8ccf597cc73f0397fe0b58e97f114556f4d240ae?"
                className="aspect-[0.85] object-contain object-center w-full fill-black fill-opacity-20 stroke-[1px] stroke-black stroke-opacity-0 mix-blend-darken overflow-hidden"
            />

        </div>
    )
}

export default Star