/* eslint-disable */

// Script para criação de Schema da Newsletter no MasterData

const body = {
  title: 'Newsletter',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'name',
    },
    email: {
      type: 'string',
      format: 'email',
      title: 'email',
    },
    whatsapp: {
      type: 'string',
      title: 'whatsapp',
    }
  },
  'v-security': {
    publicJsonSchema: true,
    allowGetAll: true,
    publicRead: [
      'name',
      'email',
      'whatsapp'
    ],
    publicWrite: [
      'name',
      'email',
      'whatsapp'
    ],
    publicFilter: [
      'name',
      'email',
      'whatsapp'
    ],
  },
}

fetch('/api/dataentities/NL/schemas/Newsletter', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(body),
})
  .then(response => response.json())
  .then(response => console.log(response))
  .then(response => response.json())
  .then(response => console.log(response))
