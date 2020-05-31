exports.getRandomDocument = function (array) {
    if (array != null && array.length > 1) {
        return array[Math.floor(Math.random() * array.length)];
    }
    return array;
};
