const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/api/days/:day', (request, response) => {
  const day = request.params.day
  const daysOfWeek = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  }

  if(daysOfWeek[day]) {
    response.set('Content-Type', 'text/plain')
    response.status(200).send(`${daysOfWeek[day]}`)
  } else {
    response.set('Content-Type', 'text/plain')
    response.status(404).send(`'${day}' is not a valid day!`)
  }
})

app.post('/api/array/concat', (request, response) => {
  const arr1 = request.body.arr1
  const arr2 = request.body.arr2

  if(Array.isArray(arr1) && Array.isArray(arr2)) {
    response.json({"result": arr1.concat(arr2)})
  } else {
    response.status(400).json({"error": "Input data should be of type Array."})
  }
})

app.listen(3000, () => {
  console.log('Listening port 3000')
})