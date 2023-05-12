/* eslint-disable @typescript-eslint/no-explicit-any */
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MuiPickersUtilsProviderProps } from '@material-ui/pickers/MuiPickersUtilsProvider';
import { FC } from 'react';

class LocalizedUtils extends DateFnsUtils {
  dateFormat = 'P';
}

export type DateFnsProviderProps = FC<
  Omit<MuiPickersUtilsProviderProps, 'utils'> & {
    utils?: any;
  }
>;

const DateFnsProvider: DateFnsProviderProps = ({ children, utils, ...props }) => {
  return (
    <MuiPickersUtilsProvider {...props} utils={utils || LocalizedUtils}>
      {children}
    </MuiPickersUtilsProvider>
  );
};
export default DateFnsProvider;
