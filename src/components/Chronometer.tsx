// Chronometer.tsx
import React, { useEffect, useState } from 'react';

interface Props {
  date: string;
}

type ChronometerTimeProps = {
  time: string
  label: string
}

const ChronometerTime: React.FC<ChronometerTimeProps> = ({ time, label }) => {
  return <>
    <div className='flex flex-col gap-3 items-center'>
      <span className="p-3 text-game font-bold text-2xl flex justify-center items-center bg-slate-100 shadow-md rounded">
        {time}
      </span>
      <span className='text-xl text-pink-500 normal-case'>{label}</span>
    </div>



  </>
}

function calcularDiferencia(fecha1: number, fecha2: number) {
  // Restar las fechas (la diferencia será en milisegundos)
  const diferenciaEnMilisegundos = fecha2 - fecha1;

  // Calcular días, horas, minutos y segundos
  const segundosTotales = Math.floor(diferenciaEnMilisegundos / 1000);
  const dias = Math.floor(segundosTotales / (24 * 60 * 60));
  const horas = Math.floor((segundosTotales % (24 * 60 * 60)) / (60 * 60));
  const minutos = Math.floor((segundosTotales % (60 * 60)) / 60);
  const segundos = segundosTotales % 60;

  // Formatear el resultado
  const resultadoFormateado =
    padLeft(Math.abs(dias)) + ":" +
    padLeft(Math.abs(horas)) + ":" +
    padLeft(Math.abs(minutos)) + ":" +
    padLeft(Math.abs(segundos));

  const result = {
    days: padLeft(Math.abs(dias)),
    hours: padLeft(Math.abs(horas)),
    minutes: padLeft(Math.abs(minutos)),
    seconds: padLeft(Math.abs(segundos)),
    total: resultadoFormateado,
  }

  return result;
}

function padLeft(valor: number) {
  return valor.toString().padStart(2, '0');
}

const Chronometer: React.FC<Props> = ({ date }) => {
  const [dateWait, setDateWait] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    let id = ""
    clearInterval(id);
    setInterval(() => {
      const dateProps = new Date(`${date} 00:00:00`);
      const current = new Date()
      // Restar las fechas 
      setDateWait(calcularDiferencia(dateProps.getTime(), current.getTime()))
    }, 1000);
    return () => {
      clearInterval(id)
    }
  }, [date])
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <div className="flex gap-3">
        <ChronometerTime time={dateWait.days} label='días' />
        <ChronometerTime time={dateWait.hours} label='horas' />
        <ChronometerTime time={dateWait.minutes} label="minutos" />
        <ChronometerTime time={dateWait.seconds} label='segundos' />
      </div>
    </div>
  );
};



export default Chronometer;
