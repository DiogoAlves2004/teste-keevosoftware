<script>

    import { RouterLink, RouterView } from 'vue-router'

    export default {
        name: "Navbar"
    }

</script>

<template>
    <header>
        
        <div class="wrapper">
                
                <img alt="Vue logo" class="logo" src="@/assets/LOGOMARCA.png" width="125" height="125" />
            <nav>
                <div class="navLinks">
                    <RouterLink to="/products">Produtos</RouterLink>
                    <RouterLink to="/products/register">Cadastro</RouterLink>
                    <RouterLink to="/comingsoon">Coming Soon</RouterLink>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    header {
        width: 100vw;
        height: 150%;
        line-height: 1.5;
        max-height: 100vh;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: 200px;

    }
    .wrapper{
        margin-top: 25px;
    }

    nav{
        background: linear-gradient(45deg, #FF5959 0%, #FBB104 96.71%);
        width: 100vw;
        height: 139px;
        display: flex;
        align-items: center;
    }
    .navLinks{
        position: absolute;
        right: 5rem;

    }
    .logo{
        transform: scale(1.5);
        margin-left: 5rem;
        position: absolute;
    }
    .navLinks a{
        border: 2px solid #FFF;
        padding: 0.2rem 3rem;
        font-size: 22px;
        margin-left: 40px;
        color: white;
        text-decoration: none;
        font-weight: 500;
        border-radius: 100px;
    }
</style>