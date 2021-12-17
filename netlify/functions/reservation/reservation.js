const Airtable = require('airtable')
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = (event) => {
  try {
    // const base = await Airtable.base(process.env.AIRTABLE_BASE_ID)

    const base = new Airtable({ apiKey: process.env.AIRTABLE_API }).base(
      process.env.AIRTABLE_BASE_ID
    )
    // const base = await airtable.base(process.env.AIRTABLE_BASE_ID)
    console.log('Event', event)
    const _record = base('reservation').create(
      {
        name: 'Annamaria De Palo',
        date: '2021-12-19',
        time: '21:30',
        satus: 'attesa',
        guests: '3',
        phone: '(347) 797-9762',
        note: 'Portano la torta',
        email: 'g.vallarelli@gmail.com'
      },
      function (err, record) {
        if (err) {
          console.error(err)
          return
        }
        console.log(record.get('name'))
        return record
      }
    )
    // const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Creato', record: _record })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
