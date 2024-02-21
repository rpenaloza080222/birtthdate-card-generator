import { useEffect, useState } from "react";
import { calcularDiferencia } from "../../utils/date";


export type CountDownResponse = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const useCountdown = (date: string): CountDownResponse => {
  const [dateWait, setDateWait] = useState<CountDownResponse>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const calculateDaysAndHour = () => {
    const dateProps = new Date(`${date} 00:00:00`);
    const current = new Date();
    // Restar las fechas
    setDateWait(calcularDiferencia(dateProps.getTime(), current.getTime()));
  
  }

  useEffect(() => {
    //Calculate when the component load to avoid the placeholder 00:00:00
    calculateDaysAndHour();
  }, [])

  useEffect(() => {
    let id = "";
    clearInterval(id);
    setInterval(() => {
        calculateDaysAndHour()
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [date]);

  return dateWait; // Retorna el objeto con los valores de tiempo restantes. Ejemplo: { days: "00", hours: "00", minutes: "00", seconds: "00" }
};

export default useCountdown;
