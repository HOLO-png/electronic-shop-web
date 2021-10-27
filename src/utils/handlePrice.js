export const handleChangeProductPrice = (priceOld, priceNew) => {
    return Math.round(((priceOld[0] - priceNew[0]) / priceOld[0]) * 100);
};
