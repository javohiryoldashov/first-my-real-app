const {Pool} = require('pg')
const {connectionString} = require('../config/config')

const pool = new Pool ({
    connectionString
})

const fetchData = async (SQL, ...params) =>{
    const Client = await pool.connect()
    try{
        const { rows } = await Client.query(SQL, params.length ? params : null)
        return rows
    }finally{
        Client.release()
    }
}

module.exports = {
    fetchData
}