<template>
  <body>
    <div class="formcontainer">
      <div class="details" style="flex-basis: 30%">
        <img src="../assets/policebg.png" alt="" />
          
      </div>
      <div class="details2" style="flex-basis: 100%">
        <form  >
          <img src="../assets/policebg.png" alt="" />
          <h5>Log In</h5>
          <input type="text" v-model="oracle_no" placeholder="Oracle Number" />
          <h4 style="color: red; font-size: 13px; margin: 0px; padding: 0px">
            {{ error_msg }}
          </h4>
          <input type="password" v-model="password" placeholder="Password" />
           <h4 style="color: red; font-size: 13px; margin: 0px; padding: 0px">
             {{ error_msg_pass }}
          </h4>
        

          <button type="button" @click="home()">Log In</button>
          <p>Forgot Password? <router-link to="/reset">Reset Here</router-link></p>
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
      password: "",
      error_msg: "",
      error_msg_pass: "",
    };
  },
  methods: {
    home() {
      //alert("Welcome");
      // console.log('submitted')

      this.error_msg ="";
      this.error_msg_pass ="";
    /*   if(this.oracle_no == ""){
        this.error_msg = "oracle number can not be empty";
        return false
      }
      if(this.error_msg_pass == ""){
          this.error_msg_pass = "password number can not be empty";
          return false
      } else{
             this.$router.push("/homepage");

      } */
 
      if (this.oracle_no == "") {
        this.error_msg = "Oracle number can not be empty";
        return false
      } else if (this.password == "") {
          this.error_msg_pass = "Password number can not be empty";
          return false
        } else{
            this.$router.push("/homepage");
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
  margin: 55px auto;
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

  height: 200px;
  margin-top: 100px;

}

.details2 form {
  width: 100%;
  margin-top: 60px;
  text-align: center;
}

.details2 input {
  width: 80%;
  margin: 30px auto;
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
  body {
  padding: 3px;
  background-image: linear-gradient(to right, rgb(106, 122, 218), white);
  height: 720px;

}
  .formcontainer {
    display: flex;
    width: 100%;
     height: 500px;
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
    margin: 10px auto;
    padding: 0px;
  }
}
</style>