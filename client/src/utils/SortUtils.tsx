export const sort = (valA, valB, order) => {
    const sortVal = desc(valA, valB);
    return order === 'desc' ? sortVal : -sortVal
};

export const desc = (valA, valB) => {
    if (valB < valA) {
        return -1;
    }
    return valB > valA ? 1 : 0;
};
