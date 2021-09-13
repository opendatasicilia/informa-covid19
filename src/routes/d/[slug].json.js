let data, comune, comuni, columns, datarows
const axios = require('axios')

const lookup = new Map()

const gsheet =
  'https://docs.google.com/spreadsheets/d/1eaKiVQhifRZpxqLh2vUCk4F7vm3nNP9nz67GrzArqtI/gviz/tq?tqx=out:json&sheet=csv_redirect'

const fetchData = async () => {
  axios
    .get(gsheet)
    .then((res) => {
      data = JSON.parse(res.data.toString().substr(47).slice(0, -2))
      data = data.table
      const cols = data.cols
      const rows = data.rows

      columns = []
      for (const col of cols) {
        columns.push(col.label)
      }

      datarows = []
      for (const row of rows) {
        datarows.push(row.c.map((obj) => obj.v))
      }

      comuni = []
      for (var y = 0; y < rows.length; y++) {
        comune = {}
        for (var i = 0; i < columns.length; i++) {
          comune[columns[i]] = datarows[y][i]
        }
        comuni.push(comune)
      }
      return comuni
    })
    .then((comuni) => {
      comuni.forEach((comune) => {
        lookup.set(comune.slug, JSON.stringify(comune))
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
fetchData()

export async function get(req, res) {
  const { slug } = req.params

  if (lookup.has(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })

    res.end(lookup.get(slug))
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    })

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    )
  }
}
