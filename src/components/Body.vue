<template>
<div class="mt-5">
<section id="section-1" class=" p-5 pt-3">
    <div class="input-group row w-100 pe-3">
        <form method ="POST" action="#" id="form" class="mt-3 ms-4 w-auto p-4 pb-2 bg-dark rounded ">
            <div class="input-group">
            <label id="label" class="input-group-text w-auto bg-success"   for="depart">de |</label>
            <input required class="form-control bg-dark border border-success text-white col-5" type="text" name="depart" id="depart" placeholder="Lieu de départ">
            </div>
            <br>
            <div class="input-group">
            <label id="label" class="input-group-text w-auto bg-success" for="destination">a |</label>
            <input required class=" form-control bg-dark border border-success text-white" type="text" name="destination" id="destination" placeholder="Destination">
            </div>
            <br>
            <div class="input-group">
            <label id="label" class="input-group-text w-auto bg-success" for="calender">date de depart  |</label>
            <input required class="form-control bg-dark border border-success text-white" type="date" name="calendrier" id="calender" placeholder="">
            </div>
            <br>
            <div class="input-group">
            <label id="label" class="input-group-text w-auto bg-success" for="heure"> heure  |</label>
            <input required class="form-control bg-dark border border-success text-white" type="time">
            </div>
            <br>
            <div class="input-group row">
            <div class="col-md-6">
            <label class=" bg-success text-light  border border-success bg-success rounded p-2">nombre de voyageurs :</label>
            </div>
            <br><br>
            <div class=" col-md-6 text-white text-start">
            <input required type="checkbox" class=" bg-dark border border-success fs-3 form-check-input text-success" name="wheelchair-check" id="wheelchair">
            <label class="pt-2" for="wheelchair"><font-awesome-icon icon="wheelchair" />   Itinéraires accessibles</label>
            </div>
            </div>
            <br>
            <div class="input-group">
            <label id="label" for="person-n" style="color:black;" class="input-group-text w-auto bg-success"><font-awesome-icon icon="male" /> <span>|</span></label>
            <input required class="form-control bg-dark border border-success text-white" type="number" name="person-number" id="person-n" placeholder="nombre d'adulte" min="1">
            <br>
            <br>
            <label id="label" for="child-n" style="color:black;" class="input-group-text w-auto bg-success"><font-awesome-icon icon="child" class="" />    <span>|</span></label>
            <input required class="form-control bg-dark border border-success text-white" type="number" name="child-number" id="child-n" placeholder="(moins 12 ans)" >
            </div>
            <br>
            <div >
            <button type="button" class="border-0 rounded w-100 btn bg-success text-light " value="submit">Recherche</button>
            <br>
            <br>
            </div>
            <div class="ps-auto text-center">
            <button type="button" class=" rounded  w-auto btn bg-dark text-success border border-success"> + code promo</button>
            </div>
            <br>
        </form>
    </div>
</section>
<p class="w-auto text-center bg-dark pt-3 pb-4 m-0 text-white">Destinations les plus recherchées :</p>
<section class="bg-success pt-2">
<div >
<ul class="row text-center bg-success rounded mt-2" >
    <li class="col-md rounded p-2 ps-0 d-inline  border border-success"><button class="text-center p-5 border border-dark b-5 bg-dark text-white w-auto rounded"><a class="text-center text-white" href="">this<font-awesome-icon icon="arrow-right" />that</a></button></li>
    <li class="col-md rounded p-2 ps-0 d-inline  border border-success"><button class="text-center p-5 border border-dark b-5 bg-dark text-white w-auto rounded"><a class="text-center text-white" href="">this<font-awesome-icon icon="arrow-right" />that</a></button></li>
    <li class="col-md rounded p-2 ps-0 d-inline  border border-success"><button class="text-center p-5 border border-dark b-5 bg-dark text-white w-auto rounded"><a class="text-center text-white" href="">this<font-awesome-icon icon="arrow-right" />that</a></button></li>
</ul>
</div>
</section>
<p class=" m-0 w-auto text-center bg-dark pb-4 pt-3 text-white "> copyright &copy; 2021 Via</p>
</div>
</template>
    
<script>

export default{
    name : 'body',
    components:{
    }
}

</script>
    
    
<style scoped>
input{
    color: #d8cfe5;
}
#label{
    color: #d8cfe5;
    background-color:#4469c9 ;
    border: #2f4c99;
}
span{
    color: #d8cfe5;
} 
#section-1{
background-image: url("https://www.ratp.fr/sites/default/files/styles/home_couverture_xl/public/2021-09/Bourse-de-commerce-2_0.jpg?h=159f05b0");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
a{
    text-decoration: none;
}
</style>