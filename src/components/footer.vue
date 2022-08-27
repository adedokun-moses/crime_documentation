<template>
  <footer>
    <div class="socialmedia">
      <a href="https://twitter.com/uplifte_harde"><i class="fa fa-twitter fa-3x"></i></a>
      <a href="https://www.facebook.com/adedokunmoses1"> <i class="fa fa-facebook fa-3x"></i></a>
      <a href="https://www.linkedin.com/in/adedokun-moses-703aa1209"> <i class="fa fa-instagram fa-3x"></i></a>
      <a href="https://github.com/adedokun-moses"> <i class="fa fa-github fa-3x"></i></a>
    </div>

    <div class="details">
      <div class="contact">
        <h4>CONTACT ADDRESS</h4>
        <ul>
          <li>Louis Edet House</li>
          <li>Force Headquartes</li>
          <li>Garki,Shehu Shagari Way, Abuja</li>
          <li>
            <i class="fa fa-phone fa-1x" style="padding-right: 20px"></i>+22 004
            324 11
          </li>
          <li>
            <i class="fa fa-envelope fa-1x"> Email:</i>
            pressforabuja@police.gov.ng
          </li>
        </ul>
      </div>
      <div class="links">
        <h4>Quick Links</h4>
        <ul>
          <li>Tinted Permit</li>
          <li>Emergency Number</li>
          <li>Compliant Response Unit (CRU)</li>
        </ul>
      </div>
      <div class="links">
        <h4>Relevant Website Links</h4>
        <ul>
          <li>Tinted Permit</li>
          <li>Emergency Number</li>
          <li>Compliant Response Unit (CRU)</li>
        </ul>
      </div>
    </div>
      <div class="footer__copy">
        &copy; <span class="year"></span> Adedokun Moses. All rights reserved.
      </div>
  </footer>
</template>


<style scoped>
footer {
  background: darkblue;
  margin-top: 5rem;
  color: white;
}
footer h5 {
  display: block;
  text-align: center;
  padding: 10px;
}
.socialmedia {
  width: 30%;
  margin: auto;
  display: block;
  text-align: center;
}
.socialmedia i {
  margin: 20px;
  color: white;
}

.socialmedia i:hover {
  margin: 20px;
  color: black;
}
.details {
  display: flex;
  margin: 0px 20px;
}

.details > div {
  width: 100%;
}
.details h4 {
  border-bottom: 3px double rgb(150, 110, 110);
  margin: 10px 20px;
  padding: 10px 0px;
}
.contact h5 {
  line-height: 26px;
  margin: 10px 20px;
}
.contact ul {
  list-style: none;
  margin: 10px 20px;
  padding: 0px;
}
.contact li {
  padding: 10px 0px;
}
.links ul {
  list-style: none;
  margin: 10px 20px;
  padding: 0px;
  color: white;
}
.links li {
  border-bottom: 1px dotted rgb(150, 110, 110);
  padding: 10px 0px;
}
.footer__copy{
  text-align: center;
}

@media only screen and (max-width: 600px)  {

  .socialmedia {
  width: 80%;
  margin: auto;
  display: flex;
 align-items: center;
}

.socialmedia i {
  margin: 20px;
}

.details {
  display: flex;
  margin: 0px 0px 30px 0px;
  flex-direction: column;
}

}
</style>