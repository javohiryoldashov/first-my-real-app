const Connect = require('./model')

module.exports ={
    Clients_Get : async (req, res)=>{
        try{
            res.json(await Connect.Get_clients())
        }catch(error){
            res.sendStatus(500)
            console.log(error);
        }
    },
    Clients_Post : async (req, res)=>{
        const {client_name,client_select,client_tel,client_sell} = req.body
        if(!client_name,!client_select,!client_tel,!client_sell){
            return res.send({
                message:'Malumotlar toliq emas!'
            })
        }
        try{
            res.json(await Connect.Post_client(client_name,client_select,client_tel,client_sell))
        }catch(error){
            res.sendStatus(500)
            console.log(error);
        }
    },
    Clients_Delete : async (req, res)=>{
        const {id} = req.params
        try{
            res.json(await Connect.Delete_client(id))
        }catch(error){
            res.sendStatus(500)
            console.log(error);
        }
    }
}