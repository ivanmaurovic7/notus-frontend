<template>
    <section class="slider">
        <div class="slider-overlay"></div>
        <div class="slider-images" :style="{width: `${100 * this.sliderImages.length}vw`, transform: `translateX(-${100 * this.imageIndex}vw)`}">
            <img v-for="(image, index) in sliderImages" :key="image" :src="image" :alt="`Slider image ${index}`">
        </div>
        <div class="slider-fixed-content">
            <img class="logo" src="@/assets/notus-assets/Notus-logo-main.svg" alt="Notus logo">
            <div class="slider-middle-content">
                <div>
                    <h2 :style="{transform: showTextInMiddle ? 'translateY(0%)' : 'translateY(120%)'}">Notus Front-end test</h2>
                </div>
                <div>
                    <small :style="{transform: showTextInMiddle ? 'translateY(0%)' : 'translateY(120%)'}">Task 2 - slider</small>
                </div>
            </div>
            <div class="slider-controls">
                <img class="slider-control-button" src="@/assets/notus-assets/previous.svg" alt="Previous" @click="imageIndex--">
                <small>{{imageIndex+1}} / {{this.sliderImages.length}}</small>
                <img class="slider-control-button" src="@/assets/notus-assets/next.svg" alt="Next" @click="imageIndex++">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            this.showTextInMiddle = true
        }, 1500)
    },

    data() {
        return {
            sliderImages: [
                require("@/assets/notus-assets/notus-task1-img1.jpg"),
                require("@/assets/notus-assets/notus-task1-img2.jpg"),
                require("@/assets/notus-assets/notus-task1-img3.jpg"),
            ],
            imageIndex: 0,
            showTextInMiddle: false,
        }
    },

    watch: {
        imageIndex() {
            if(this.imageIndex < 0) {
                this.imageIndex = this.sliderImages.length - 1
            }
            
            if(this.imageIndex > this.sliderImages.length - 1) {
                this.imageIndex = 0
            } 
        }
    }
}
</script>

<style lang="sass">
.slider
    width: 100vw
    height: 100vh
    position: relative
    overflow: hidden
    display: flex
    align-items: center
    background: #081B2F
    .slider-overlay
        background: rgb(8, 27, 47, .7)
        position: absolute
        z-index: 1
        width: 100vw
        height: 100vh
    .slider-images
        margin: auto
        display: flex
        transition: all .5s ease
        img
            width: 100vw
    .slider-fixed-content
        position: absolute
        z-index: 2
        width: 100vw
        height: 100vh
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: center
        .logo
            margin-top: 50px
            width: 120px
            height: 120px
            @media (max-width: 1250px)
                width: 100px
                height: 100px
        .slider-middle-content
            div
                overflow: hidden
                *
                    transition: all 1s ease
                h2
                    color: #fff
                    margin-bottom: 20px
                    font-size: 50px
                    @media (max-width: 1250px)
                        font-size: 40px
                    @media (max-width: 700px)
                        font-size: 20px
                small
                    display: block
                    text-align: center
                    color: #fff
                    transition-delay: .25s
        .slider-controls
            width: 150px
            height: 60px
            margin-top: 20px
            margin-bottom: 60px
            display: flex
            justify-content: space-around
            align-items: center
            .slider-control-button
                transition: transform .5s ease
                &:hover
                    cursor: pointer
                    transform: scale(1.1)
            small
                display: block
                font-weight: bold
                color: #fff
</style>