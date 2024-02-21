export function calcularDiferencia(fecha1: number, fecha2: number) {
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
    padLeft(Math.abs(dias)) +
    ":" +
    padLeft(Math.abs(horas)) +
    ":" +
    padLeft(Math.abs(minutos)) +
    ":" +
    padLeft(Math.abs(segundos));

  const result = {
    days: padLeft(Math.abs(dias)),
    hours: padLeft(Math.abs(horas)),
    minutes: padLeft(Math.abs(minutos)),
    seconds: padLeft(Math.abs(segundos)),
    total: resultadoFormateado,
  };

  return result;
}

export function padLeft(valor: number) {
  return valor.toString().padStart(2, "0");
}
