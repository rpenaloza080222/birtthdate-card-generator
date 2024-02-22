// FormSteps.tsx
import React, { type EventHandler, type FormEvent } from "react";
import type { FormStep } from "../../resources/types/form-step";


interface Props {
  step: number;
  steps: FormStep[];
  token: string
}

const FormSteps: React.FC<Props> = ({ step, steps, token }) => {
  const currentStep = steps[step];

  const handleSubmit = async (event: FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    const data = new FormData(event?.currentTarget);
    const inputName = currentStep.input.name
    const urlParams = new URLSearchParams()
    const response = await fetch("/api/save-form.json", {
      method: "POST",
      body: JSON.stringify({
        token,
        key: inputName,
        value: data.get(currentStep.input.name),
        step
      })
    }).then((data) => data.json());
    console.log(response.newToken)
    urlParams.set("token", response.newToken)
    window.location.href= `/questions?${urlParams.toString()}`
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="gap-8 flex flex-col">
        <h1 className="text-3xl text-balance text-center">
          {currentStep.question}
        </h1>
        <div className="questions flex flex-col gap-3">
          <input
            type="text"
            name={currentStep.input.name}
            className="bg-gray-50 border focus:shadow focus:border-none outline-none  focus:shadow-pink-300 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-4 focus:border-blue-500 block w-full p-2.5"
            placeholder={currentStep.input.placeholder}
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white size-12 justify-center bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                ></path>
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormSteps;
