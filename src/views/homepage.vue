<template>
  <div class="cover">
    <div class="det">
      <img src="../assets/policebg.png" alt="" />
      <h5>
        Police Is Your Friend <br />
        We are here to protect lives and property
      </h5>
      <p>Shun Police Brutality</p>
    </div>
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
.body {
  background: white;
}
.cover {
  padding: 0px;
  margin: 0px;
  text-align: center;
  background: white;
  font-size: 30px;
  height: 100vh;
}
.cover img {
  width: 40%;
  display: block;
  margin: 0px auto;
  padding: 50px 0px;
}
.cover p {
  font-weight: bolder;
  font-size: 40px;
}

@media only screen and (max-width: 600px) {
  .cover img {
    width: 100%;
    margin: 0px auto;
    padding: 50px 0px;
  }
}
</style>