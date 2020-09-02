<template>
  <div>
    Color 1: <input v-model="color1" /> Color 2: <input v-model="color2" />
    <br><br>
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
export default {
  name: 'HelloWorld',
  data() {
    return {
      color1: "#F6F4F4",
      color2: "#E9E8E1",
    }
  },
  watch: {
    $route({ query }) {
      const { color1, color2 } = query
      if (color1 && color1 != this.color1) {
        this.color1 = color1
      }
      if (color2 && color2 != this.color2) {
        this.color2 = color2
      }
    },
    color1() {
      this.$router.push({
        query: {
          color1: this.color1,
        },
      })
    },
    color2() {
      this.$router.push({
        query: {
          color2: this.color2,
        },
      })
    },
  },
}
</script>

<style scoped>
section {
  padding: 50px 0;
}
</style>
