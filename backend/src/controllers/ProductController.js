
const Product = require('../models/Product')

module.exports = {
    
    async index(req, res){
        
        const products = await Product.findAll();
        
        let response;
        
        if(products){
            response = products;
        }else{
            response = {
                message: 'Produto nao encontrado!'
            }
        }

        return res.json(response)
        
    },
    
    async store(req, res){
        const{ name, description, quantity, metricunit } = req.body;

        const product = await Product.create({
            name: name,
            description: description,
            metricunit: metricunit,
            quantity: quantity,
    
        })

        return res.json(product);
    },

    async getOne(req, res){
        const { id } = req.params

        const products = await Product.findOne({ where: { id: id} });

        let response
        if(products){
            response = products
        }else{
            response = {
                message: 'Produto nao encontrado no nosso estoque!'
            }
        }

        return res.json(response)

    },

    async attSore(req, res){
        const{ name, description, quantity, metricunit, id } = req.body;


        console.log(id)

        const product = await Product.update({
            name: name,
            description: description,
            metricunit: metricunit,
            quantity: quantity,
    
        },
        {
            where:{
                id: id
            }
        }
        )

        return res.json({
            message: 'Produto atualizado com sucesso!'
        });
    },

    async deleteOne(req, res){
        const { id } = req.params

        const products = await Product.destroy({ where: { id: id} });

        return res.json('Produto deletado com sucesso!')

    },


}