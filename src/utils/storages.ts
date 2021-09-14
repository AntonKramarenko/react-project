
export const setToLocalStorage = async (key: string, data: any) => {
    window.localStorage.setItem(key, data)
}