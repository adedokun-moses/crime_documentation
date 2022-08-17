<template>
  <div class="cover">
    <img src="../assets/policebg.png" alt="" />
    <h5>
      Police Is Your Friend <br />
      We are here to protect lives and property
    </h5>
    <p>Shun Police Brutality</p>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => this.$router.push({ path: "/dashboard" }), 4000);
  },
};
</script>

<style scoped>

.cover {
  padding: 0px;
  margin: 0px;
  text-align: center;
  font-size: 30px;
  height: 100vh;
}
.cover img {
  width: 40%;
  display: block;
  margin: 50px auto;
}
</style>