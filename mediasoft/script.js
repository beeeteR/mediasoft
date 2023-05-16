// 1 FizzBuzz

function fizzbuzz(start = 1, end = 100) {
    for (let i = start; i <= end; i++) {
        let result = i
        if (i % 3 == 0 && i % 5 == 0) {
            result = 'FizzBuzz'
        } else if (i % 3 == 0) {
            result = 'Fizz'
        } else if (i % 5 == 0) {
            result = 'Buzz'
        }
        console.log(result);
    }
}

// 2

function sortArrByArr(arr1, arr2) {
    arr1.sort((a, b) => {
        let prev = arr1.indexOf(a)
        let cur = arr1.indexOf(b)
        if (arr2[prev] > arr2[cur]) return 1
        if (arr2[prev] == arr2[cur]) return 0
        if (arr2[prev] < arr2[cur]) return -1
    })
    return arr1
}

// 3

function matchLetters(arr) {
    let letters = []
    arr.forEach((el, i) => {
        letters.push({})
        el.split('').forEach(letter => {
            letters[i][letter] = (letters[i][letter] || 0) + 1
        })
    })

    const data = letters.reduce((result, current) => {
        Object.keys(result).forEach(letter => {
            if (!Object.keys(current).includes(letter)) {
                delete result[letter]
            } else if (result[letter] > current[letter]) {
                result[letter] = current[letter]
            }
        })
        return result
    }, letters[0])

    let result = []
    for (key in data) {
        for (let i = 0; i < data[key]; i++) {
            result.push(key)
        }
    }
    return result
}

// 4

function romamToNumber(roman) {
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    const enc = [...roman]

    let result = enc.reduce((num, el, i) => {
        if (enc[i + 1]) {
            const keys = Object.keys(symbols)
            if (keys.indexOf(el) < keys.indexOf(enc[i + 1])) {
                num += symbols[enc[i + 1]] - symbols[el]
                enc.splice(0, 1)
                return num
            }
        }
        return num + symbols[el]
    }, 0)

    return result
}


fizzbuzz()
console.log(sortArrByArr([1, 4, 6], [11, 33, 22]))
console.log(matchLetters(["bella","label","roller"]))
console.log(romamToNumber('MCDXLIX'))