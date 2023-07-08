import { http } from './config'

export default {
    
    get:()=>{
        return http.get("products")
    },

    post:(product) => {
        return http.post('products', product)
    },

    patch:(product) => {
        return http.patch('products', product)
    }

}