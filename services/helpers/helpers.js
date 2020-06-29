exports.getRandomDocument = function (array) {
    if (array != null && array.length > 1) {
        return array[Math.floor(Math.random() * array.length)];
    }
    return array;
};

exports.getRandomSecuence = function (nivel) {
    if (['1','2','3'].includes(nivel)) {
        let secuence = [];
        while (secuence.length < 8) {
            var r = Math.floor(Math.random() * 50 * nivel) + 1;
            if (secuence.indexOf(r) === -1 && !secuence.includes(r)){ 
                secuence.push(r);
            };
        }
        return secuence.map((n) => ({id: n}));
    } else {
        throw Error(
            "Error al recuperar el nivel de SecuenciaNumeros. El nivel " +
                nivel +
                " informado no existe"
        );
    }
};

exports.getRandomAvatar = function () {
    let avatars = [
        "avatar1.png",
        "avatar2.png",
        "avatar3.png",
        "avatar4.png",
        "avatar5.png"
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
}