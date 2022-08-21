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
      <input type="text" placeholder=" CASE NO" v-model="search" />
    </div>
  </div>

  <div class="col-table">
    <table>
      <thead>
        <th>Select</th>
        <th>Case Number</th>
        <th>First Name</th>
        <th>Surname</th>
        <th>State</th>
        <th>Date Arrested</th>
        <th>Date Charged</th>
        <th>Convicted Date</th>
        <!--     <th>Lawyer Name</th>
        <th>Court</th>
        <th>Crime Committed</th>
        <th>Sentence Received</th>
        <th>Prison</th> -->
      </thead>

      <tbody v-for="data in filteredList()" :key="data.id">
        <td>
          <input type="checkbox" :value="data.id" @change="opendet($event)" />
        </td>

        <td>
          {{ data.id }}
        </td>

        <td>{{ data.fname }}</td>

        <td>{{ data.sname }}</td>

        <td>{{ data.state }}</td>

        <td>{{ data.date_arrested }}</td>
        <td>{{ data.date_charged }}</td>
        <td>{{ data.convicted_date }}</td>
        <td><Modal /></td>
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
//import data from "/data.json";
import axios from "axios";
export default {
  components: { Nav, Intro, Footer, Modal },
  data() {
    return {
      title: "Crimnal Records ",
      datas: [],
      checkedresult: "",
      search: "",
      title: "Full List Of Convicts ",

      // checked_id: ''
    };
  },

  async mounted() {
    try {
      const res = await axios.get(` http://localhost:3000/details`);
      this.datas = res.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    //opendet(id) {
    // alert(id);
    // },

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
        alert("You Need To Select A record");
        // swal("Error!", "You Need To Select A record", "error");
      } else {
        alert("welcome");
        console.log(checkedresult);
        this.$router.push({
          name: "trackingdet",
          params: { id: this.checkedresult },
        });
        //this.url_data=this.$route.params.trackingdet:id;
      }
    },

    delete_criminal(checkedresult) {
      if (this.checkedresult == "") {
        alert("You Need To Select A record");
        console.log(checkedresult);
      } else {
        axios.delete(`http://localhost:3000/details/${this.checkedresult}`);
        const index = (this.datas = this.datas.filter(
          (data) => data.checkedresult !== this.checkedresult
        ));
        if (~index)
          // if the post exists in array
          this.datas.splice(index, 1); //delete the post
        //  this.delete_criminal()
        swal("Details Deleted!", "Click Ok to continue!", "success", {
          button: "Ok!",
        });
      }
    },

    filteredList() {
      if (this.search) {
        return this.datas.filter((data) => {
          return data.checkedresult
            .toLowerCase()
            .split("")
            .every((v) => data.name.toLowerCase().includes(v));
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