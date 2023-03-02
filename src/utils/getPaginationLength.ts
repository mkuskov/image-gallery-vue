export function getPaginationLength(galleryLength: number, pageLimit: number) {
  return Math.ceil(galleryLength / pageLimit)
}