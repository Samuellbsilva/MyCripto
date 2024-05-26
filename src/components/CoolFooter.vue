
<template>
    

<footer class="d-flex h-25 bg-dark flex-wrap pt-5 pr-0 pl-0 pb-5 m-0 mgbot " >
    <div class="d-flex w-25 align-items-center justify-content-center ">
   <p style="color:gray;" class="pl-2 pfter">Samuellbsilva©</p>
</div>
    <div class="d-flex w-50">
        <router-link to="/" class="d-flex flex-column align-items-center justify-content-center w-100"><img style="width:10%" src="../assets/icons8-crypto-120.png" alt="Crypto">
    <p class="text-light align-items-center"><strong>MyCrypto</strong></p></router-link>
</div>

    <nav class=" d-flex w-25 navfter justify-content-center flex-rown ">
    <div class="d-flex flex-column w-50 justify-content-center" >
        <a href="https://github.com/Samuellbsilva" class="">
            <img class="rounded-circle img" src="../assets/SocialNetworks/icons8-github.gif" alt="GitHub">
        <p class="text-light pfter"><strong>Github</strong></p>
        </a>
    </div>
    <div class="d-flex flex-column w-50 justify-content-center" >
        <a href="https://www.instagram.com/samuel_lemos777" class="padfter ">
            <img class="rounded-circle anim img" src="../assets/SocialNetworks/icons8-instagram.svg" alt="GitHub">
        <p class="text-light pfter"><strong>Instagram</strong></p>
        </a>
    </div>
  
  </nav>
</footer>

</template>

<script>

export default {        
}
    </script>

    <style>
*{
    text-decoration: none !important;
}
.anim{
    transition: transform 0.3s;

}
@keyframes pulse {
        0% {
            transform: scale(1.0);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1.0);
        }
    }
    .anim{
        animation: pulse 2s infinite;
    }
img:hover{
    animation:none;
    transform: scale(1.1);
}

.img{
width:75%;

}
.padfter{
    padding-left:3%
}
.pfter{
    font-size:1.8vw;
}
@media (max-width: 456px) { 
    .pfter
{
    font-size:2.5vw;
}
 }
 @media (min-width: 556px) { 
.img{
width:30%;
}
.padfter{
    padding-left:0%
}
 }
 .mgbot{
    margin:0%;
 }
 
</style>