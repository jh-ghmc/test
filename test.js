const testFunction = () => {

    let obj = {name: null}

    console.log(obj.hasOwnProperty('name'))

    if (obj.hasOwnProperty('name') && obj.name === null) {
        console.log('we did it!')
    }

}

testFunction();