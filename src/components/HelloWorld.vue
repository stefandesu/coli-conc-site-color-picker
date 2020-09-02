<template>
  <div>
    Color 1: <div id="color1" />
    Color 2: <div id="color2" />
    <br>
    <template
      v-for="i in 10"
      :key="i">
      <section
        :style="`background-color: ${i % 2 == 1 ? color1 : color2};`">
        {{ i }}
      </section>
    </template>
  </div>
</template>

<script>
import Pickr from '@simonwep/pickr'
export default {
  name: 'HelloWorld',
  data() {
    return {
      color1: "#F6F4F4",
      picker1: null,
      color2: "#E9E8E1",
      picker2: null,
    }
  },
  watch: {
    $route({ query }) {
      const { color1, color2 } = query
      if (color1 && color1 != this.color1) {
        this.color1 = color1
        setTimeout(() => {
          this.picker1.setColor(color1)
        }, 100)
      }
      if (color2 && color2 != this.color2) {
        this.color2 = color2
        setTimeout(() => {
          this.picker2.setColor(color2)
        }, 100)
      }
    },
    color1() {
      this.$router.push({
        query: {
          color1: this.color1,
          color2: this.color2,
        },
      })
    },
    color2() {
      this.$router.push({
        query: {
          color1: this.color1,
          color2: this.color2,
        },
      })
    },
  },
  mounted() {
    console.log(this.$route)
    let options = {
      el: '#color1',
      theme: 'classic',
      default: this.color1,
      closeOnScroll: true,
      comparison: false,
      swatches: [

      ],
      components: {
          preview: true,
          opacity: true,
          hue: true,
          interaction: {
              hex: true,
              rgba: true,
              hsla: true,
              hsva: true,
              cmyk: true,
              input: true,
              clear: true,
              save: true
          }
      }
    }
    this.picker1 = Pickr.create(options)
    options.el = "#color2"
    options.default = this.color2
    this.picker2 = Pickr.create(options)
    this.picker1.on("change", color => {
      const hex = color ? color.toHEXA().toString() : ""
      this.color1 = hex
    })
    this.picker2.on("change", color => {
      const hex = color ? color.toHEXA().toString() : ""
      this.color2 = hex
    })
    this.picker1.on("save", () => this.picker1.hide())
    this.picker2.on("save", () => this.picker2.hide())
  },
}
</script>

<style scoped>
section {
  padding: 50px 0;
}
</style>
