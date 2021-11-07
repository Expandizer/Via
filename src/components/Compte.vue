<template lang="fr">
    <div>
        <Header/>
        <br>
        <br>
        <body class="bg-success">
            <div id="first-part">
                <div  class="row">
                    <div class="col-md-7 text-center pt-5 pb-5 ">
                        <p class="text-center fs-1 pt-5 mt-5">Mon compte Via</p>
                        <p class="text-center">Pour plus d'accessibilité et pour ne rater aucune offre</p>
                    </div>
                    <div class="col-md-5 text-center d-flex justify-content-center">
                            <form  method="POST" class=" p-5 mt-5 w-100  bg-dark text-light rounded">
                                <div class="form-group text-start ">
                                    <label for="inputEmail">Email :</label><br>
                                    <input type="email" class=" text-light border-0 border-bottom border-success bg-dark fs-5" id="inputEmail" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                                </div>
                                <div class="form-group text-start row">
                                    <label for="inputPassword">Password :</label> 
                                    <div class="col-9">
                                        <input v-if="showPassword" class=" text-light border-0 border-bottom border-success  bg-dark fs-5" type="text" v-model="password" required />
                                        <input  v-else type="password" class="text-light border-0 border-bottom border-success  bg-dark fs-5" placeholder="Password" v-model="password">
                                    </div>
                                    <div class="col">
                                    <button class="btn text-light bg-success" v-on:click.stop.prevent="showPassword = !showPassword" ><font-awesome-icon icon="eye"/>
                                    </button>
                                    </div>
                                </div>
                                <div class="form-group text-start">
                                    <label class="form-check-label"><input type="checkbox"> Remember me</label>
                                </div>
                                <button value="submit" class="border-0 rounded w-100 btn bg-success text-light">Sign in</button>
                                <br>
                                <br>
                                <div class="">
                                <a href="#" class="text-success">créer un compte</a>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
            <br>
            <p class="text-light bg-dark w-100 text-center pt-3 pb-3">Tous les avantages qui vous sont réservés...</p>
            <div class="container ">
                <div id="get-round" class="bg-dark w-auto h-auto p-5 pb-4">
                    <ul class="row  d-flex justify-content-center ">
                        <li class="col-md text-center pe-5 ">
                            <p class="text-success fs-1"><font-awesome-icon icon="train"/><font-awesome-icon icon="wave-square"/><font-awesome-icon icon="map-marker-alt"/></p>
                            <p class="text-light fs-4">L'actu pratique de vos lignes et trajets :</p>
                            <p class="text-light">Toutes les infos utiles pour vos déplacements : horaires, titres de transport, travaux, nouveautés en stations…</p>
                        </li>
                        <li class="col-md text-center pe-5 ">
                            <p class="text-success fs-1"><font-awesome-icon icon="map-marked-alt"/></p>
                            <p class="text-light fs-4">La vi(ll)e autour de votre station :</p>
                            <p class="text-light">Toutes les adresses et bons plans pour découvrir et participer aux événements qui animent notre réseau : expos, concerts, stations relookées…</p>
                            </li>
                        <li class="col-md text-center pe-5 ">
                            <p class="text-success fs-1"><font-awesome-icon icon="train"/><font-awesome-icon icon="wave-square"/><font-awesome-icon icon="lightbulb"/></p>
                            <p class="text-light fs-4">Toutes les initiatives sur le réseau</p>
                            <p class="text-light">Toutes les innovations et services que nous mettons en œuvre pour vous simplifier le quotidien sur notre réseau.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <br>
        </body>
        <p class=" m-0 w-auto text-center bg-dark pb-4 pt-3 text-white "> copyright &copy; 2021 Via</p>
</div>
    </div>
</template>


<script>
import Header from './Header.vue'
export default {
    
    name:'Main2',
    components:{
        Header,
    },
data() {
    return {
      showPassword: false,
      password: null
    };
  },
computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    }
  }

}
</script>

<style scoped>
#first-text{
    text-align: center;
}
form{
    max-width:400px;
}
#compte{
    color:blue;
}
#first-part{
background-image: url("");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
#get-round{
    border-radius: 20px;
}
input:focus {
    outline: none !important;
}
input:-webkit-autofill{
    -webkit-text-fill-color: 	#fffefd  !important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #212529 inset !important;
}
</style>