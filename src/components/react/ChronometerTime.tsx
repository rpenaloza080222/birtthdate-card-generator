import React from 'react';
type ChronometerTimeProps = {
    time: string
    label: string
    className?:string
    textColor?: string
}
const ChronometerTime: React.FC<ChronometerTimeProps> = ({ time, label, className, textColor="text-pink-600" }) => {
    console.log(textColor);
    return <>
        <div className={`flex flex-col gap-3 items-center ${className}`}>
            <span className="p-3 text-game font-bold text-2xl flex justify-center items-center bg-slate-100 shadow-md rounded">
                {time}
            </span>
            <span className={`text-xl ${`${textColor}`} normal-case`}>{label}</span>
        </div>
    </>
}

export default ChronometerTime;