<template>
  <div id="root-contactForm">
    <!-- kommt noch rein wenn der Google Account da ist
    <vue-recaptcha sitekey="Your key here">
      <button>Click me</button>
    </vue-recaptcha>
    -->
    <div contactForm>
      <v-form method="post" id="nativeForm" v-model="valid">
        <v-text-field
          class="form-control"
          label="Projektname"
          v-model="name"
          :counter="40"
          required
          name="message"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Projektbeschreibung"
          v-model="description"
          :counter="40"
          required
          name="message"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Startdatum"
          v-model="startDate"
          required
          name="message"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Enddatum"
          v-model="endDate"
          required
          name="message"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Straße"
          v-model="street"
          required
          name="message"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Hausnummer"
          v-model="houseNumber"
          required
          name="message"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Postleitzahl"
          v-model="postcode"
          required
          name="message"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Stadt"
          v-model="city"
          required
          name="message"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Telefonnummer"
          v-model="telepone"
          required
          name="message"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Fax"
          v-model="fax"
          name="message"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="E-mail"
          v-model="email"
          required
          name="mail"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Preis in €"
          v-model="price"
          required
          name="mail"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Organisation"
          v-model="organization"
          required
          name="Organization"
          color="#004c45"
        ></v-text-field>
        <v-btn @click="submit" :disabled="!valid">Abschicken</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
//import VueRecaptcha from "vue-recaptcha";
import OfferingDataService from "../services/OfferingDataService";

export default {
  //  components: {VueRecaptcha},
  name: "contact",

  data() {
    return {
      valid: false,
      name: "",
      description:"",
      startDate:"",
      endDate:"",
      //tags (Array)
      //offeringTypes (Array)
      street :"",
      houseNumber:"",
      postcode:"",
      city:"",
      telepone:"",
      fax:"",
      email: "",
      //OrganizationId  (Was ist damit gemeint?)
      //imageURL
      price:"",
      //latitude        (Muss aus einer API kommen und nicht vom Angebotgeber?)
      //longitude       (Siehe oben)
      organization: ""
    };
  },
  methods: {
    submit() {
      OfferingDataService.create({
            name : this.name,
            description:this.description,
            startDate:this.startDate,
            endDate:this.endDate,
            street:this.street,
            houseNumber:this.houseNumber,
            postcode:this.postcode,
            city:this.city,
            telepone:this.telepone,
            fax:this.fax,
            email:this.email,
            price:this.price,
            organization:this.organization,
        })
      alert("Angebot wurde versendet.");
    },
  },
};
</script>

<style>
#contact {
  background: #fffbf5;
  padding-bottom: 10em;
}

#contact-text h1 {
  color: #004c45;
  font-size: 60px;
  font-family: "Montserrat";
}
#contact-text h2 {
  color: #004c45;
  font-size: 36px;
  font-family: "Montserrat";
  padding-bottom: 1.4em;
}
#contact-text {
  padding-top: 4em;
  padding-bottom: 6em;
}

#contactForm {
  color: #004c45;
  font-family: "Montserrat";
}
.form-control {
  width: 36vw;
  background: transparent;
  border: none;
  outline: none;
  color: #004c45;
  font-size: 18px;
  margin: auto;
  margin-bottom: 0.5em;
}
</style>
