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
    padding: 20px;
    margin: 10px;
  }

  h3 {
    font-size: 1.4rem;
    margin-top: 0px;
    font-weight: 500;
  }

  p {
    margin-bottom: 5px;
    font-size: 17px;
  }

</style>