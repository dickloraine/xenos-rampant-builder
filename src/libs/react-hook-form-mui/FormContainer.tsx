/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormHTMLAttributes, FunctionComponent, ReactNode } from 'react';
import { FormProvider, UseFormReturn, useForm } from 'react-hook-form';

export type FormContainerProps = {
  defaultValues?: any;
  onSuccess?: (values: any) => void;
  handleSubmit?: (values: any) => void;
  formContext?: UseFormReturn<any>;
  FormProps?: FormHTMLAttributes<HTMLFormElement>;
  children?: ReactNode;
};

const FormContainerCore: FunctionComponent<FormContainerProps> = ({
  defaultValues = {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSuccess = () => {},
  FormProps,
  children,
}) => {
  const methods = useForm<typeof defaultValues>({
    defaultValues,
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSuccess)} noValidate {...FormProps}>
        {children}
      </form>
    </FormProvider>
  );
};
const FormContainer: FunctionComponent<FormContainerProps> = (props) => {
  if (!props.formContext && !props.handleSubmit) {
    return <FormContainerCore {...props} />;
  } else if (props.handleSubmit && props.formContext) {
    return (
      <FormProvider {...props.formContext}>
        <form noValidate {...props.FormProps} onSubmit={props.handleSubmit}>
          {props.children}
        </form>
      </FormProvider>
    );
  }
  if (props.formContext && props.onSuccess) {
    return (
      <FormProvider {...props.formContext}>
        <form
          onSubmit={props.formContext.handleSubmit(props.onSuccess)}
          noValidate
          {...props.FormProps}
        >
          {props.children}
        </form>
      </FormProvider>
    );
  }

  return <div>Incomplete setup of FormContainer..</div>;
};

export default FormContainer;
