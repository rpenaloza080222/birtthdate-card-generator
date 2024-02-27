export type Color ={
  name: string
  variants: string[]
  value: string
}

export type BirthdayData = {
  birthday: string;
  color: {
    bgColor: string
    textColor: string
    viaColor: string
  }
  names: string
  message: string
  step: number
}

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
}
| {
  type: "textarea",
  name: string,
  placeholder: string
} | {
  type: "date",
  name: string,
  placeholder: string
}
);
