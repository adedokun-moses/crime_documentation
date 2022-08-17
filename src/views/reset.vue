<template>
  <body>
    <div class="formcontainer">
      <div class="details" style="flex-basis: 40%">
        <img src="../assets/policebg.png" alt="" />
        <!--   <img src="../assets/policebg.png" alt="" /> -->
        <h5>Nigeria Police Force</h5>
        <p>Police is your friend</p>
      </div>
      <div class="details2" style="flex-basis: 100%">
        <form>
          <img src="../assets/policebg.png" alt="" />
          <h5>Reset Password</h5>
          <input
            type="email"
            v-model="oracle_no"
            placeholder="Input Your Oracle Number"
          />

          <button type="button" @click="reset()">Reset Password</button>
        </form>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      oracle_no: "",
    };
  },
  methods: {
    reset() {
      if (this.oracle_no == "") {
        alert("Input Your Oracle Number To Reset Password");
        return false;
      } else {
        alert("Password Reset, Wait a moment and re-login");
        setTimeout(() => this.$router.push({ path: "/" }), 1000);
      }
    },
  },
};
</script>

<style scoped>
body {
  padding: 3px;
  background-image: linear-gradient(to right, rgb(106, 122, 218), white);
}

.formcontainer {
  display: flex;
  align-items: stretch;
  background-color: white;
  width: 70%;
  margin: 75px auto;
  height: 500px;
  box-shadow: 3px 5px 5px 3px black;
}
.formcontainer > div {
  margin: 0px;
  font-size: 30px;
}
.details {
  background: rgb(112, 112, 247);
  padding: 0px;
  margin: 0px;
}

.details h5,
p {
  padding: 0px;
  margin: 0px;
  text-align: center;
  font-weight: bold;
}

.details p {
  font-size: 20px;
}
.details img {
  width: 100%;
  margin-top: 120px;
}

.details2 form {
  width: 100%;
  margin-top: 60px;
  text-align: center;
}

.details2 input {
  width: 80%;
  margin: 60px auto;
  display: block;
  padding: 13px;
  font-size: 20px;
  border: none;
  outline: none;
  border-bottom: solid black 2px;
}
.details2 input:focus {
  background: black;
  border-radius: 3px;
  color: white;
  transition: ease-in 2s background;
  font-weight: bold;
}

.details2 button {
  background: rgb(112, 112, 247);
  width: 50%;
  margin: 20px auto;
  padding: 13px;
  color: aliceblue;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
}

.details2 p {
  font-size: 20px;
}
.details2 a {
  text-decoration: none;
}
.details2 img {
  display: none;
}

@media only screen and (max-width: 600px) {
  .formcontainer {
    display: flex;
    width: 90%;
  }
  .details2 form {
    margin-top: 10px;
  }
  .details {
    display: none;
  }
  .details2 {
    display: block;
    width: 100%;
  }
  .details2 img {
    display: block;
    width: 40%;
    margin: auto;
    padding: 0px;
  }
}
</style>