<template>
    <section class="slider-galerija" id="task4">
        <h2 v-scroll-reveal="{ delay: 500 }">Task 4</h2>
        <div class="slider-galerija-slider" v-scroll-reveal="{ delay: 750 }">
            <img class="slider-control-button" src="@/assets/notus-assets/previous.svg" alt="Previous" @click="previous()">
            <div class="slider-images">
                <img v-for="image in sliderImagesVisible" :src="image" :key="image">
            </div>
            <img class="slider-control-button" src="@/assets/notus-assets/next.svg" alt="Next" @click="next()">
        </div>
    </section>
</template>

<style lang="sass">
.slider-galerija
    width: 100vw
    height: 100vh
    background-color: #081B2F
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    h2
        color: #fff
        text-align: center
        margin-top: 60px
        font-size: 50px
        @media (max-width: 1250px)
            margin-top: 40px
            font-size: 40px
        @media (max-width: 700px)
            font-size: 25px
    .slider-galerija-slider
        height: 70%
        width: 70%
        @media (max-width: 1250px)
            width: 90%
            height: 80%
        margin-bottom: 5%
        display: flex
        justify-items: space-between
        align-items: center
        .slider-control-button
            transition: transform .5s ease
            &:hover
                cursor: pointer
                transform: scale(1.1)
        .slider-images
            overflow: hidden
            width: 80%
            height: 80%
            @media (max-width: 1250px)
                width: 70%
                height: 70%
            margin: 0 auto
            display: flex
            justify-content: space-around
            align-items: center
            img
                width: 15vw
                height: 25vw
</style>

<script>
export default {
    mounted() {
        this.sliderImagesVisible = this.sliderImages.splice(0, 3)
        this.sliderImagesInvisible = this.sliderImages.splice(0)
    },

    data() {
        return {
            sliderImages: [
                require("@/assets/notus-assets/notus-task3-img1.jpg"),
                require("@/assets/notus-assets/notus-task3-img2.jpg"),
                require("@/assets/notus-assets/notus-task3-img3.jpg"),
                require("@/assets/notus-assets/notus-task3-img4.jpg"),
            ],
            sliderImagesVisible: [],
            sliderImagesInvisible: [],
        }
    },

    methods: {
        previous() {
            this.sliderImagesInvisible.push(this.sliderImagesVisible.pop())
            this.sliderImagesVisible.unshift(this.sliderImagesInvisible.shift())
        },

        next() {
            this.sliderImagesInvisible.unshift(this.sliderImagesVisible.shift())
            this.sliderImagesVisible.push(this.sliderImagesInvisible.pop())
        },
    }
}
</script>