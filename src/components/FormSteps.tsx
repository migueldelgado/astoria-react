import React, { ReactElement, useState } from 'react';

type IFormStepsProps = {
  children: ReactElement[];
  defaultValues: {};
  submit: (x: any) => void;
}

const FormSteps: React.FC<IFormStepsProps> = ({ children, defaultValues, submit }) => {

  const [stepIndex, setStepIndex] = useState<number>(0);
  const [formFields, setFormFields] = useState<any>(defaultValues);

  const onClickNext = () => {
    setStepIndex(oldValue => oldValue + 1);
  }

  const onChange = (newValue: string, key: string) => {
    setFormFields({
      ...formFields,
      [key]: newValue
    });
  }

  const onClickBack = (params: any) => {
    setFormFields({
      ...formFields,
      ...params
    });
    setStepIndex(stepIndex - 1);
  }

  const childrenArray = React.Children.map(children, (child: ReactElement) => {
    return React.cloneElement(child, {
      onClickNext,
      onClickBack,
      onChange,
      formFields
    });
  });

  // const submitForm = () => {
  //   console.log(formFields);
  //   console.log(stepIndex);
  // }

  return (
    <form>
      {childrenArray[stepIndex]}

      {
        stepIndex !== 0 &&
        <button type="button" onClick={onClickBack}>
          Back
        </button>
      }
      {
        stepIndex !== childrenArray.length - 1 &&
        <button type="button" onClick={onClickNext}>
          Next
        </button>
      }
      {
        stepIndex === childrenArray.length - 1 &&
        <button type="button" onClick={() => submit(formFields)}>
          Submit
        </button>
      }
    </form>
  )
}

export default FormSteps;