<template>
  <Nav />
  <div>
    <Intro :title="title" />
  </div>

  <div class="convicteddet">
    <div class="imagelog" style="flex-basis: 30%">
      <div
        class="imagePreviewWrapper"
        :style="{ 'background-image': `url(${previewImage})` }"
        @click="selectImage"
      ></div>
      <input ref="fileInput" type="file" @input="pickFile" />
      <button @click="upload" class="button">Upload</button>
    </div>

    <div style="flex-basis: 100%">
      <form>
        <h4>Information Should Input Correctly</h4>

        <div class="formgroup">
          <label for="witness"> Convicted Name</label><br />
          <input type="text" placeholder="First Name" v-model="fname" />
          <input type="text" placeholder="Middle Name" v-model="mname" />
          <input type="text" placeholder=" Surname" v-model="sname" />
        </div>

        <div class="statement">
          <label for="witness">Convicted Home Address</label><br />
          <input type="text" placeholder="Address" v-model="address" />
        </div>

        <div class="formgroup">
          <div class="group">
            <label for="witness"> State Of Origin</label><br />
            <select v-model="state">
              <option>-Select State-</option>
              <option v-for="state in states" :key="state.name">
                {{ state.name }}
              </option>
            </select>
          </div>

          <div class="group">
            <label for="witness">Marital Status</label><br />
            <select v-model="marital_status">
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
            </select>
          </div>

          <div class="group">
            <label for="witness"> Gender </label><br />
            <select v-model="gender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        <div class="formgroup_">
          <div class="group_">
            <label for="witness">Arrest Date</label><br />
            <input type="date" v-model="date_arrested" />
          </div>

          <div class="group_">
            <label for="witness"> Date Charge</label><br />
            <input type="date" v-model="date_charged" />
          </div>

          <div class="group_">
            <label for="witness">Convicted Date</label><br />
            <input type="date" v-model="convicted_date" />
          </div>
        </div>

        <div class="formgroup__">
          <div class="group_">
            <label for="witness">Crime Committed</label><br />
            <input type="text" v-model="crime" />
          </div>

          <div class="group_">
            <label for="witness">Court </label><br />
            <input type="text" v-model="court" />
          </div>
        </div>

        <div class="formgroup__">
          <div class="group_">
            <label for="witness">Sentence Received</label><br />
            <input type="text" v-model="sentence" />
          </div>

          <div class="group_">
            <label for="witness">Prison </label><br />
            <input type="text" v-model="prison" />
          </div>
        </div>

        <div class="statement">
          <label for="witness">Judge In Charge Name</label><br />
          <input type="text" placeholder="Judge Name" v-model="lawyer" />
        </div>

        <div class="submitbtn">
          <button
            type="submit"
            style="background: green"
            @click.prevent="updateDetails(id)"
          >
            Update Report
          </button>
          <button style="background: red" @click="homebtn()">
            Return To Home Page
          </button>
        </div>
      </form>
    </div>
  </div>

  <Footer />
</template>


<script>
import Nav from "../components/nav.vue";
import Intro from "../components/intro.vue";
import Footer from "../components/footer.vue";
import state from "/states.json";
import axios from "axios";

export default {
  components: { Nav, Intro, Footer },
  data() {
    return {
      title: "Convicted Criminals ",
      states: state,
      datas: [],
      previewImage: null,
      id: this.$route.params.id,
      fname: "",
      mname: "",
      sname: "",
      address: "",
      state: "",
      gender: "",
      marital_status: "",
      date_arrested: "",
      sentencedate: "",
      release_date: "",
      prison: "",
      sentence: "",
      date_charged: "",
      dateArrested: "",
      crime: "",
      convicted_date: "",
      court: "",
      lawyer: "",
    };
  },

  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
    async fetchDetails() {
      try {
        const dtres = await axios.get(`http://localhost:3000/details`);
        //this.datas = dtres.data;
        dtres.data.forEach((res) => {
          if (res.id == this.id) {
            this.fname = res.fname;
            this.mname = res.mname;
            this.sname = res.sname;
            this.address = res.address;
            this.gender = res.gender;
            this.state = res.state;
            this.date_charged = res.date_charged;
            this.marital_status = res.marital_status;
            this.date_arrested = res.date_arrested;
            this.release_date = res.release_date;
            this.prison = res.prison;
            this.sentence = res.sentence;
            this.convicted_date = res.convicted_date;
            this.crime = res.crime;
            this.court = res.court;
            this.lawyer = res.lawyer;

            // console.log(res.fname);
          }
        });

        //console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async updateDetails(id) {
      await axios
        .patch(` ${`http://localhost:3000/details`}/${id}`, {
          fname: this.fname,
          mname: this.mname,
          sname: this.sname,
          address: this.address,
          state: this.state,
          gender: this.gender,
          date_arrested: this.date_arrested,
          release_date: this.release_date,
          prison: this.prison,
          marital_status: this.marital_status,
          sentencedate: this.sentencedate,
          sentence: this.sentence,
          dateArrested: this.dateArrested,
          crime: this.crime,
          convicted_date: this.convicted_date,
          date_charged: this.date_charged,
          court: this.court,
          lawyer: this.lawyer,
        })
        .then((response) => {
          console.log(response);
          swal("Details Updated!", "Click Ok to proceed!", "success", {
            button: "Ok!",
          });
        })
        .catch((err) => console.log(err));
      // this.$router.go('/')
    },

    /*    async updateDetails(id) {
      try {
        await axios.patch(`${`http://localhost:3000/details`}/${id}`, {
          updateDetails: true,
        });

        this.datas = this.datas.map((data) => {
          if (data.id === id) {
            data.updateDetails = true;
          }

          return data;
        });
      } catch (e) {
        console.error(e);
      }
    }, */
  },

  mounted() {
    this.fetchDetails();
    // this.updateDetails();
    /*  this.singleDet() */
  },
  /* 
    singleDet() {
      //alert(this.id)
      this.datas.forEach((res) => {
        if (res.id == this.id) {
          this.fname = res.fname;
          this.mname = res.mname;
          this.sname = res.sname;
          console.log(res.fname);
        }
      });
    }, */
};
</script>

