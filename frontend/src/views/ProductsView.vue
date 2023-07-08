<script >
  import ListItem from '../components/list-item/List-item.vue'
  import Products from '../services/products'


  export default {

    components: {
      ListItem
    },

    data(){
      return{
        products: [],

      }
    },

    mounted(){
        this.get()
        
    },

    methods:{
      patch(){
        alert('pacth')
      },

      get(){

          Products.get().then(res => {
            console.log(res)
            this.products = res.data
          }, 1000)


        alert('get')
      }
    }


  }
</script>

<template>
    <div class="products">
      <h1 class="title">PRODUTOS</h1>



      <ul class="list" >

        <ListItem v-for="product of products" :key="product.id" :id="product.id" :name="product.name" :descripition="product.description" :quantity="product.quantity" :metric-unit="product.metricunit" />
      </ul>

    </div>
</template>
  


<style scoped>

  .title{
    color: #fff;
    font-size: 2.5rem;
    margin: 1rem 2rem;
  }

  .list{
        width: 100vw;
    }
</style>
