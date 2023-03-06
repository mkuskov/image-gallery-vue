// setTiemout
export function makeFuncWithDelay(func: (value: number) => boolean, delay: number) {
  setTimeout(func, delay)
}

// Высчитать длину пагинации (кол-во страниц)
export function getPaginationLength(galleryLength: number, pageLimit: number) {
  return Math.ceil(galleryLength / pageLimit)
}

// Высчитать длину офильтрованной пагинации (кол-во страниц)
export function getFilteredPaginationLenth(galleryDataLength: number, limitElements: number) {
  return Math.floor(galleryDataLength / limitElements);
};

// Очистка фильтров при выборе "Все" или вводе пустой строки
export function urlParamsDTO(param: string) {
  if (param === "Все") {
    return null;
  }
  else if (param === "") {
    return null;
  }

  return param;
}