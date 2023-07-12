<script >
  import ListItem from '../components/list-item/List-item.vue'
  import Products from '../services/products'


  export default {

    components: {
      ListItem
    },

    data(){
      return{
        sowModal: false,
        products: [],
        modalProduct: []
      }

        
  
    },

    mounted(){
        this.get()
        
    },

    methods:{
      patch(){
        Product.patch(this.product).then(res => {
                    this.sowModal = false
                    setTimeout(()=>{
                        ProductsView.get()
                    }, 1000)
                })
      },

      get(){
          Products.get().then(res => {
            this.products = res.data
          }, 1000)
      },

      getOne(id){
        Products.getOne(id).then(res =>this.modalProduct = res.data).then(()=>this.sowModal = true)
      },

      patch(id){
        Products.patch(this.modalProduct).then(res => {
          this.sowModal = false
          this.get()
        })

      },
      deleteOne(id){
        Products.deleteOne(id)
        this.sowModal = false
        setTimeout(()=>{
          this.get();
        }, 100)

      },



      ModalShow(id){
            this.getOne(id)
      }
    }   
}


</script>

<template>
    <div class="products">
      <h1 class="title">PRODUTOS</h1>


      <div class="modal" v-show="sowModal">
          <form @submit.prevent="patch(modalProduct.id)" class="modal-form">

              <button class="modal-close-button" v-on:click="()=> sowModal = !sowModal">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 64 64" fill="#fff">
                      <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z"></path>
                  </svg>
              </button>
              <div class="modal-content">
                  <div class="modal-left-content">
      
                      <input required type="text" v-model="modalProduct.name" class="modal-name"/>

                      <textarea required class="modal-description" name="" id="" cols="30" rows="10" v-model="modalProduct.description"></textarea>
      
                  </div>
      
                  <div class="modal-rigth-content">
      
                    <h2 class="code-title">Codigo do item:</h2> 
                    <input class="modal-code-input" required  v-model="modalProduct.code" type="number" />  

                      <h1 class="modal-quantity"> 
                          

                              <input class="modal-quantity-input" required  v-model="modalProduct.quantity" type="number" />  


          

                              {{ modalProduct.metricunit }}
                          
                          <select required v-model="modalProduct.metricunit">
                              <option selected disable hiddenvalue="" >Trocar unidade de medida</option>
                              <option value="unid" >Unidade</option>
                              <option value="m" >Metro</option>
                              <option value="l" >Litro</option>
                              <option value="kg" >Kilograma</option>
                              <option value="m3" >Metro Cubico</option>
                          </select>
                      
                      </h1>

                      <button type="submit" class="submit-button">
                          ATUALIZAR
                      </button>

                      <button v-on:click="deleteOne(modalProduct.id)" type="button" class="trash-button"  >
                          <svg width="50" height="58" viewBox="0 0 50 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g>
                              <path id="Vector" d="M21.4286 0C17.5 0 14.2857 3.21429 14.2857 7.14286H7.14286C3.21429 7.14286 0 10.3571 0 14.2857H50C50 10.3571 46.7857 7.14286 42.8571 7.14286H35.7143C35.7143 3.21429 32.5 0 28.5714 0H21.4286ZM7.14286 21.4286V55.7857C7.14286 56.5714 7.71429 57.1429 8.5 57.1429H41.5714C42.3571 57.1429 42.9286 56.5714 42.9286 55.7857V21.4286H35.7857V46.4286C35.7857 48.4286 34.2143 50 32.2143 50C30.2143 50 28.6429 48.4286 28.6429 46.4286V21.4286H21.5V46.4286C21.5 48.4286 19.9286 50 17.9286 50C15.9286 50 14.3571 48.4286 14.3571 46.4286V21.4286H7.21429H7.14286Z" fill="#E7271B"/>
                              </g>
                          </svg>
                      </button>
                  
      
                  </div>
              </div>


                  
          </form>
      </div>




      <ul class="list" >

        <li v-show="!sowModal" class="list-item">

            <h2 class="name"> Nome </h2>
            <h2 > Codigo </h2>

            <h3 class="description"> Descrição </h3>

            <h3 class="quantity"> Quantidade </h3>

        </li>
    </ul>



      <ul class="list"  >

        <li  v-for="product of products" :key="product.id" v-show="!sowModal" class="list-item">

            <h2 class="name"> {{ product.name }}</h2>
            <h2 > {{ product.code }} </h2>

            <h3 class="description">{{ product.description }}</h3>

            <h3 class="quantity">{{ product.quantity }} &nbsp; - &nbsp; {{ product.metricunit }}</h3>

            <button class="edit-button" v-on:click="ModalShow(product.id)">
                <svg class="icon" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                <path id="Vector" d="M37.5 0L31.25 6.25L43.75 18.75L50 12.5L37.5 0ZM25 12.5L0 37.5V50H12.5L37.5 25L25 12.5Z" fill="white"/>
                </g>
                </svg>
            </button>
        </li>
      </ul>

    </div>
