export function urlParamsDTO(param: string) {
    if (param === "Все") {
        return null;
    }
    else if (param === "") {
        return null;
    }

    return param;
}