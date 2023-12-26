const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
    const data = JSON.parse(response);
    return data;
};

const createError = (msg: string): never => {
    throw new Error(msg)
}


function transferEurToUsd(available: boolean, amount: number, commission: number): string {
    if (available) {
        let res: number = fetchCurr(currRate) * amount * commission;
        return `${res} так`
        // Или запись в элемент на странице вместо консоли
    } else if (!available) {
        return 'не так'
    }
    return createError('errrorrrr')
}

transferEurToUsd(true, 500, 1.05);

