export const toggleBodyOverflow = (param: boolean) => {
  if (param) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
};
