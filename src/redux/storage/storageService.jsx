export const getItemFromStorage = (key, defaultValue = []) => {
try {
    const storedItems = localStorage.getItem(key)
    return storedItems ? JSON.parse(storedItems) : defaultValue
} catch (error) {
    console.error('Parse Error', error)
    return defaultValue
}
}

export const setItemToStorage = (key, items) => {
    try{
        localStorage.setItem(key, JSON.stringify(items))
    } catch (error) {
        console.error('Save Error', error)
    }
}