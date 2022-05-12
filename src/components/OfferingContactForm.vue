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
          label="Organisation"
          v-model="organame"
          required
          name="Organization"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Organisations ID (falls bekannt)"
          v-model="organizationId"
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
          v-model="telephone"
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
          v-model="mailAdress"
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
          label="Bilderordner"
          v-model="image_folder_name"
          required
          name="mail"
          color="#004c45"
        ></v-text-field>
        <v-text-field
          class="form-control"
          label="Kurzbeschreibung"
          v-model="carddescription"
          required
          name="mail"
          color="#004c45"
          :counter=40></v-text-field>
        <v-textarea
          class="form-control"
          v-model="description"
          required
          name="Beschreibung"
          color="#004c45"
          placeholder="Bitte geben Sie hier Ihre Beschreibung ein"
          height="16em"
        ></v-textarea>
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
      //tags (Array)
      //offeringTypes (Array)
      street :"",
      houseNumber:"",
      postcode:"",
      city:"",
      telephone:"",
      fax:"",
      email: "",
      organizationId: "",
      price:"",
      //latitude        (Muss aus einer API kommen und nicht vom Angebotgeber?)
      //longitude       (Siehe oben)
      organame: "",
      carddescription: "",
      image_folder_name: ""
    };
  },
  methods: {
    submit() {
      OfferingDataService.create({
            name : this.name,
            description:this.description,
            street:this.street,
            houseNumber:this.houseNumber,
            postcode:this.postcode,
            city:this.city,
            telephone:this.telephone,
            fax:this.fax,
            mailAdress:this.mailAdress,
            price:this.price,
            organame:this.organame,
            organizationId: this.organizationId,
            carddescription: this.carddescription,
            image_folder_name: this.image_folder_name,
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
