<template>
  <div class="Carousel">
    <div class="Slide" v-bind:style="{ backgroundImage: 'url(' + this.Images[this.SelectedImage].URL + ')' }"></div>
    <div class="SlideButtons">
      <div class="SlideButton" v-for="(Image, index) in Images" :key="Image.Key" @click="setImage(index)">{{Image.Title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data () {
    return {
      Images: [
        {Title: 'Image1', URL: 'https://store-images.s-microsoft.com/image/apps.23901.13580148406338518.ae7b55e8-e887-4e12-a21d-13264411f09e.f35eb260-9f1f-487d-9c02-9a11da117edc?mode=scale&q=90&h=1080&w=1920&background=%230078D7', Key: 'SlideButton0'},
        {Title: 'Image2', URL: 'https://i.ytimg.com/vi/5fIAPcVdZO8/maxresdefault.jpg', Key: 'SlideButton1'},
        {Title: 'Image3', URL: 'https://cdn2.unrealengine.com/Unreal+Engine%2Fblog%2Fhow-studio-wildcard-s-extinction-expansion-evolves-the-ark-franchise%2FFEATURE_ARK_Extinction-1920x960-8f45bf76f38ba6b6d19e29d6b1950e22ecccdc24.jpg', Key: 'SlideButton2'}
      ],
      SelectedImage: 0
    }
  },
  methods: {
    setImage (Image) {
      this.SelectedImage = Image
    }
  }
};
</script>
