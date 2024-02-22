import React from 'react';
type ChronometerTimeProps = {
    time: string
    label: string
    className?:string
}
const ChronometerTime: React.FC<ChronometerTimeProps> = ({ time, label, className }) => {
    return <>
        <div className={`flex flex-col gap-3 items-center ${className}`}>
            <span className="p-3 text-game font-bold text-2xl flex justify-center items-center bg-slate-100 shadow-md rounded">
                {time}
            </span>
            <span className='text-xl text-red-700 normal-case'>{label}</span>
        </div>
    </>
}

export default ChronometerTime;