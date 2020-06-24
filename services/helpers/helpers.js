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

exports.getRandomAvatar = function () {
    let avatars = [
        "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043266-avatar-dead-monster-zombie_113260.png",
        "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043272-avatar-lazybones-sloth-sluggard_113274.png",
        "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043273-animal-avatar-mutton-sheep_113242.png",
        "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043237-avatar-avocado-food-scream_113277.png",
        "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043242-avatar-cacti-cactus-pirate_113248.png",
        "https://cdn.icon-icons.com/icons2/1736/PNG/128/4043245-avatar-coffee-cup-zorro_113282.png"
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
}