import * as yup from 'yup';

const validName = yup
  .string()
  .min(1)
  .required()
  .test(
    'isUnique',
    'The name must be unique!',
    (v, ctx) => ctx.options.context?.validateName(v)
  );

export default validName;
