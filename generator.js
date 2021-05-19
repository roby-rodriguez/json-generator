function generete(size = 300, cols = 60) {
    const result = []
    for (let i = 0; i < size; i++) {
        const item = {};
        for (let i = 0; i < cols; i++) {
            item['Column' + i] = Math.random().toString(36).substring(7);
        }
        result.push(item);
    }
    return result;
}
