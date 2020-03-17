<template>
    <nav class="menu">
        <img class="menu-button" v-if="!menuActive" src="@/assets/notus-assets/notus-meni.svg" alt="Menu" @click="menuActive = true">
        <img class="menu-button" v-if="menuActive" src="@/assets/notus-assets/notus-meni-close.svg" alt="Menu" @click="menuActive = false">
        <transition name="menu">
            <div v-show="menuActive" class="menu-background">
            </div>
        </transition>
        <transition name="menu-content-animation">
            <div class="menu-content" v-if="menuActive">
                <img class="logo" src="@/assets/notus-assets/Notus-logo-meni.svg" alt="Notus logo">
                <div class="menu-items">
                    <span>Task 6 - Menu</span>
                    <a href="#task3" @click="menuActive = false">TASK 3</a>
                    <a href="#task4" @click="menuActive = false">TASK 4</a>
                    <a href="#task5" @click="menuActive = false">TASK 5</a>
                </div>
            </div>
        </transition>
    </nav>
</template>

<style lang="sass">
.menu
    position: fixed
    top: 0
    left: 0
    z-index: 90
    .menu-button
        z-index: 3
        position: fixed
        top: 50px
        left: 50px
        transition: transform .5s ease
        &:hover
            cursor: pointer
    .menu-background
        z-index: 1
        position: absolute
        left: 0
        top: 0
        transform-origin: left
        width: 100vw
        height: 100vh
        background: #F89D36 
    .menu-content
        z-index: 2
        position: absolute
        left: 0
        top: 0
        width: 100vw
        height: 100vh
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: center
        padding: 50px 0 30vh 0
        box-sizing: border-box
        .logo
            width: 120px
            height: 120px
            @media (max-width: 1250px)
                width: 100px
                height: 100px
        .menu-items
            display: flex
            flex-direction: column
            width: 70vw
            @media (max-width: 1250px) and (orientation: landscape)
                margin-top: -50px
            span
                color: #081B2F
                display: block
                margin-bottom: 30px
            a
                color: #fff
                text-decoration: none
                margin-bottom: 20px
                font-size: 50px
                @media (max-width: 1250px)
                    font-size: 30px
                &:hover
                    text-decoration: underline

.menu-enter-active, .menu-leave-active, .menu-content-animation-enter-active, .menu-content-animation-leave-active
    transition: all .5s ease

.menu-leave-active, .menu-content-animation-enter-active
    transition-delay: .5s

.menu-enter, .menu-leave-to
    transform: scaleX(0)

.menu-content-animation-enter, .menu-content-animation-leave-to
    opacity: 0

</style>

<script>
export default {
    data() {
        return {
            menuActive: false
        }
    }
}
</script>