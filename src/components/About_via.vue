<template>
    <div>
        <Header/>
        <body class="mt-5">
            <div class="container mt-3">
            <p class="fs-1 text-center"> Groupe Via</p>
            </div>
            <img id="image-1" src="/assets/images/woman-train-happy.jpg" alt="happy-buisness-woman-train-phone">
            <div class="container">
                <p class="fs-1 pt-3"><font-awesome-icon class="me-4" icon="users"/>Qui sommes-nous ?</p>
                <p class="fs-3">Le groupe <span class="text-success">Via</span> propose une offre complète de solutions de mobilité.</p>
                <div class="row">
                <p class="fs-5 col ps-5"> <span class="text-success">Via</span> est un opérateur de transports urbains. Tous les jours, on se mobilisent pour recueillir, exploiter, entretenir et moderniser les informations de transport collectif et répondre ainsi aux besoins de mobilité des populations. Nous exploitons au quotidien le mode de transport des trains régionaux, et sommes par ailleurs présents sur la chaîne des nouvelles mobilités</p>
                <img id="image-2" src="/assets/images/people-brainstorming.jpg" alt="people working together brainstorming" class="col-md-4">
                </div>
                <hr>
                <p class="fs-1">Nos valeurs partagées au quotidien</p>
                <p class="fs-3">Rigeur</p>
                <div class="row">
                    <p class="fs-5 col-9 ps-5"><span class="text-success">Via</span> veille au respect des règles et des procédures, tout en adoptant une attitude responsable, des comportements professionnels et en persévérant dans les bonnes pratiques. </p>
                    <p class=" col fs-1 text-success text-center"><font-awesome-icon icon="stopwatch"/></p>
                </div>
                <p class="fs-3">Excellence</p>
                <div class="row">
                    <p class="fs-5 col-9 ps-5"><span class="text-success">Via</span> s’améliore en permanence avec l’envie de se dépasser, tout en aspirant à un avenir meilleur dont les maîtres-mots sont la performance et le professionnalisme au service de ses parties prenantes.</p>
                    <p class=" col fs-1 text-success text-center"><font-awesome-icon icon="thumbs-up"/></p>
                </div>
                <p class="fs-3">Transparence</p>
                <div class="row">
                    <p class="fs-5 col-9 ps-5"><span class="text-success">Via</span> communique ouvertement, en favorisant l’écoute et le respect de l’opinion de l’autre. Il instaure un climat de confiance et de compréhension basé sur la concertation et la sincérité.</p>
                    <p class=" col fs-1 text-success text-center"><font-awesome-icon icon="comments"/></p>
                </div>
                <p class="fs-3">Engagement</p>
                <div class="row">
                    <p class="fs-5 col-9 ps-5"><span class="text-success">Via</span> s’implique et s’investit pour atteindre les objectifs fixés, en privilégiant le travail d’équipe, l’esprit d’initiative et en plaçant la satisfaction des parties prenantes au cœur de leurs préoccupations.</p>
                    <p class=" col fs-1 text-success text-center"><font-awesome-icon icon="user-cog"/><font-awesome-icon icon="cogs"/></p>
                </div>
                <hr>
                <p class="fs-1"><font-awesome-icon class="me-4" icon="bullseye"/>Nos objectifs</p>

                <div class="row pb-3">
                    <p class="fs-5 col ps-5"><font-awesome-icon class="text-success me-1" icon="circle"/>Nous sommes persuadés d’atteindre , d’ici fin 2021 , une distance qui , certainement dépassera les 200 kilomètres en terme de voies de tunnel grâce à l’intervention de compétents tunneliers.</p>
                    <img id="image-2" src="/assets/images/chantier-trains.jpg" alt="chantier"  class="col-md-4">
                </div>
                <hr>
                <div class="row pb-3">
                    <p class="fs-5 col ps-5"><font-awesome-icon class="text-success me-1" icon="circle"/>Nos équipes travaillent sur des projets qui permettront d’étendre le réseau ferroviaire vers d’autres destinations , l’une différente de l’autre tout en rendant le temps de trajet plus court.</p>
                    <img id="image-2" src="/assets/images/carte-hp.jpg" alt="carte-paris"  class="col-md-4">
                </div>
                <hr>
                <div class="row pb-3">
                    <p class="fs-5 col ps-5"><font-awesome-icon class="text-success me-1" icon="circle"/> Les ingénieurs de <span class="text-success">Via</span> travaillent , à l’aide des avis des utilisateurs, sur l’amélioration de nôtre site Web pour en faire un environnement  plus confortable pour l’expérience de l’utilisateur</p>
                    <img id="image-2" src="/assets/images/happy-phone-user.jpg" alt="happy-person-phone"  class="col-md-4">
                </div>
            </div>
        </body>
        <p class=" m-0 w-auto text-center bg-dark pb-4 pt-3 text-white "> copyright &copy; 2021 Via</p>
    </div>
</template>


<script>
import Header from './Header.vue'
export default {
    
    name:'Main2',
    components:{
        Header,
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