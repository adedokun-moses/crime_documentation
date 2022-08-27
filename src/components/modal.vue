<template>
  <button @click="openModal(data.id)" :id="'myBtn' + data.id">
    View Full Details
  </button>
  <!-- The Modal -->
  <div :id="'myModal' + data.id" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeModal(data.id)">&times;</span>
      <h5>Convict Full Details</h5>
      <div class="details" >
        <div>
          <h4>First Name:</h4>
        </div>
        <div>
          <h4>{{ data.fname }}</h4>
        </div>
      </div>
      <div class="details">
        <div>
          <h4>Middle Name:</h4>
        </div>
        <div>
          <h4>{{ data.mname }}</h4>
        </div>
      </div>
      <div class="details">
        <div>
          <h4>Surname:</h4>
        </div>
        <div>
          <h4>{{ data.sname }}</h4>
        </div>
      </div>

      <div class="details">
        <div>
          <h4>State:</h4>
        </div>
        <div>
          <h4>{{ data.state }}</h4>
        </div>
      </div>
      <div class="details">
        <div>
          <h4>Address:</h4>
        </div>
        <div>
          <h4>{{ data.address }}</h4>
        </div>
      </div>

      <div class="details">
        <div>
          <h4>Gender:</h4>
        </div>
        <div>
          <h4>{{ data.gender }}</h4>
        </div>
      </div>
      <div class="details">
        <div>
          <h4>Crime Committed:</h4>
        </div>
        <div>
          <h4>{{ data.crime }}</h4>
        </div>
      </div>
      <div class="details">
        <div>
          <h4>Date Arrested:</h4>
        </div>
        <div>
          <h4>{{ data.date_arrested }}</h4>
        </div>
      </div>

      <div class="details">
        <div>
          <h4>Date Charged:</h4>
        </div>
        <div>
          <h4>{{ data.date_charged }}</h4>
        </div>
      </div>
      <div class="details">
        <div>
          <h4>Convivted Date:</h4>
        </div>
        <div>
          <h4>{{ data.convicted_date }}</h4>
        </div>
      </div>

      <div class="details">
        <div>
          <h4>Court:</h4>
        </div>
        <div>
          <h4>{{ data.court }}</h4>
        </div>
      </div>

      <div class="details">
        <div>
          <h4>Prison Held:</h4>
        </div>
        <div>
          <h4>{{ data.prison }}</h4>
        </div>
      </div>
      <div class="details">
        <div>
          <h4>Judge Name:</h4>
        </div>
        <div>
          <h4>{{ data.lawyer }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import convictColRef from "../firebase";
//import { getDoc, doc } from "firebase/firestore";
export default {
  data() {
    return {
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
  props: ["data"],

  methods: {
    closeModal(id) {
      // Get the modal
      var modal = document.getElementById("myModal" + id);
      modal.style.display = "none";
    },
    openModal(id) {
      //alert("working");
      // Get the modal
      var modal = document.getElementById("myModal" + id);

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn" + id);

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
  width: 50%;
  border-radius: 8px;
  height: auto;


}
.modal-content h5 {
  text-align: center;
  color: black;
  font-family: sans-serif;
  font-weight: bold;
}
/* The Close Button */
.close {
  color: red;
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

 .details {
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  margin-top: 20px;

  color: black;
}
.details > div {
  width: 300px;
  
} 
.details h4{
  font-size: 14px!important;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
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

