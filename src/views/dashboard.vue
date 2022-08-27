<template>
  <Nav />
  <div class="home">
    <div class="video">
   
      <h5>
        Nigeria <br />
        Police Department <br />
        <span class="small">We are committed to delivering better service</span>
      </h5>
    </div>


  </div>

  <div class="inpsector">
    <h5>The Inspector General of Police Speech</h5>

    <div class="igp_speech">
      <div style="flex-basis: 20%; text-align: center" class="igpimage">
        <img src="../assets/igp.jpg" />
        <p style="text-align: center">
          IGP Usman Alkali Baba, psc (+), fdc, NPM <br />
          Inspector General of Police
        </p>
      </div>
      <div>
        <h4>
          <p>1.  It is with total appreciation of Almighty Allah (SWT), the Most
          Beneficent, that I address you all on this day which marks the formal
          transfer of leadership of the Nigeria Police Force from the out-going
          20th indigenous Inspector General of Police, IGP Mohammed Abubakar
          Adamu, NPM, mni to my humble self.</p> 
          <p>
            2. Being appointed to head the largest Police Force in Africa both
            in terms of personnel profile and operational jurisdiction is to me,
            more than a fulfilment of destiny. <br />
            It is a call to national duty, particularly, at this critical time
            that our nation is experiencing increasingly complex and pervasive
            security threats occasioned by terrorism, banditry, kidnapping,
            secessionist agitation and sundry highly organized crimes.
          </p>
          <p>
            3. Much as the challenge of leading the Force to address these
            threats in the shortest possible time frame, restore security order,
            and return our beloved nation to the path of national unity may
            appear daunting, <br />
            I am inspired by the fact that from my extensive years of service, I
            can confidently say that the Nigeria Police is endowed with some of
            the finest, courageous and patriotic officers who, undoubtedly,
            shall support me to advance the internal security vision of Mr.
            President.
          </p>
        </h4>
      </div>
    </div>
  </div>

  <div class="module">
    <div>
      <router-link to="/criminalcase">
        <img src="../assets/criminal2.jpg" alt="" />
        <span style="font-size: 30px"> Input Suspect Statetment</span>
      </router-link>
    </div>
    <div>
      <router-link to="/convictedcase">
        <img src="../assets/case.jpg" alt="" />
        <span style="font-size: 30px"> Upload Convicted Case</span>
      </router-link>
    </div>
    <div>
      <router-link to="/tracking">
        <img src="../assets/track.jpg" alt="" />
        <span style="font-size: 30px"> Track Crime Record</span>
      </router-link>
    </div>
  </div>

  <Footer />
</template>


<script>
import Nav from "../components/nav.vue";
import Footer from "../components/footer.vue";
export default {
  components: { Nav, Footer },
};
</script>

<style scoped>
@import "../../public/cssfolder/home.css";
</style>