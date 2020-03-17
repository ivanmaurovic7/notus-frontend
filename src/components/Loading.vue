<template>
    <transition name="slide-up">
        <section class="loading" v-show="showComponent">
            <div class="loading-content">
                <img src="@/assets/notus-assets/Notus-logo-loading.svg" alt="Loading...">
                <span>Task 1 - Loading</span>
            </div>
        </section>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            showComponent: true,
        }
    },

    mounted() {
        this.showComponent = false
    }
}
</script>

<style lang="sass">
.loading
    position: fixed
    z-index: 100
    width: 100vw
    height: 100vh
    background: #081B2F
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
    .loading-content
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        width: 100%
        height: 100%
        img
            display: block
            width: 200px
            height: 200px
            @media (max-width: 1250px)
                width: 100px
                height: 100px
        span
            margin-top: 20px
            display: block
            color: #32485F
            @media (max-width: 1250px)
                font-size: 12px

.slide-up-enter-active, .slide-up-leave-active 
  transition: all 1s 1s ease

.slide-up-enter, .slide-up-leave-to
  transform: translateY(-100%)
</style>