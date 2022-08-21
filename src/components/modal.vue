<template>
  <button @click="openModal()" id="myBtn">View Full Details</button>

  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <table>
        <thead>
          <th>Case Number</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>State</th>
          <th>Date Arrested</th>
          <th>Date Charged</th>
          <th>Convicted Date</th>
          <th>Lawyer Name</th>
          <th>Court</th>
          <th>Crime Committed</th>
          <th>Sentence Received</th>
          <th>Prison</th>
        </thead>

        <tbody v-for="data in datas" :key="data.id">
          <td>{{ data.fname }}</td>
          <td>{{ data.mname }}</td>
          <td>{{ data.sname }}</td>
          <td>{{ data.gender }}</td>
          <td>{{ data.marital_status }}</td>
          <td>{{ data.state }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.date_arrested }}</td>
          <td>{{ data.date_charged }}</td>
          <td>{{ data.convicted_date }}</td>
          <td>{{ data.lawyer }}</td>
          <td>{{ data.court }}</td>
          <td>{{ data.crime }}</td>
          <td>{{ data.sentence }}</td>
          <td>{{ data.prison }}</td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      datas: [],
      // id: this.$route.params.id,
  /*     fname: "",
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
      lawyer: "", */
    };
  },

  methods: {

    async mounted() {
      try {
        const res = await axios.get(` http://localhost:3000/details`);
        this.datas = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    openModal() {
      //alert("working");
      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      };

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
  },
};
</script>

<style scoped>
button {
  background: white;
  border: 0px solid white;
  cursor: pointer;
  color: black;
  outline: none;
  border: none;
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 100%;
  color: green;
  border-radius: 8px;
  height: auto;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-content table {
  color: red;
  font-size: 13px;
}

@media only screen and (max-width: 600px) {
  .modal-content {
    width: 80%;
  }

  .modal-content button {
    padding: 13px;
    border: 2px solid #f5f5f5;
    background: #f5f5f5;
    margin: 5px;
    width: 50%;
    border-radius: 8px;
    margin-top: 20px;
    color: black;
  }
}
</style>

