export type FormStepOptions = {
  label: string;
  value: string;
}

export type SelectableFormStepOptions =FormStepOptions & {
  background: string
}

export type FormStepBase = {
  question: string;
}

export type FormStep = FormStepBase & ({
  answer: string;
  input: {
    name: string
    placeholder: string
  },
  type: "text", 
} | {
  type: "selectable",
  name: string,
  options: SelectableFormStepOptions[]
});
