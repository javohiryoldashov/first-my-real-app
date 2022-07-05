const {fetchData} = require('../../utils/postgres')

const get_clients = `
    SELECT * FROM clients
`
const post_client = `
    INSERT INTO clients(client_name, client_select,client_tel,client_sell) VALUES('$1','$2','$3',$4);
`
const delete_client = `
    DELETE FROM clients WHERE client_id = $1
`

const Get_clients = () => fetchData(get_clients)
const Post_client = (client_name,client_select,client_tel,client_sell) => fetchData(post_client,client_name,client_select,client_tel,client_sell)
const Delete_client = (id) => fetchData(delete_client, id)
module.exports ={
    Get_clients,
    Post_client,
    Delete_client
}