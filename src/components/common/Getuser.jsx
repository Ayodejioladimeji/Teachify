export const Getuser = () => {
  const result = localStorage.getItem('firstLogin' || null);
  return result;
};
