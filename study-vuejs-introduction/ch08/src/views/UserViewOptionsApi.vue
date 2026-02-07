<script>
export default {
  beforeCreate() {
    const id = this.$route.params.id;
    console.log(id);
  },
  beforeMount() {
    const name = this.$route.query.name;
    const age = this.$route.query.age;
    console.log(name);
    console.log(age);
  },
}
</script>

<template>
  <h1>UserViewOptionsApi</h1>
  <h1>id: {{ $route.params.id }}</h1>
</template>
