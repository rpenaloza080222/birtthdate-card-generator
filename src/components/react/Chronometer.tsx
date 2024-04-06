// Chronometer.tsx
import React from 'react';
import useCountdown, { type CountDownResponse } from '../../resources/react/hooks/useCountdown';
import ChronometerTime from '../react/ChronometerTime';
import FireworksConfetti from './FireworksConfetti';

interface Props {
  date: string;
  textColor?: string
}




const Chronometer: React.FC<Props> = (props) => {
  const { date, textColor = "text-pink-500" } = props ?? {}

  const dateResponse = useCountdown(date);

  const arrayCountdown = new Array(4).fill(0).map((_, index) => {
    let key: keyof CountDownResponse = "days"
    let label = ""
    if (index === 0) {
      key = "days";
      label = "días"
    }
    if (index === 1) {
      key = "hours";
      label = "horas"
    }
    if (index === 2) {
      key = "minutes";
      label = "minutos"
    }
    if (index === 3) {
      key = "seconds";
      label = "segundos"
    }
    return {
      key,
      classes: `animate-fade-in-up animate-delay-${(500 + 100 * index)}`,
      time: dateResponse.days,
      label
    }
  })

  if (dateResponse.dataClean.days <= 0 &&
    dateResponse.dataClean.hours <= 0
    && dateResponse.dataClean.minutes <= 0
    && dateResponse.dataClean.seconds <= 0
  ) {
    return <></>
  }
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-5 ">
        <div className="flex gap-3">
          {arrayCountdown.map((item) => <ChronometerTime textColor={textColor} key={item.key} className='animate-fade-in-up animate-delay-500' time={dateResponse[item.key]} label={item.label} />)}
        </div>
      </div>
    </>

  );
};



export default Chronometer;
