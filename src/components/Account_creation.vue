<template>
    <div id="complete">
        <Header />
        <body class="pt-5">
            <div class="bg-success pt-3  row ">
                <ul class="">
                    <li class="col text-center">
                        <p class="-4 fs-1 text-light fw-bold">Mon Identifiant Via</p>
                    </li>
                </ul>
            </div>
            <div class=" bg-success pe-4 ">
                <ul class="row">
                    <li class="col-md text-center pb-1  ">
                        <p class=""><font-awesome-icon class="text-success bg-light" id="circle" icon="key"/></p>
                        <p class="fs-3 text-light fw-bold pb-2">Connexions simplifiées :</p>
                        <p class="fs-5 text-light">Un identifiant unique pour vous connecter le site Via.</p>
                    </li>
                    <li class="col-md text-center pb-1">
                        <p class=""><font-awesome-icon class="text-success bg-light" id="circle" icon="clock"/></p>
                        <p class="fs-3 text-light fw-bold pb-2">Réservations facilitées :</p>
                        <p class="fs-5 text-light">Un profil personnalisé pour gagner du temps lors de vos réservations.</p>
                    </li>
                    <li class="col-md text-center pb-1">
                        <p class=""><font-awesome-icon class="text-success bg-light " id="circle" icon="desktop"/></p>
                        <p class="fs-3 text-light fw-bold pb-2">Voyages maîtrisés :</p>
                        <p class="fs-5 text-light">Retrouvez tous vos billets et vos justificatifs où que vous soyez.</p>
                    </li>
                </ul>
            </div>
            <div class="bg-dark text-light">
                <div class="container">
                    <div class="text-success pt-3  row">
                        <ul class="">
                            <li class="col text-center">
                                <p class=" fs-1 fw-bold">CRÉER MON IDENTIFIANT Via</p>
                            </li>
                        </ul>
                    </div>
                    <div class="row tex-light pb-5">
                        <form ref="registrationForm" method="POST" class=" col text-center">
                            <ul class=" container row">
                                <li class="col-md text-center pb-1">
                                    <p class="fs-4">Civilité :</p>
                                </li>
                                <li class="col text-center pb-1">
                                    <input required type="radio" id="male" name="gender" class=" bg-dark border border-success fs-3 form-check-input text-success" checked  value="male">
                                    <label for="male" class="form-check-label fs-4">Mr.</label>
                                </li>
                                <li class="col text-center pb-1">
                                    <input required type="radio" id="female" name="gender" class=" bg-dark border border-success form-check-input fs-3" value="female">
                                    <label for="female" class="form-check-label fs-4">Mme.</label>
                                </li>
                            </ul>
                            <ul class="container row">
                                <li class="col-md text-center pb-1">
                                    <label for="last-name" class=" pt-1 fs-5">Nom:</label><br>
                                    <input required type="text" class=" text-light border-0 border-bottom border-success w-75 bg-dark fs-5 " placeholder="Dupont" id="last-name">
                                </li>
                                <li class="col-md text-center pb-1">
                                    <label for="name" class=" pt-1 fs-5">Prénom :</label><br>
                                    <input required type="text" class=" text-light border-0 border-bottom border-success w-75 bg-dark fs-5  " placeholder="Pierre" id="name">
                                </li>
                            </ul>
                            <ul class=" container row">
                                <li class="col-md text-center pb-1">
                                   <label for="date" class="fs-5">Date de naissance:</label><br>
                                    <input required type="date" class=" text-light border-0 border-bottom border-success w-75 bg-dark fs-5" id="date">
                                </li>
                                <li class="col-md text-center pb-1">
                                    <label for="email" class=" pt-1 fs-5">E-mail :</label><br>
                                    <p class="text-"><input required type="text" class=" text-light border-0 border-bottom border-success w-75 bg-dark fs-5"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="exemple@via.com" id="email"></p>
                                </li>
                            </ul>
                            <ul class=" container row">
                                <li class="col-md text-center pb-1">
                                    <label for="password" class=" pt-1 fs-5">mot de passe:</label><br>
                                    <div class="row">
                                        <div class="col-10">
                                            <input v-if="showPassword" class="text-light border-0 border-bottom border-success w-75 bg-dark fs-5" type="text" minlength="8" v-model="password" required />
                                            <input  v-else type="password" class="text-light border-0 border-bottom border-success w-75 bg-dark fs-5" placeholder="Password" v-model="password">
                                        </div>
                                        <div class="col">
                                            <button class="btn text-light bg-success" v-on:click.stop.prevent="showPassword = !showPassword"><span class="icon is-small is-right"><font-awesome-icon icon="eye"/></span></button>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md text-center pb-1">
                                    <label for="confirm" class=" pt-1 fs-5">Confirmation de votre mot de passe:</label><br>
                                    <div class="row">
                                        <div class="col-10">
                                            <input v-if="showPassword" class="text-light border-0 border-bottom border-success w-75 bg-dark fs-5" type="text" minlength="8" v-model="password_confirmation" required />
                                            <input  v-else type="password" class="text-light border-0 border-bottom border-success w-75 bg-dark fs-5" placeholder="Password" v-model="password_confirmation">
                                        </div>
                                        <div class="col">
                                            <button class="btn text-light bg-success" v-on:click.stop.prevent="showPassword = !showPassword"><span class="icon is-small is-right"><font-awesome-icon icon="eye"/></span></button>
                                        </div>
                                    </div>                               
                                </li>
                            </ul>
                            <button class="text-center bg-success text-light border-0 w-50 p-3 me-3 mt-2 rounded-pill" v-on:click.stop.prevent="submitRegistration"  value="submit">Valider</button>
                        </form>
                    </div>
                </div>
            </div>
        </body>
        <p class="m-0 w-auto text-center bg-success pb-4 pt-3 text-white "> copyright &copy; 2021 Via</p>
    </div>
</template>


<script>
import Header from './Header'
export default {
    name:'Account_creation',
    components:{
        Header,
    },
    data() {
        return {
        showPassword: false,
        password: null,
        password_confirmation: null,
        };
  },
    computed: {
  },
    methods: {
        submitRegistration(){
            if (this.password== this.password_confirmation){
               return this.$refs.registrationForm.submit();
            }
                alert("9awd a zbi d zaid");
        }
  }
}
</script>


<style  scoped>
#circle{
    font-size: 5em;
    border: solid 20px whitesmoke;
    border-radius: 100px;
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