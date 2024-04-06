import type { Color, FormStep } from "../../resources/types/form-step.d";

export const colors: Color[] = [{
  name: "Rosado",
  variants: ["500"],
  value: "pink",
}, {
  name: "Rojo",
  value: "red",
  variants: ["500"],
}, {
  name: "Verde",
  value: "green",
  variants: ["500"],
}, {
  name: "Azul",
  value: "sky",
  variants: ["500"],
}, {
  name: "Fuchsia",
  value: "fuchsia",
  variants: ["500"],
}, {
  name: "Amber",
  value: "amber",
  variants: ["500"],
}, {
  name: "Yellow",
  value: "yellow",
  variants: ["500"],
}];
export const steps: FormStep[] = [
  {
    question: "¿Cuál es el nombre del cumpleañer@?",
    type: "text",
    answer: "",
    input: {
      name: "names",
      placeholder: "Nombre de la persona",
    },
  },
  {
    question: "¿Qué color le gusta?",
    type: "selectable",
    name: "color",
    options: colors.map((color) => ({
      label: color.name,
      background: `bg-${color.value}-${color.variants[0]}`,
      value: `bg-${color.value}-${color.variants[0]}`,
    })),
  },
  {
    question: "¿Tienes una imagen de esa persona?",
    type: "text",
    answer: "",
    input: {
      name: "url",
      placeholder: "Url de la imagen",
    },
  },
  {
    question: "Dejale un mensaje de cariño para ese ser especial",
    type: "textarea",
    name: "message",
    placeholder: "Mensaje",
  },
  {
    question: "Deja un mensaje que salga previo al mensaje de cumpleaños",
    type: "textarea",
    name: "premessage",
    placeholder: "Premensaje de cumpleaños",
  },
  {
    question: "Fecha del cumpleaños",
    type: "date",
    name: "birthday",
    placeholder: "Fecha de cumpleaños",
  },
];
