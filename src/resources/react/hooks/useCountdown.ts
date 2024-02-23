import { useEffect, useRef, useState } from "react";
import { calcularDiferencia } from "../../utils/date";

export type CountDownResponse = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  dataClean: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
};

const useCountdown = (date: string): CountDownResponse => {
  let id = useRef<NodeJS.Timeout | null>(null);
  const calculateFirstDate = (date: string) => {
    const primaryDate = date.split(" ");
    console.log(primaryDate);
    const dateProps = new Date(
      `${primaryDate[0]} ${
        primaryDate.length > 1 ? primaryDate[1] : "00:00:00"
      }`
    );
    const current = new Date();
    // Restar las fechas
    return calcularDiferencia(current.getTime(), dateProps.getTime());
  };
  const [dateWait, setDateWait] = useState<CountDownResponse>(
    calculateFirstDate(date)
  );

  const calculateDaysAndHour = () => {
    setDateWait(calculateFirstDate(date));
  };

  useEffect(() => {
    //Calculate when the component load to avoid the placeholder 00:00:00
    calculateDaysAndHour();
  }, []);

  useEffect(() => {
    if (!id.current) {
      id.current = setInterval(() => {
        calculateDaysAndHour();
      }, 1000);
    }
  }, [date]);

  useEffect(() => {
    if (dateWait.dataClean.days <= 0 &&
      dateWait.dataClean.hours <= 0
      && dateWait.dataClean.minutes <= 0
      && dateWait.dataClean.seconds <= 0){
        clearInterval(id.current ?? "");
      }
  }, [dateWait])

  return dateWait; // Retorna el objeto con los valores de tiempo restantes. Ejemplo: { days: "00", hours: "00", minutes: "00", seconds: "00" }
};

export default useCountdown;
