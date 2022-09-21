let checkMAC = function (str) {
    let mac = str.split('.');
    let tar = mac.join('-');
    return tar;
}