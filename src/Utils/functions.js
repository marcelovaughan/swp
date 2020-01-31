export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatNumber(number){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const sleep = timeout => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
};

export const getFilmsCounterText = (films) => {
    let legend = ''
    
    if(films.length === 0){
        legend = '(citation only)'
    }else{
        legend = films.length > 1 ? 'films' : 'film'
    }
    return `${films.length + ` ` + legend }`
}