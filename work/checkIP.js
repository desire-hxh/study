let checkIP = function (str) {
    let ip = str.split('.');
    if (ip[0] === 0) {
        return '不能以0开头';
    }
    if (ip[0] === 255) {
        return '不能以255开头';
    }
    if (ip[0] === 127) {
        return '不能是环回IP地址';
    }
};