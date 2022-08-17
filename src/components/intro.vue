<template>
    <div class="intro">
        <h5> {{title}}</h5>
      
      
    </div>
</template>

<script>
export default {
   props: ["title"]
}
</script>
<style scoped>
.intro{
    background: url(../assets/police11.webp);
    background-size: cover;
      height: 300px;
}
.intro h5{
    margin: 0px;
    text-align: center;
    padding: 140px 0px;
    font-size: 50px;
    color: white;
}

</style>