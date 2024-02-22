// FormSteps.tsx
import React, { useState, type EventHandler, type FormEvent } from "react";
import type { FormStep } from "../../resources/types/form-step";
import "./Form-Step.css"
import BackgroundCircle from "./BackgroundCircle";
import BackgroundCircleNotInset from "./BackgroundCircleNotInset";

interface Props {
  step: number;
  steps: FormStep[];
  token: string
}

const FormSteps: React.FC<Props> = ({ step, steps, token }) => {
  const currentStep = steps[step];
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    const data = new FormData(event?.currentTarget);
    let value = ""
   
    if (currentStep.type === "text") {
      value = currentStep.input.name
     
    }
    if(currentStep.type === "selectable"){
      value = selectedItem
    }

    const name = currentStep.type === "text" ? currentStep.input.name: currentStep.name

    const urlParams = new URLSearchParams()
    const response = await fetch("/api/save-form.json", {
      method: "POST",
      body: JSON.stringify({
        token,
        key: name,
        value,
        step
      })
    }).then((data) => data.json());
    console.log(response.newToken)
    urlParams.set("token", response.newToken)
    window.location.href = `/questions?${urlParams.toString()}`
    
  };

  const setColorByInput = (color: string) => {
    console.log(color)
    setSelectedItem(color);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full p-4">
      <div className="gap-8 flex flex-col">
        <h1 className="text-3xl text-balance text-center">
          {currentStep.question}
        </h1>
        <div className="questions flex flex-col gap-3">
          {currentStep.type === "text" && <input
            type="text"
            name={currentStep.input.name}
            className="bg-gray-50 border focus:shadow focus:border-none outline-none  focus:shadow-pink-300 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-4 focus:border-blue-500 block w-full p-2.5"
            placeholder={currentStep.input.placeholder}
            required
          />}
          {/* Hacer una grid en desktop y mobile un slide */}
          <div className="flex w-full  pb-3 md:px-4 items-center slider overflow-auto gap-2 md:gap-4 md:grid md:overflow-hidden md:grid-cols-3 md:place-content-center">
            {currentStep.type === "selectable" && currentStep.options.map((option) => {
              const currentColor = option.background.replace("bg-", "");
              const otherClasses = ["text-"].map(item => item + currentColor).join(" ");

              return <>
                <label className="w-full min-w-[85%]" onClick={() => setColorByInput(option.value)}>
                  <input type="radio" name={currentStep.name} value={option.value} className="hidden" />
                  <button type="button" key={option.label} className=" group w-full bg-white h-[200px] 
             border-gray-200 rounded-lg relative shadow-sm cursor-pointer shadow-slate-300 overflow-hidden">
                    <BackgroundCircleNotInset className={`${selectedItem === option.value ? `selected`: ""}`} color={option.background} />
                    <div className="p-5">
                      <a href="#">
                        <h5 className={`mb-2 text-2xl font-bold tracking-tight group-hover:mix-blend-hard-light ${otherClasses} `}>{option.label}</h5>
                      </a>
                    </div>
                  </button>
                </label>
              </>

            })}
        </div>


        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white size-12 md:size-16 justify-center bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
          >
            <svg
              className="w-4 h-4 md:size-8"
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
    </form >
  );
};

export default FormSteps;
