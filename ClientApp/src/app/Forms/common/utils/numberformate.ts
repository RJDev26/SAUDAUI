import { format } from "date-fns";

export const formatAmount = (amount: number): string => {
    return amount.toFixed(2);
  }

  export const formatDate = (params) => {
    if (!params.value) {
      return;
    }
    const date = new Date(params.value);
    return format(date, "dd-MM-yyyy");
  }

  export const formatCurrency = (params) => {
    if(params.value === 0){
      return '';
    }
    const value = Math.abs(params.value); // Get the absolute value
    const formattedValue = value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return params.value < 0 ? `${formattedValue}` : formattedValue;
  }