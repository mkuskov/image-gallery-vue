export function getFilteredPaginationLenth(galleryDataLength: number, limitElements: number) {
  return Math.floor(galleryDataLength / limitElements);
};