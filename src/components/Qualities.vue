<template>
  <div class="Qualities">
    <div class="Quality" v-for="q in 10" :key="q">
      {{q}}
      </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data () {
    return {}
  }
};
</script>
