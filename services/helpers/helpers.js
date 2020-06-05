exports.getRandomDocument = function (array) {
    if (array != null && array.length > 1) {
        return array[Math.floor(Math.random() * array.length)];
    }
    return array;
};

exports.getRandomSecuence = function (nivel) {
    let secuence = [];
    switch (nivel) {
        case "1":
            while (secuence.length < 8) {
                var r = Math.floor(Math.random() * 50) + 1;
                if (secuence.indexOf(r) === -1) secuence.push({ id: r });
            }
            break;
        case "2":
            while (secuence.length < 8) {
                var r = Math.floor(Math.random() * 100) + 1;
                if (secuence.indexOf(r) === -1) secuence.push({ id: r });
            }
            break;
        case "3":
            while (secuence.length < 8) {
                var r = Math.floor(Math.random() * 150) + 1;
                if (secuence.indexOf(r) === -1) secuence.push({ id: r });
            }
            break;
        default:
            throw Error(
                "Error al recuperar el nivel de SecuenciaNumeros. El nivel " +
                    nivel +
                    " informado no existe"
            );
    }

    return secuence;
};
