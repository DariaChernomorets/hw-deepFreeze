'use strict';

(function () {

    let user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                }
            },
        }
    }

    const deepFreeze = function (obj) {

        const propertyName = Object.getOwnPropertyNames(obj)


        propertyName.forEach( value =>{

            const propertyValue = obj[value]

            if (typeof propertyValue ==='object' && propertyValue !== null && !Array.isArray(propertyValue)) {
                deepFreeze(propertyValue)
            }
        })

        return Object.freeze(obj)
    }

    deepFreeze(user)

    console.log(Object.isFrozen(user.data.d.d1));

})()