import { format } from "date-fns";
import { fr } from "date-fns/locale";
import ReactDatePicker from "react-datepicker";
import { Input } from "@chakra-ui/react";

// placeholderText={format(new Date(), "dd/MM/yyyy")}
export const DatePicker = (props: any) => {
  return (
    <ReactDatePicker
      customInput={<Input />}
      dateFormat="dd/MM/yyyy"
      locale={fr}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      selected={props.value}
      {...props}
    />
  );
};
