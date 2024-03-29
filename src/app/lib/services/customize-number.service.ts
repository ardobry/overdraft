export const customizeNumberService = (number) => {
    if (!number) {
       return;
    }
    // debugger
    let _num;
    _num = number.toString();

    function changeRenderFormat(str) {
        if (str.length <= 3) {
            return _num;
        }

        const lastPart = str.substring(str.length - 3);
        const startPart = str.substring(0, str.length - 3);
        let result;

        if (startPart.length > 3) {
            const newResult = changeRenderFormat(startPart);
            result = `${newResult}.${lastPart}`;
        } else {
            result = `${startPart}.${lastPart}`;
        }

        return result;
    }

    _num = changeRenderFormat(_num);

    return _num;
}