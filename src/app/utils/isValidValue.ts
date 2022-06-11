export function isValidValue(value: string): boolean {
  if (value === "") {
    return false;
  };
  
  if (value.length < 8) {
    alert('Please enter at least 8 characters');
    return false;
  };

  if (value.length > 16) {
    alert('Please enter a maximum of 16 characters');
    return false;
  };

  return true;
};