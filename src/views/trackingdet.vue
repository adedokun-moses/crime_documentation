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
      <!--    <button @click="upload" class="button">Upload</button> -->
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
//import axios from "axios";
import convictColRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";

export default {
  components: { Nav, Intro, Footer },
  data() {
    return {
      title: "Convicted Criminals ",
      states: state,
      selectedData: {},
      detailsId: null,
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
      release_date: "",
      prison: "",
      date_charged: "",
      sentence: "",
      dateArrested: "",
      crime: "",
      convicted_date: "",
      court: "",
      lawyer: "",
      detRef: null,
    };
  },

  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      let reader = new FileReader();
      if (file && file[0]) {
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
    async getdetails() {
      let detailsRef = doc(convictColRef, this.detailsId);
      this.detRef = detailsRef;
      let details = await getDoc(this.detRef);
      let detailsData = details.data();
      this.fname = detailsData.fname;
      this.mname = detailsData.mname;
      this.sname = detailsData.sname;
      this.address = detailsData.address;
      this.gender = detailsData.gender;
      this.state = detailsData.state;
      this.date_charged = detailsData.date_charged;
      this.marital_status = detailsData.marital_status;
      this.date_arrested = detailsData.date_arrested;
      this.release_date = detailsData.release_date;
      this.prison = detailsData.prison;
      this.sentence = detailsData.sentence;
      this.convicted_date = detailsData.convicted_date;
      this.crime = detailsData.crime;
      this.court = detailsData.court;
      this.lawyer = detailsData.lawyer;
      this.previewImage = detailsData.previewImage;
    },

    async updateDetails() {
      await setDoc(this.detRef, {
        fname: this.fname,
        mname: this.mname,
        sname: this.sname,
        address: this.address,
        gender: this.gender,
        state: this.state,
        date_charged: this.date_charged,
        marital_status: this.marital_status,
        date_arrested: this.date_arrested,
        release_date: this.release_date,
        prison: this.prison,
        sentence: this.sentence,
        convicted_date: this.convicted_date,
        crime: this.crime,
        court: this.court,
        lawyer: this.lawyer,
        previewImage: this.previewImage,
      });
      swal("Good job!", "Record has been Updated!!", "success");
      this.$router.push('/tracking')
    },
    /*     async fetchDetails() {
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
            this.previewImage = res.image;

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
          image: this.previewImage,
        })
        .then((response) => {
          console.log(response);
          swal("Details Updated!", "Click Ok to proceed!", "success", {
            button: "Ok!",
          });
        })
        .catch((err) => console.log(err));
      // this.$router.go('/')
    }, */
    homebtn() {
      this.$router.push("/tracking");
    },
  },

  mounted() {
    let detailsId = this.$route.params.id;
    this.detailsId = detailsId;
    this.getdetails();
    //  this.fetchDetails();
    // this.updateDetails();
    /*  this.singleDet() */
  },
};
</script>

<style scoped>
@import "../../public/cssfolder/trackingdet.css";
</style>