function getText<T>(text: T): T {
    return text
}

console.log(getText<string>("123"));

function printTextLength<T extends { length: number }>(text: T) {
    console.log(text.length);
}

printTextLength<string>("1111");
