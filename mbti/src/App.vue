<template>
  <div>
    {{ helloCount }}
    <input v-model="name" type="text" />
    <p v-if="name == 'i'">{{ name }}내향적</p>
    <p v-if="name == 's'">{{ name }}감각적</p>
    <p v-if="name == 't'">{{ name }}사고적</p>
    <p v-if="name == 'j'">{{ name }}판단적</p>
    <p v-if="name == 'istj'">
      {{ name }} 내향적 <br />
      감각적<br />
      사고적<br />
      판단적<br />
    </p>
    <button>성격확인</button>
    {{ mbti }}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
      name: "",
      message: "Hello Vue!",
      mbti: "",
    };
  },
  methods: {
    hello(user) {
      alert(user);
    },
  },
  computed: {
    helloCount() {
      return this.name + this.count;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
