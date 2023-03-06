export function makeFuncWithDelay(func: (value: number) => boolean, delay: number) {
  setTimeout(func, delay)
}

export function getPaginationLength(galleryLength: number, pageLimit: number) {
  return Math.ceil(galleryLength / pageLimit)
}

export function getFilteredPaginationLenth(galleryDataLength: number, limitElements: number) {
  return Math.floor(galleryDataLength / limitElements);
};

export function urlParamsDTO(param: string) {
  if (param === "Все") {
    return null;
  }
  else if (param === "") {
    return null;
  }

  return param;
}