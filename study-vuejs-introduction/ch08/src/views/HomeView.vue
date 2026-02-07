<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    replaceWithAbout() {
      this.$router.replace('/about');
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    },
    optionsAPI() {
      this.$router.push({ name: 'user-id', query: { name: 'mike'}, params: { id: 'mike' }});
    },
  }
}
</script>

<template>
  <h1>Home View</h1>
  <h1>URL(path, params, query) 사용</h1>
  <h2>Options API</h2>
  <nav>
    <a href="#" @click.prevent="$router.push('/')">.push</a>
    <a href="#" @click.prevent="$router.replace('/about')">.replace</a>
    <a href="#" @click.prevent="$router.go(-1)">.go(-1)</a>
    <a href="#" @click.prevent="$router.forward()">.forward</a>
    <a href="#" @click.prevent="$router.back()">.back</a>
  </nav>
  <br>
  <h1>라우트의 name 속성 사용</h1>
  <h2>선언 방식(template 내에서)</h2>
  <nav>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'user-id', params: { id: 'mike' } }">User</RouterLink>
    <RouterLink :to="{ name: 'about', query: { lang: 'ko' } }">about</RouterLink>
    <RouterLink :to="{ name: 'user-id', params: { id: 'mike' }, query: { lang: 'ko' } }">user</RouterLink>
  </nav>
  <h2 id="abc">프로그래밍 방식 팀색(script 내에서)</h2>
  <h3 id="def">Options 방식</h3>
  <a href="#" @click.prevent="optionsAPI()">user</a>
</template>
