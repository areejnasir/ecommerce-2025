"use client";

import { format } from 'date-fns';

const DateFormate = ({ data }: { data: string }) => {
  if (!data) return null;

  const date = new Date(data);
  const formatted = format(date, 'MMMM dd, yyyy hh:mm:ss a');

  return <span>{formatted}</span>;
};

export default DateFormate;
