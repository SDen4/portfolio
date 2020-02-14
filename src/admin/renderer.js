const renderer = file => {
    const reader = new FileReader();

    return new Promise( (resolve) => {
        try {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                resolve(reader.result);
            }
        } catch (error) {
            throw new Error("Ошибка при чтении файла")
        }
    })
}
export default renderer;