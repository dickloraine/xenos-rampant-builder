import * as yup from 'yup';

export const dynamicSchemaObject = (
  schema: yup.ObjectSchema<object, yup.AnyObject, object, ''>
) => yup.lazy((obj) => yup.object(mapValues(obj, schema)));

const mapValues = (
  map: yup.AnyObject,
  rule: yup.ObjectSchema<object, yup.AnyObject, object, ''>
) => Object.keys(map).reduce((newMap, key) => ({ ...newMap, [key]: rule }), {});
