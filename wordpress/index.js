// const path = require('path')
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const { render } = require('mustache')

// let products = []
require('dotenv').config()

// const _axios = axios.create({ baseUrl: process.env.WORDPRESS_URL })
let page = 1
const pageSize = 51
// let latest = new Date('2001-01-01T00:00:00Z')

/**
// ? TODO: modified_after=2021-10-01T00:00:00Z
*/

const renderToFile = (items, folder, tempFile = 'products') => {
  const template = fs
    .readFileSync(path.join(__dirname, tempFile + '.md'))
    .toString()
  const base = path.join(__dirname, '../content', folder)
  // fs.rmdirSync(base, { recursive: true })
  if (!fs.existsSync(base)) {
    fs.mkdirSync(base)
  }
  items.forEach((post) => {
    const output = render(template, post)
    if (!fs.existsSync(`${base}`)) {
      fs.mkdirSync(`${base}`)
    }

    if (post.type === 'post') {
      fs.writeFileSync(`${base}/${post.slug}.md`, output)
    } else {
      fs.writeFileSync(`${base}/${post.slug}.md`, output)
    }
  })

  // console.log('Dirname ', __dirname)
  fs.writeFileSync(
    path.join(__dirname, '../static', 'latest.json'),
    JSON.stringify({
      latest: new Date()
    })
  )
}

const getPosts = async (page) => {
  // const _posts = await axios({
  //   method: 'GET',
  //   url: process.env.WORDPRESS_URL + endpoint,
  //   params: {
  //     per_page: pageSize,
  //     page,
  //     _embed: true,
  //     modified_after: latest
  //   }
  // })
  const _prods = await axios({
    method: 'get',
    url: process.env.WORDPRESS_URL + '/wc/v3/products',
    params: {
      per_page: pageSize,
      page,
      _embed: true,
      // modified_after: latest,
      catalog_visibility: 'hidden'
    },
    auth: {
      username: process.env.WOOCOMMERCE_USER,
      password: process.env.WOOCOMMERCE_PASS
    }
  })
  page++
  if (_prods.data.length === pageSize) {
    // return posts.concat(_posts.data.slice(0, pageSize - 1), aw)
    return _prods.data.slice(0, pageSize - 1).concat(await getPosts(page))
  } else {
    return _prods.data
  }
}

const init = () => {
  /**
   * Controllo che esite il file latest
   * il file "latest.json" memorizza l'ultimo fetch
   */
  if (fs.existsSync(path.join(__dirname, '../static', 'latest.json'))) {
    // const _latest = fs
    //   .readFileSync(path.join(__dirname, '../static', 'latest.json'))
    //   .toString()
    // latest = JSON.parse(_latest).latest
  }

  getPosts(page).then((_posts) => {
    // console.log(`Attendo posts `, _posts.length)
    page = 0
    const _real = _posts.filter((post) => post.catalog_visibility === 'visible')
    console.log(
      `Posts trovati `,
      _real.filter((c) => c.id === 2227)
    )
    const _chips = _real.filter((c) => c.id === 2227)
    fs.writeFileSync(
      path.join(__dirname, 'prod.json'),
      JSON.stringify(_chips[0])
    )

    renderToFile(_real, '/products')
  })

  // getPosts(page, '/locations').then((_posts) => {
  //   // console.log('Attendo Location ', _posts.length)
  //   page = 0
  //   renderToFile(_posts, 'locations', 'locations')
  // })
}

init()