</template>
  


<style scoped>

.modal-code-input{
    background: none;
        border: none;
        color: #fff;
        font-size: 1rem;
        width: 50%;
        text-align: center;
}
  .title{
    color: #fff;
    font-size: 2.5rem;
    margin: 1rem 2rem;
  }

  .list{
        width: 100vw;
    }
    .code-title{
        color: #fff;
    }






    
    .submit-button{
        width: 70%;
        margin-right: 5%;
        font-size: 2rem;
        border-radius: 50px;
        padding: 0.25rem 1rem;
        border: 3px solid #4AF947;
        background: none;
        color: #4AF947;
        cursor: pointer;
        margin-bottom: 1rem;
        transition: all ease-in 0.2s;
    }

    .submit-button:hover,
    .submit-button:active{
        transform: scale(1.1);
    }
    .modal{
        background: rgba(0.2, 0.2, 0.2, 0.3);
        border-radius: 50px;
        width: 90vw;
        height: 70vh;
        margin: auto;
        margin-top: 3rem !important;
        margin-bottom: 3rem !important;
    }
    .modal-name{
        margin-bottom: 1rem;
        border: 3px solid #fff;
        border-radius: 50px;
        padding: 10px;
        font-size: 1.1rem;
    }
    .modal-name::placeholder{
        color: #000;
    }

    .modal-quantity{
        font-size: 2rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 1rem;
    }
    .modal-quantity-input{
        background: none;
        border: none;
        color: #fff;
        font-size: 4rem;
        width: 100%;
        text-align: center;
    }
    .modal-description{
        height: 90%;
        border: 3px solid #fff;
        border-radius: 25px;
        padding: 10px;
    }
    .modal-content{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90%;

    }
    .modal-left-content{
        display: flex;
        flex-direction: column;
        width: 67%;
        height: 90%;
    }
    .modal-rigth-content{
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 27%;
        height: 90%;
    }
    .modal-close-button{
        position: relative;
        background: none;
        display: flex;
        border: none;
        top: 20px;
        right: -20px;
        cursor: pointer;
    }
    .modal-form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

    }
    .trash-button{
        width: 25%;
        color: #E7271B;
        border: 3px solid #E7271B;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.3rem 0.1rem;
        border-radius: 50px;
        cursor: pointer;
        transition: all ease-in 0.2s;
    }

    .trash-button:hover,
    .trash-button:active{
        transform: scale(1.1);
    }

    .edit-button{
        background: none;
        width: max-content;
        border: none;
        cursor: pointer;
        transition: all ease-in 0.2s;
    }
    .edit-button:hover,
    .edit-button:active{
        transform: scale(1.1);
    }
    .list-item{
        display: grid;
        grid-template-columns: repeat(5, 17vw);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        justify-content: space-evenly;
        border-bottom: 3px solid #fff;
        align-items: center;
        color: #fff;
        font-size: 1.2rem;
        padding: 0.5rem;
        text-align: center;
    }
    .name{
        position: relative;
    }
    .description{
        white-space:nowrap;
        text-overflow: ellipsis;
        position: relative;
        overflow: hidden; 
    }
    .quantity{
        position: relative;
    }
    .icon{
        position: relative;
    }

</style>
