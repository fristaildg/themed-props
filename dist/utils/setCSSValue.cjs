'use strict';

const setCSSValue = (theme, scale, prop) => {
    if (prop) {
        const [scaleName, scalePositon] = prop.split('.');
        return theme[scale][scaleName]
            ? scalePositon
                ? theme[scale][scaleName][Number(scalePositon) - 1]
                : theme[scale][scaleName]
            : prop;
    }
    return undefined;
};
const setCSSFromArray = (theme, scale, prop, unit) => {
    if (prop && typeof prop === 'number') {
        return theme[scale][prop] && `${theme[scale][prop]}${unit !== null && unit !== void 0 ? unit : ''}`;
    }
    if (prop && typeof prop === 'string') {
        return prop;
    }
    return undefined;
};

exports.setCSSFromArray = setCSSFromArray;
exports.setCSSValue = setCSSValue;
