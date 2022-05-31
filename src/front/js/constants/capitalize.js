export const capitalize = (palabra) => {
  if (typeof palabra !== "string") {
    return "";
  } else {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  }
};
