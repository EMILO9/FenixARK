<template>
  <div class="Home">
    <Carousel/>
    <Qualities/>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import Qualities from '../components/Qualities'
export default {
  name: "Home",
  components: { Carousel, Qualities }
};
</script>
