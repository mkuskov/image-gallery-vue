export function calculatePaginationLength(galleryLength: number, pageLimit: number) {
    return Math.ceil(galleryLength / pageLimit)
}