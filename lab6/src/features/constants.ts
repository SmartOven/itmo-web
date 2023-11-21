export const localStorageGetBoolean = (name: string) => {
    const value: string = localStorage.getItem(name) ?? "false"
    return value === "true"
}
