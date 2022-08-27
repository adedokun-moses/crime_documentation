<template>
  <nav class="desktop">
    <div class="logo">
      <router-link to="/dashboard">
        <img src="../assets/pollogo.jpg" alt="" />
        <h5>
          Nigeria <br />
          Police Force
        </h5>
      </router-link>
    </div>

    <div class="nav_links">
      <router-link to="/convictedcase">Upload New Convict Case</router-link>
      <router-link to="/tracking">Track Criminal Record</router-link>
    </div>

    <div class="log">
      <router-link class="log__" to="/about">Know Your Right</router-link>
      <a href="#" class="log_" @click="logout()"> Log Out </a>
    </div>
  </nav>

  <nav class="mobile">
    <div class="logo">
      <router-link to="/dashboard">
        <img src="../assets/pollogo.jpg" alt="" />
        <h5>
          Nigeria <br />
          Police Force
        </h5>
      </router-link>
    </div>

    <div class="nav_links">
      <router-link to="/dashboard">
        <i class="fa fa-home"> <p style="margin-top: 7px">Home</p></i>
      </router-link>

      <router-link to="/convictedcase">
        <i class="fa fa-file"> <p style="margin-top: 7px">New Case</p></i>
      </router-link>
      <router-link to="/tracking">
        <i class="fa fa-history"> <p style="margin-top: 7px">Track Case</p></i>
      </router-link>

      <router-link class="log__" to="/about">
        <i class="fa fa-handshake-o">
          <p style="margin-top: 7px">Your Right</p>
        </i></router-link
      >
      <a href="#" class="log_" @click="logout()">
        <i class="fa fa-key fa-1x"
          ><p style="margin-top: 7px">Log Out</p>
        </i></a
      >
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      //mobilenav: false
    };
  },
  methods: {
    logout() {
      this.$router.push("/");
    },

    /*   btn_toggle(){
      if(this.mobilenav == true){
          return (this.mobilenav = false);
      }
         return(this.mobilenav = true)
        
    } */
  },
};
</script>

<style scoped>
.mobile {
  display: none;
}
.desktop {
  height: 70px;
  display: flex;
  align-items: center;
  margin: 0px;
  border-radius: 2px;
  position: fixed;
  background: white;
  z-index: 1;
  width: 100%;
  top: 0;
}
nav > div {
  width: 100%;
}
nav img {
  width: 10%;
}
nav a {
  padding: 0px 10px;
  text-decoration: none;
  color: black;
}
.logo a {
  display: flex;
  align-items: center;
  color: blue;
}

.logo h5 {
  display: inline-block;
  font-size: 15px;
  text-align: center;
}

.log {
  text-align: right;
}

.log_ {
  background: red;
  padding: 10px 13px;
  border-radius: 3px;
  margin: 0px 5px;
  color: white;
}

.log_:hover {
  background: darkblue;
  padding: 10px 13px;
  border-radius: 3px;
  margin: 0px 5px;
  color: white;
}
.nav_links a {
  padding: 10px 8px;
  border-radius: 3px;
  margin: 0px 5px;
  text-align: center;
}

.nav_links a:hover {
  background: darkblue;
  padding: 10px 8px;
  border-radius: 3px;
  margin: 0px 5px;
  color: white;
}

.log__:hover {
  background: darkblue;
  padding: 10px 13px;
  border-radius: 3px;
  margin: 0px 5px;
  color: white;
}

@media only screen and (max-width: 600px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }

  .nav_links {
    position: fixed;
    background: white;
    width: 100%;
    z-index: 1;
    height: 70px;
    bottom: 0;
    display: flex;
    align-items: center;
    color: red;
  }
 .nav_links a:hover, a:focus {
  background: darkblue;
  padding: 10px 8px;
  border-radius: 3px;
  margin: 0px 5px;
  color: white;
}

.log__:hover {
  background: darkblue;
  padding: 10px 13px;
  border-radius: 3px;
  margin: 0px 5px;
  color: white;
}

  .logo {
    display: none;
  }

  .nav_links a {
    padding: 0px 12px;
    border-radius: 0px;
    margin: 0px 0px;
  }

  /*   .nav_links a:hover {
    background: none;
    padding: 0px 2px;
    border-radius: 3px;
    margin: 10px 4px;
    color: red;
  }
 */
  .log {
    text-align: left;
    display: flex;
  }

  .log__:hover {
    background: red;
    padding: 8px 3px;
    border-radius: 3px;
    margin: 0px 5px;
    color: white;
  }
  .log_ {
    background: none;
    padding: 8px 3px;
    border-radius: 3px;
    margin: 0px 0px;
    color: black;
  }

  p {
    font-size: 13px;
  }
}

/* @media only screen and (max-width: 750px) {
  .logo{
    flex-basis: 15%;
  }
  .nav_links{
    flex-basis: 60%;
  }
  .log{
    flex-basis: 30%;
    margin: auto;
  }
  .logo h5{
    font-size: 10px;
  }
  nav{
    margin: 0px;
  }
nav img {
  width: 15%;
}
nav a {
  padding: 0px;
  text-decoration: none;
  color: black;
}
.logo a {
  display: flex;
  align-items: center;
  color: blue;
  font-size: 10px;
}
.nav_links a {
  padding: 5px 7px;
  border-radius: 3px;
  margin: 0px 5px;
  color: red;
}

.nav_links a:hover {
  background: black;
  padding: 5px 7px;
  border-radius: 3px;
  margin: 0px 5px;
  color: white;
}

 
} */
</style>