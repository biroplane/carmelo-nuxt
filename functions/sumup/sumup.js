// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const Axios = require('axios')
const qs = require('qs')
require('dotenv').config()
Axios.defaults.baseURL = process.env.SUMUP_URL
const handler = async (event) => {
  try {
    const data = JSON.parse(event.body)
    const _token = await token()
    const _checkout = await checkout(data.amount)
    const _complete = await complete(_checkout.id, data.card)
    console.log(_complete)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${_token}`, _checkout })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

async function token() {
  try {
    const data = qs.stringify({
      grant_type: 'client_credentials',
      client_id: process.env.SUMUP_CLIENT_ID,
      client_secret: process.env.SUMUP_CLIENT_SECRET
    })

    const config = {
      method: 'post',
      url: '/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data
    }

    console.log('token', process.env.SUMUP_URL)
    const _token = await Axios(config)
    Axios.defaults.headers.common.Authorization = `Bearer ${_token.data.access_token}`
    return _token.data.access_token
  } catch (error) {
    console.log(error)
  }
}

async function checkout(amount) {
  try {
    const data = JSON.stringify({
      checkout_reference: process.env.SUMUP_CHECKOUT,
      amount,
      currency: 'EUR',
      pay_to_email: 'info@carmelosoulkitchen.com',
      description: 'Order Payment'
    })
    const config = {
      method: 'post',
      url: '/v0.1/checkouts',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    }
    const _checkout = await Axios(config)
    return _checkout.data
  } catch (error) {
    console.log(error)
  }
}
async function complete(id, card) {
  try {
    const data = { ...card }
    const config = {
      method: 'post',
      url: `/v0.1/checkouts/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    }
    const _complete = await Axios(config)
    return _complete.data
  } catch (error) {
    console.log(error)
  }
}

module.exports = { handler }
