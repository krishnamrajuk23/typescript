let value: Date | null | undefined | number | string | number[] | { dateRange: [Date, Date] };

if (value instanceof Date) {
  value;
} else if (value === null) {
  
}
else if (typeof value === 'number') {
  
} else if (typeof value === 'string') {
  
} 
else if (value === undefined) {
  
}
// to  check this condition we need to check all the condition
// like above then only this successfully executes
else if ("dateRange" in value) {
  
}