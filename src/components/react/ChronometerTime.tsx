import React from 'react';
type ChronometerTimeProps = {
    time: string
    label: string
    className?: string
    textColor?: string
}
const ChronometerTime: React.FC<ChronometerTimeProps> = ({ time, label, className, textColor = "text-pink-600" }) => {
    return <>
        <div className={`flex flex-col gap-3 items-center ${className}`}>
            <span className="p-2 md:p-3  text-game font-bold  text-sm md:text-2xl flex justify-center items-center bg-slate-100 shadow-md rounded">
                {time}
            </span>
            <span className={`text-sm md:text-xl ${`${textColor}`} normal-case`}>{label}</span>
        </div>
    </>
}

export default ChronometerTime;