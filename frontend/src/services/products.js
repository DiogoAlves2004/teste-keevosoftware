import { http } from './config'

export default {
    
    get:()=>{
        return http.get("products")
    },
    getOne:(id)=>{
        return http.get(`products/${id}`)
    },

    post:(product) => {
        return http.post('products', product)
    },

    patch:(product) => {
        return http.patch('products', product)
    },

    deleteOne:(id) => {
        return http.delete(`products/${id}`)
    }

}