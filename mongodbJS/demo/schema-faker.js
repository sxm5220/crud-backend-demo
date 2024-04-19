const faker = require('json-schema-faker')
const schema = {
    type: 'object',
  properties: {
    name: {
      type: 'string',
      faker: 'name.findName'
    },
    email: {
      type: 'string',
      format: 'email',
      faker: 'internet.email'
    }
  },
  required: ['name', 'email']
}
const fakeData = faker(schema)
console.log(fakeData)