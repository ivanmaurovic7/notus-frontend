<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
html, body, #app
  overflow-x: hidden

body 
  margin: 0
  #app 
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    *
      font-family: Montserrat  
</style>
