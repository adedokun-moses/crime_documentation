<template>
  <Nav />
  <div id="demo" class="carousel slide about_intro" data-ride="carousel">
    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>

    <!-- The slideshow -->
    <div class="carousel-inner">
      <div class="carousel-item active images">
        <img src="../assets/police5.webp" alt="Los Angeles" />
        <div class="carousel-caption">
          <h4>Nigeria Police Force</h4>
          <p>
            VISION AND MISSION <br />
            To make Nigeria safer and more secure for economic development and
            growth; <br />
            to create a safe and secure environment for everyone living in
            Nigeria.
          </p>
        </div>
      </div>
      <div class="carousel-item images">
        <img src="../assets/police4.jpg" alt="Los Angeles" />
        <div class="carousel-caption">
          <p>
            Police brutality, Injustice, Corruption and any <br />
            form of bad act should be stopped
          </p>
        </div>
      </div>
      <div class="carousel-item images">
        <img src="../assets/police3.jpg" alt="Los Angeles" />
        <div class="carousel-caption">
          <h4>Nigeria Police Force</h4>
          <p>
            VISION AND MISSION <br />
            To make Nigeria safer and more secure for economic development and
            growth; <br />
            to create a safe and secure environment for everyone living in
            Nigeria.
          </p>
        </div>
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>

  <div class="igspeech">
    <h5>IGP Message To Nigerians</h5>
    <iframe
      width="100%"
      height="400"
      src="https://www.youtube.com/embed/UuBmxfCM0eg"
      title="Assessment of The Role of The Nigerian Police Force By IGP Usman Alkali"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <div class="security_tips">
    <h5>Security Tips</h5>
    <div class="tips">
      <div>
        <div class="securitytips">
          <h4><b>KIDNAPPING</b></h4>
          <ul>
            <li>Do not accept rides offered by strangers</li>
            <li>
              Do not accept drinks, gums, cigarettes, and food from anybody you
              are not familiar with
            </li>
            <li>
              Teach the children not to accept gifts from persons they are not
              familiar with.
            </li>
            <li>Do not draw unnecessary attention to yourself</li>
          </ul>
        </div>
        <div class="securitytips">
          <h4>
            <b
              >Suicide: <br />
              Identifying Suicide Behaviour</b
            >
          </h4>
          <ul>
            <li>Excessive sadness</li>
            <li>Sudden desire to be alone.</li>
            <li>Sudden unusual calmness.</li>
            <li>Sudden excitement</li>
            <li>
              Making sober statements like: “take care of my children, parents,
              husband, wife” etc.
            </li>
          </ul>
        </div>
      </div>
      <div class="img">
        <img src="../assets/policebg.png" alt="" />
      </div>
      <div>
        <div class="securitytips">
          <h4><b>Cordial Conduct During Arrest</b></h4>
          <ul>
            <li>
              Do not resist arrest. Even if you believe that the arrest is
              illegal or uncalled for
            </li>
            <li>
              Politely demand to know the reason for your arrest. It is your
              right to know.
            </li>
            <li>
              *Always let the officers know your health challenge (if any) after
              arrest.
            </li>
            <li>Demand to see the warrant of arrest where necessary</li>
          </ul>
        </div>
        <div class="securitytips">
          <h4><b>Surviving Rape</b></h4>
          <ul>
            <li>Be prepared in advance</li>

            <li>
              Endeavour to leave as much evidence as possible at the scene of
              crime.
            </li>
            <li>Take note of the characteristics of your predators</li>
            <li>Report the incident to the nearest Police Station.</li>
          </ul>
        </div>
        <!--     <div class="securitytips">
          <h4><b>Surviving Rape</b></h4>
          <ul>
            <li>Be prepared in advance</li>
            <li>
             Thwart it if you can.
            </li>
            <li>Endeavour to leave as much evidence as possible <br> at the scene of crime.</li>
            <li>Take note of the characteristics of your predators </li>
            <li>
            Report the incident to the nearest Police Station. 
            </li>
          </ul>
        </div> -->
      </div>
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
.about_intro {
  height: 500px;
}
.images {
  height: 500px;
}
.images img {
  width: 100%;
}

.carousel-caption h4 {
  color: white;
  font-size: 70px;
}
.carousel-caption p {
  color: white;
  font-size: 20px;
}

.about_intro h5 {
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
}

.igspeech {
  width: 80%;
  margin: auto;
}
.igspeech h5 {
  text-align: center;
  font-size: 30px;
  margin: 30px;
  font-weight: bold;
}
.video {
  width: 100%;
  height: 400px;
  margin: 20px 0px;
  border-radius: 10px;
}
.securitytips {
  width: 100%;
  margin: 50px 0px;
  height: 300px;
  box-shadow: 3px 3px 3px 5px grey;
  border-radius: 10px;
}
.security_tips h5 {
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
}

.security_tips h4 {
  font-size: 20px;
  text-align: center;
  padding: 0px 0px;
}

.securitytips ul {
  margin: 0px 15px;
  padding: 0px 14px;
}
.securitytips li {
  padding: 10px 0px;
}
.tips {
  display: flex;
  width: 80%;
  margin: auto;
}
.tips > div {
  width: 100%;
  margin: 0px 10px;
}
.img {
  display: flex;
  align-items: center;
}
.img img {
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .carousel-caption h4 {
    color: rgba(red, green, blue, alpha);
    font-size: 30px;
  }
  .carousel-caption p {
    color: white;
    font-size: 13px;
    font-weight: bold;
  }
  .igspeech {
  width: 100%;

}

  .tips {
    flex-direction: column;
  }
  .securitytips {
    height: auto;
  }
  .images { 
    height: 200px;
  }
  .about_intro {
    height: auto;
  }
}
</style>