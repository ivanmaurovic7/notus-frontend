<template>
    <footer>
        <span class="footer-top">© 2019. Notus IT d.o.o.</span>
        <div class="footer-sticky">
            <img src="@/assets/notus-assets/Notus-logo-footer.svg" alt="Notus logo">
        </div>
    </footer>
</template>

<style lang="sass">
footer
    width: 100vw
    height: 200px
    position: relative
    .footer-top
        position: fixed
        display: block
        text-align: center
        width: 80vw
        padding: 30px 0
        margin: auto
        color: #fff
        position: relative
        bottom: 40px
        background-color: #42BEB2
    .footer-sticky
        position: fixed
        z-index: -1
        bottom: 0
        background-color: #081B2F
        width: 100vw
        height: 200px
        img
            position: absolute
            bottom: 50px
            left: 0
            right: 0
            margin: auto
</style>