<script >

    import Product from '../services/products'

    export default {
    data(){
        return {
            product: {
                name: '',
                quantity: '',
                code: '',
                description: '',
                metricunit: ''
            },
            modalSuccess: false,
            errors:[]
        }
    },
    mounted(){

    },
    methods: {
        post(){

            
                Product.post(this.product).then(res => {
                    alert('Produto salvo com Sucesso!')
                    this.$router.push('/')
                    this.errors = []
                })
                .catch((e)=>{
                    this.errors = e.response.data.errors
                })

                

        }
    }
}

</script>

<template>

    <h1 class="title">CADASTRO</h1>

    <ul>
        <li v-for="(error, index) of errors " :key="index">
            <h2>ERRO</h2>
            <b>{{ error.field }}</b> - {{ error.defaultMessage }}
        </li>
    </ul>

    <form @submit.prevent="post" ref="anyName"> 
        <section class="section1">
            <input class="name" type="text" placeholder="Nome" name="name" v-model="product.name" required/>
            
            <textarea class="text-area" placeholder="Uma breve descrição..." name="description" v-model="product.description" required />
        </section>

        <section class="section2">
            <div>
                <input class="quantity" type="number" min="0" name="quantity" placeholder="Quantidade inicial" v-model="product.quantity" required />

                <input class="quantity" type="number" min="0" name="code" placeholder="Codigo" v-model="product.code" required />
    
                <select name="metricunit" class="metric-unit" v-model="product.metricunit" required >
                    <option value="" class="void-option" disabled hidden selected>Unidade de Medida...</option>
                    <option value="unid" >Unidade</option>
                    <option value="m" >Metro</option>
                    <option value="l" >Litro</option>
                    <option value="kg" >Kilograma</option>
                    <option value="m3" >Metro Cubico</option>
                </select>
            </div>

            <div class="button-container">

                <button type="submit" class="submit-button">
                    Cadastrar
                </button>
                

                    <button type="button" class="trash-button" name="reset" >
                        <svg width="50" height="58" viewBox="0 0 50 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="&#240;&#159;&#166;&#134; icon &#34;trash&#34;">
                            <path id="Vector" d="M21.4286 0C17.5 0 14.2857 3.21429 14.2857 7.14286H7.14286C3.21429 7.14286 0 10.3571 0 14.2857H50C50 10.3571 46.7857 7.14286 42.8571 7.14286H35.7143C35.7143 3.21429 32.5 0 28.5714 0H21.4286ZM7.14286 21.4286V55.7857C7.14286 56.5714 7.71429 57.1429 8.5 57.1429H41.5714C42.3571 57.1429 42.9286 56.5714 42.9286 55.7857V21.4286H35.7857V46.4286C35.7857 48.4286 34.2143 50 32.2143 50C30.2143 50 28.6429 48.4286 28.6429 46.4286V21.4286H21.5V46.4286C21.5 48.4286 19.9286 50 17.9286 50C15.9286 50 14.3571 48.4286 14.3571 46.4286V21.4286H7.21429H7.14286Z" fill="#E7271B"/>
                            </g>
                        </svg>
                    </button>

            </div>
        </section>



    </form>

</template>

<style scoped>
    .title{
        color: #fff;
        font-size: 2.5rem;
        margin: 1rem 2rem;
    }
    form{
        display: flex;
        justify-content: center;
    }
    .section1{
        display: flex;
        flex-direction: column;
        margin-right: 2rem;
    }
    .section2{
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .name{
        border-radius: 50px;
        padding: 0.5rem 1.5rem;
        border: 3px solid #fff;
        background: none;
        width: 45vw;
        margin-bottom: 2rem;
        color: #fff;
    }
    .name::placeholder,
    .text-area::placeholder,
    .quantity::placeholder{
        color: #fff;
        font-size: 1.2rem;
    }

    .text-area{
        width: 45vw;
        height: 40vh;
        resize: none;
        color: #fff;

        border-radius: 30px;
        padding: 0.5rem 1.5rem;
        border: 3px solid #fff;
        background: none;
    }
    .quantity{
        width: 15vw;
        
        border-radius: 30px;
        padding: 0.5rem 1.5rem;
        border: 3px solid #fff;
        background: none;
        color: #fff;
        margin-right: 1rem;
    }
    
    .metric-unit{
        border-radius: 30px;
        padding: 0.5rem 1.5rem;
        border: 3px solid #fff;
        background: #fff;
        color: #360d5a;
        margin-left: 1rem;
    }
    
    .button-container{
        display: flex;
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
        
    }
    .submit-button,
    .trash-button{
        transition: all ease-in 0.2s;
    }
    .submit-button:hover,
    .submit-button:active,
    .trash-button:hover,
    .trash-button:active{
        
        transform: scale(1.1);
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
    }

</style>