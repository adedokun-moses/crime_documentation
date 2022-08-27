<template>
  <Nav />
  <div>
    <Intro :title="title" />
  </div>
  <div class="action">
    <button @click="update(checkedresult)" style="background: green">
      <i class="fa fa-pencil" style="margin-right: 5px"></i> Update Convict
      Record
    </button>

    <button @click="delete_criminal(checkedresult)">
      <i class="fa fa-trash" style="margin-right: 5px"></i> Delete Convict
      Record
    </button>

    <div class="input">
      <i class="fa fa-search"></i>
      <input type="text" placeholder="Convict First Name" v-model="search" />
    </div>
  </div>

  <div class="col-table">
    <table>
      <thead>
        <th>Select</th>
        <th>First Name</th>
        <th>Surname</th>
        <th>State</th>
        <th>Crime Committed</th>
        <th>Date Arrested</th>
        <th>Date Charged</th>
        <th>Convicted Date</th>
      </thead>

      <tbody v-for="data in filteredList()" :key="data.id">
        <td>
          <input type="checkbox" :value="data.id" @change="opendet($event)" />
        </td>

        <td>{{ data.fname }}</td>
        <td>{{ data.sname }}</td>
        <td>{{ data.state }}</td>
        <td>{{ data.crime }}</td>
        <td>{{ data.date_arrested }}</td>
        <td>{{ data.date_charged }}</td>
        <td>{{ data.convicted_date }}</td>
        <td>
          <Modal :data="data" :key="data.id" />
        </td>
        <!--   <td><Modal/></td> -->
      </tbody>
    </table>
  </div>

  <Footer />
</template>



<script>
import Nav from "../components/nav.vue";
import Intro from "../components/intro.vue";
import Footer from "../components/footer.vue";
import Modal from "../components/modal.vue";
import convictColRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
//import data from "/data.json";
//import axios from "axios";
export default {
  components: { Nav, Intro, Footer, Modal },
  data() {
    return {
      title: "Convicted Details ",
      datas: [],
      checkedresult: "",
      search: null,
      selectedDet: null,
      clickeddet: "",

      // checked_id: ''
    };
  },

  mounted() {
    this.fetchDetails();
  },

  methods: {
    async fetchDetails() {
      let detailssnapShot = await getDocs(convictColRef);
      let datas = [];
      detailssnapShot.forEach((data) => {
        let Checkeddata = data.data();
        Checkeddata.id = data.id;
        datas.push(Checkeddata);
      });
      console.log(datas);
      this.datas = datas;
    },

    opendet(e) {
      // console.log()
      var checked_res = e.target.checked;
      //   this.checked_id = id
      if (checked_res == true) {
        this.checkedresult = e.target.value;
      } else {
        this.checkedresult = "";
      }
      /*  console.log(e.target.value);
      console.log(e.target.checked); */
    },

    update(checkedresult) {
      if (this.checkedresult == "") {
        //alert("You Need To Select A record");
        swal("Error!", "You Need To Select A record", "error");
      } else {
        // alert("welcome");
        console.log(checkedresult);
        this.$router.push({
          name: "trackingdet",
          params: { id: this.checkedresult },
        });
        //this.url_data=this.$route.params.trackingdet:id;
      }
    },

    async delete_criminal(checkedresult) {
      if (this.checkedresult == "") {
        swal("Error!", "You Need To Select A record", "error");
        console.log(checkedresult);
      } else {
        let detailsRef = doc(convictColRef, checkedresult);
        await deleteDoc(detailsRef);
        swal("Good job!", "Record has been deleted!!", "success");
        this.$router.go();
      }
    },

    filteredList() {
      if (this.search) {
        return this.datas.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.fname.toLowerCase().includes(v));
        });
      } else {
        return this.datas;
      }
    },
  },
};
</script>

<style scoped>
@import "../../public/cssfolder/tracking.css";
</style>