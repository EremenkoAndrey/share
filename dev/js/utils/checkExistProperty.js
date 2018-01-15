/*
Принимает объект и строковое представление вложенного в объект свойства
Примеры:
const obj = {test1:{test5: true}};
checkExistProperty(obj, 'obj.test1.test5'); // true

const obj = {test1:[{test5: true}]};
checkExistProperty(obj, 'obj.test1[0].test5'); // true
checkExistProperty(obj, 'obj.test1.test5'); // false
return bool

 */
export default function checkExistProperty(obj, props, index = 1) {
    let arrProps;
    if (typeof props === 'string') {
        const reg = /]\.|\[|\./;
        arrProps = props.split(reg);
    } else {
        arrProps = props;
    }

    if (Array.isArray(obj)) {
        const arrIndex = parseInt(arrProps[index], 10);
        const result = !isNaN(arrIndex) && typeof obj[arrIndex] !== 'undefined';

        if (result && arrProps[index + 1]) {
            return checkExistProperty(obj[arrProps[index]], props, index + 1);
        }
        return result;
    }

    if (obj.hasOwnProperty(arrProps[index]) && arrProps[index + 1]) {
        return checkExistProperty(obj[arrProps[index]], props, index + 1);
    }
    return obj.hasOwnProperty(arrProps[index]);
}

