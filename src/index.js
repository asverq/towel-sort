module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];
    let res = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i === 0) res.push(matrix[i]);
        else if (i === 1) res.push(matrix[i].reverse());
        else if (i % 2 === 0) res.push(matrix[i]);
        else res.push(matrix[i].reverse());
    }

    return res.flat();
}
