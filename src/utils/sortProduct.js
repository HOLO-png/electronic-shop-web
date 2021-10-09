export const sortLowToHight = (products) => {
    return products
        .slice()
        .sort((a, b) => parseFloat(a.price[0]) - parseFloat(b.price[0]));
};

export const sortHightToLow = (products) => {
    return products
        .slice()
        .sort((a, b) => parseFloat(b.price[0]) - parseFloat(a.price[0]));
};
