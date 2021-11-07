<template lang="fr">
<header class="bg-dark fixed-top ">
<div id="header-height ">
  <a href=""><img src="" class=" ms-5 mt-2" alt="via-logo" style="max-width:50px; max-height:50px ;"></a><!--logo for via-->
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="bg-dark">
    <button class=" ms-5 me-5 text-center navbar-toggler text-light" id="navbar_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <font-awesome-icon icon="bars"/>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav text-center">
        <li class="nav-item">
          <a class="nav-link text-light fw-bold  " aria-current="page" href="#"><font-awesome-icon class="me-2" icon="user-alt" />Mon compte</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fw-bold " aria-current="page" href="#"><font-awesome-icon class="me-2" icon="train" />A bord</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fw-bold " href="#">Groupe Via</a>
        </li>
        <li class="nav-item">
        <a class="nav-link text-light fw-bold " href="#">Via a votre ecoute</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fw-bold " href="#" tabindex="-1" aria-disabled="true"> <font-awesome-icon class="me-2" icon="virus"/>COVID-19</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div id="head-nav" class="navbar navbar-expand-xl bg-dark navbar-dark">
</div>
</div>
</header>
</template>

<script>
export default{
  name : 'header',
  components:{
  },
  data(){

  },
  methods: {

  },
  mounted(){
    let externalScript = document.createElement('script');
      externalScript.setAttribute('src','https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
      document.body.appendChild(externalScript);
  },    
}
</script>

<style scoped>
template{
    outline: none;
}
a{
    text-decoration: none;
    font-size: 1pc;
    color: aliceblue;
}
#header-height{
  max-height:400px;
}
ul{
    margin: 0;
    padding: 0;
}
li{
    float: left;
    display: inline;
    padding: 0 20px 0 20px;
}
nav{
    float: right ; 
    margin-top: 7px;
}
a:hover{
    text-decoration: underline;
    color: aliceblue;
}
#hamburger, #hamburger:focus{
    border: none;
    outline: none;
}

</style>