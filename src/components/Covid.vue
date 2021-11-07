<template>
    <div>
        <Header/>
<div>
        <Header/>
        <body class="mt-5">
            <div class="container mt-3">
                <p class="fs-1 text-center">Nos restrictions envers le COVID-19</p>
            </div>
            <img id="image-1" src="./images/covid-image.jpg" alt="happy-buisness-woman-train-phone">
            <div class="container">
                <p class="fs-1 pt-3 pb-3 text-center "><font-awesome-icon class="text-success me-4" icon="male"/> <font-awesome-icon class="text-success" icon="arrow-left"/><span class=" text-success fs-1">2m</span><font-awesome-icon class="text-success" icon="arrow-right"/> <font-awesome-icon class="ms-4 text-success me-2" icon="male"/><span class="text-center">Distanciation </span></p>
                <p class="fs-4">nous avons mis au point des indications pour favoriser la distanciation sociale</p>
                <p class="fs-1 pb-3 text-center"><font-awesome-icon class="text-success me-4" icon="head-side-mask"/>Port du masque médical</p>
                <p class="fs-4">nous avons rendu le port du masque obligatoire pendant le trajet</p>
                <p class="fs-1 pb-3 text-center"><font-awesome-icon class="text-success me-4" icon="address-card"/>Documents</p>
                <p class="fs-4">Le passe vaccinale ou le text PCR est obligatoire pour profiter des services</p>                     
            </div>
        </body>
    </div>
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    name:'Covid',
    components:{
        Header,
    }
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

</style>