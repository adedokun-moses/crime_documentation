<template>
  <Nav />
  <div>
    <Intro :title="title" />
  </div>
  <form  @submit.prevent="saveStatement()">
    <h4>Statement Should Be Imput Accordingly</h4>
    <div class="formgroup">
      <label for="witness"> Suspect Name</label><br />
      <input type="text" placeholder="First Name" v-model="fname" />
      <input type="text" placeholder="Middle Name" v-model="mname" />
      <input type="text" placeholder=" Surname" v-model="sname" />
    </div>
    <div class="statement">
      <label for="witness">Suspect Phone Number</label><br />
      <input type="text" placeholder="Phone Number" />
    </div>

    <div class="statement">
      <label for="witness">Suspect Address</label><br />
      <input type="text" placeholder=" Address" />
    </div>

    <div class="statement">
      <label for="witness">Suspect Statement</label><br />
      <textarea name="" id="" cols="40" rows="10"></textarea>
    </div>

    <p>
      Ignore the Witness Phase if there are no witness at this particular moment
    </p>
    <div class="formgroup">
      <label for="witness">Witness Name</label><br />
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Middle Name" />
      <input type="text" placeholder=" Surname" />
    </div>
    <div class="statement">
      <label for="witness">Suspect Statement</label><br />
      <textarea name="" id="" cols="40" rows="10"></textarea>
    </div>
    <div class="statement">
      <label for="witness">Witness Statement</label><br />
      <textarea name="" id="" cols="40" rows="10"></textarea>
    </div>
    <div class="submitbtn">
      <button style="background: green">
        Submit Statement
      </button>
      <button style="background: red" @click="homebtn()">
        Return To Home Page
      </button>
    </div>
  </form>
  <Footer />
</template>

<script>

import Nav from "../components/nav.vue";
//import Intro from "../components/intro.vue";
import Footer from "../components/footer.vue";
import { defineAsyncComponent } from 'vue'
const Intro = defineAsyncComponent(() =>  import('../components/intro.vue'));

export default {
  components: { Nav, Intro, Footer },
  data() {
    return {
      title: "Suspect Statement ",
      fname: "",
      mname: "",
      sname: "",
    };
  },

  methods: {
    homebtn() {

      this.$router.push("/dashboard");
    },
    saveStatement() {
      if (this.fname == "" || this.mname == "" || this.sname == "") {
        alert("All Input Must Be Filled");
      } else {
        alert("Suspect Statement Saved");
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>
<style scoped>
@import "../../public/cssfolder/criminalcss.css";
</style>