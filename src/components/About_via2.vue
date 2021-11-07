<template>
    <div>
        <Header/>
        <body class="mt-5">
            <div class="container mt-3">
            <p class="fs-1 text-center"> Groupe Via</p>
            </div>
            <img id="image-1" src="" alt="happy-buisness-woman-train-phone">
            <div class="container">
                <p class="fs-1"><font-awesome-icon icon="users"/>Qui sommes-nous ?</p>
                <p class="fs-3">Le groupe <span class="text-success">Via</span> propose une offre complète de solutions de mobilité.</p>
                <div class="row">
                <p class="fs-5 col ps-5"> <span class="text-success">Via</span> est un opérateur de transports urbains. Tous les jours, on se mobilisent pour recueillir, exploiter, entretenir et moderniser les informations de transport collectif et répondre ainsi aux besoins de mobilité des populations. Nous exploitons au quotidien le mode de transport des trains régionaux, et sommes par ailleurs présents sur la chaîne des nouvelles mobilités</p>
                <img id="image-2" src="" alt="people working together brainstorming" class="col-4 collapse-md">
                </div>
                <br>
                <p class="fs-1">Nos valeurs partagées au quotidien:</p>
                <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <p class=" fs-5 mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </p>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <p class=" fs-5 mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </p>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <p class=" fs-5 mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </p>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
            </div>
        </body>
    </div>
</template>

<script>

import Header from './Header.vue'
export default {
    
    name:'About_via2',
    components:{
        Header,
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
#image-1{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 600px;
    object-fit: cover;
}
#image-2{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    object-fit: cover;
}
</style>