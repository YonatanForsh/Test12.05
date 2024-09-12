//תרגיל 1
function Mission1(numbers)
{
    const newArr = numbers.filter( (n) => n%2 == 0 )
    return newArr
}

//תרגיל 2
function Mission2(text)
{
    let c = 0
    const textArr = text.split(" ")
    for (const w of textArr)
    {
        if (w.length == 4)
        {
            c ++
        }
    }
    return c
}

//תרגיל 3
function Mission3(numbersArr)
{
    const newArr = numbersArr.flat()
    return newArr
}

//תרגיל 4
function Mission4(numbers)
{
    const isSortUP = 1
    const isSortDown = 2
    const isNotSort = 0 
    let res = 0
    for (let i = 0; i < (numbers.length -1); i++)
    {
        if (numbers [i] > numbers [i + 1])
            {
                res ++
            }
    }
    switch (res)
    {
        case numbers.length -1:
            return isSortDown
        case 0:
            return isSortUP
        default:
            return isNotSort
    }
}

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
} //without 5 and 6

