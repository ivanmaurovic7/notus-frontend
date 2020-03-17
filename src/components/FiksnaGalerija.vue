<template>
    <section class="fiksna-galerija" id="task3">
        <div class="fiksna-galerija-tekst" v-scroll-reveal="{ delay: 500 }">
            <h2>Task 3</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Ut aliquid scire se gaudeant? 
            Illi enim inter se dissentiunt. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Quamquam te quidem video minime esse deterritum.
            </p>
        </div>
        <div class="fiksna-galerija-slike" v-scroll-reveal="{ delay: 750 }">
            <img src="@/assets/notus-assets/notus-task2-img1.jpg" alt="Slika 1" class="slika1">
            <img src="@/assets/notus-assets/notus-task2-img2.jpg" alt="Slika 2" class="slika2">
            <img src="@/assets/notus-assets/notus-task2-img3.jpg" alt="Slika 3" class="slika3">
            <img src="@/assets/notus-assets/notus-task2-img4.jpg" alt="Slika 4" class="slika4">
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">
.fiksna-galerija
    width: 100vw
    background: #FFFFFF
    padding: 20px 20vw
    @media (max-width: 1250px)
        padding: 20px 0
    box-sizing: border-box
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    .fiksna-galerija-tekst
        margin-bottom: 100px
        @media (max-width: 1250px)
            margin-bottom: 70px
        h2
            color: #081B2F
            text-align: center
            font-size: 50px
            @media (max-width: 1250px)
                font-size: 40px
            @media (max-width: 700px)
                font-size: 25px
        p
            color: #5C5C5C
            text-align: center
            margin: 0 10vw
            @media (max-width: 1250px)
                font-size: 14px
    .fiksna-galerija-slike
        padding-bottom: 70px
        display: grid
        grid-template-areas: "slika4 slika1 slika2" "slika4 slika3 slika2"
        @media (max-width: 1250px)
            grid-template-areas: "slika4 slika2" "slika4 slika2" "slika1 slika1" "slika3 slika3"
        .slika1
            padding-bottom: 0
            grid-area: slika1
        .slika2
            margin: auto auto auto 20px
            grid-area: slika2
        .slika3
            padding-top: 20px
            grid-area: slika3
        .slika4
            margin: auto 20px auto auto
            grid-area: slika4
        .slika2, .slika4
            width: 12vw
            height: 20vw
            @media (max-width: 1250px)
                padding-bottom: 30px
                width: 30vw
                height: auto
        .slika1, .slika3
            margin: auto
            width: 21vw
            height: 13vw
            @media (max-width: 1250px)
                width: calc(60vw + 40px)
                height: auto    
</style>