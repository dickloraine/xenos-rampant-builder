# Material-UI and react-hook-form combined
## About this project

This project simplifies the use of `react-hook-form` and `Material-UI`. It provides opinionated use cases with following
components:

* FormContainer
* TextFieldElement
* SelectElement
* MultiSelectElement
* RadioButtonGroup
* CheckboxButtonGroup
* CheckboxElement
* PasswordElement
* DatePickerElement

The components are written in TypeScript and attempt an easy integration.

## How to use it

### Installation
```
   $npm install react-hook-form react-hook-form-mui
```
The dependency of `react-hook-form` is a peerDependency so don't forget to install it as well.

### Your component code

```
import {FormContainer, TextFieldElement} from 'react-hook-form-mui'

function Form(){
  return (
    <FormContainer 
      defaultValues={{name: ''}}
      onSuccess={(data) => {console.log(data)}}
    >
      <TextFieldElement name="name" label="Name" required/>
    </FormContainer>
  )
}
```

You can have a look at the `example` folder which sets up NextJS with `react-hook-form-mui`

### FormContainer creates `formContext`

The `<FormContainer />` wires up a form and you can create sub-components which either make use of `useFormContext() | useWatch()` to react to form values. 

## Demo

Check out Storybook: [Demo](https://react-hook-form-material-ui.vercel.app)

You will find examples and use cases.

### With Datepicker

If you are using the `DatepickerElement` keep in mind that you have to wrap your form with a provider:

Examples for Dayjs or DateFns provider (used in the demo):
* [DateFns](/src/DateFnsProvider.tsx)
* [Dayjs](/src/DateFnsProvider.tsx)

### Bundle

This project uses `microbundle` to wrap the package for `npm`. 

### License

[MIT](./LICENSE)

### Changelog
* 2.1.x Introduce prop `row` to CheckboxButtonGroup and RadioButtonGroup
* 2.x Rename package to react-hook-form-mui
* 1.x Deprecated
