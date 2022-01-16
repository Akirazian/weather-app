<template>
  <div class="hour-forecast">
     <p>{{hour.time}}</p>
     <h3 class="temp">{{hour.temp}}° {{unit}}</h3>
     <img :src="`${publicPath}${hour.weather}`" alt="">
  </div>
</template>

<script>
  export default {
    name: 'Hour',
    props: {
      hour: Object,
      unit: String
    },
    data () {
      return {
        publicPath: process.env.BASE_URL  //Per Vue 3's Docs, used to link to the public folder for dynamic image path handling
      }
    }
  }
</script>

<style scoped>
  .hour-forecast {
    flex: 0 0 50px;
    display: flex;
    flex-direction: column;
    background: rgb(218, 217, 217);
    padding: 15px;
    margin: 5px;
    width: 50px;
  }

  h3 {
    font-size: 1.3rem;
    margin-top: 0px;
    font-weight: 500;
  }

  p {
    margin-bottom: 7px;
    width: auto;
  }

  .temp {
    white-space: nowrap;
    overflow: hidden;
  }

</style>