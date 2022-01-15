<template>
  <div class="hour-forecast">
     <p>{{hour.time}}</p>
     <h3>{{hour.temp}}° {{unit}}</h3>
     <p>{{hour.weather}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Hour',
    props: {
      hour: Object,
      unit: String
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
    width: 45px;
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 0px;
    font-weight: 500;
  }

  p {
    margin-bottom: 7px;
    width: auto;
  }

</style>