<style scoped>
.convicteddet {
  display: flex;
  width: 90%;
  margin: auto;
  background: white;
  border-radius: 10px;
}
.logo {
  width: 100%;
  margin: auto;
  text-align: center;
}
.logo img {
  width: 20%;
}
.imagelog {
  margin: 30px;
  border-radius: 5px;
  height: 320px;
  width: 30%;
  box-shadow: 3px 3px 3px 5px grey;
}
.imagelog input {
  background: grey;
  padding: 10px;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  width: 100%;
}
.imagelog h1 {
  font-size: 15px;
  text-align: center;
}
.imagePreviewWrapper {
  width: 100%;
  height: 320px;
  display: block;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}

/* .imagepreview {
  width: 250px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
} */
form {
  width: 90%;
  margin: 20px auto;
}
.formgroup label {
  margin: 10px 5px;
}
.formgroup input {
  width: 30%;
  margin: 10px 5px;
  padding: 13px 5px;
  outline: none;
}
.statement label {
  margin: 10px 5px;
}
.statement input {
  width: 93%;
  margin: 10px 5px;
  padding: 13px 5px;
  outline: none;
}

.submitbtn button {
  width: 44%;
  display: inline-block;
  margin: 20px 30px 10px 7px;
  padding: 20px 0px;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.group {
  display: inline-block;
}
.group select {
  padding: 13px 73px;
  margin: 10px 5px;
  outline: none;
}

.formgroup_ {
  display: flex;
}
.formgroup_ > div {
  margin: 7px 5px;
  width: 30.3%;
}

.group_ input {
  width: 100%;
  margin: 10px 0px;
  padding: 13px 10px;
  outline: none;
}
.formgroup__ {
  display: flex;
}
.formgroup__ > div {
  margin: 7px 5px;
  width: 46%;
}

.button {
  background: green;
  width: 100%;
  margin: 20px auto;
  padding: 15px;
  outline: none;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .convicteddet {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
  }
  .imagelog {
    margin: 10px auto;
    border-radius: 5px;
    height: 300px;
    width: 90%;
    box-shadow: 3px 3px 3px 5px grey;
  }
  .imagelog input {
    width: 95%;
    margin: 10px;
    padding: 10px 5px;
  }
  .imagelog button {
    background: green;
    width: 80%;
    display: block;
    padding: 10px;
    margin: 5px auto;
    border-radius: 5px;
    outline: none;
    border: none;
  }
  .formgroup_ {
    display: block;
  }
  .formgroup_ > div {
    margin: 7px 5px;
    width: 100%;
  }
    .formgroup__ {
    display: block;
  }

  .formgroup__ > div {
    width: 100%;
  }

  .formgroup input {
    width: 100%;
  }
  .group_ input {
    width: 100%;
  }
  .group select {
    padding: 13px 93px;
    margin: 0px 0px;
    outline: none;
    width: 100%;
  }
  .group {
    display: block;
    width: 100%;
  }
  .formgroup_ {
    display: block;
  }
  .statement input {
    width: 100%;
  }
    .submitbtn button {
    width: 100%;
    display: inline-block;
    margin: 20px 30px 10px 0px;
    padding: 20px 0px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>