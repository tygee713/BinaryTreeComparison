const solution = (arr) => {
    const addNode = (index) => {
        if (index >= arr.length) return 0

        return arr[index] + addNode(2 * index + 1) + addNode(2 * index + 2)
    }
    const left = addNode(1)
    const right = addNode(2)
    
    return left > right ? "Left" : right > left ? "Right" : ""
}
