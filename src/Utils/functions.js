export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatNumber(number){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}