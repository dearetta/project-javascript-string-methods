const studentData = [
    {
        id: 1,
        name: 'dearetta putri ramadhani',
        major: ['Computer Science'],
        tuition: true
    },
    {
        id: 2,
        name: 'rafiandra dayansya',
        major: ['Aviation Engineering'],
        tuition: true
    },
    {
        id: 2,
        name: 'dena Gabriela Situmorang',
        major: ['Mechatronics'],
        tuition: false
    }
]

const studentTuition = data => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index]
        let itemString = ``

        itemString += item.tuition ? `☑` : `x` // Example: ☑
        itemString += ` ${item.name} `
        itemString += ` \n Major: ${item.major}`

        console.log(itemString)
    }
}

studentTuition(studentData)

const nameCapitalized = studentData[0].name.charAt(0).toUpperCase() + studentData[0].name.slice(1)
console.log(nameCapitalized);
console.log(studentData);

