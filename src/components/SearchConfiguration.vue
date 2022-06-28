<template>
  <!-- -->
  <div id="root-SC" class="seperation-container">
    <h3>mit Vorurteilen aufräumen.</h3>
    <v-form class="actual-form">
      <div class="form-item-left form-item">
        <strong class="dark-orange">Themengebiet?</strong>
        <v-select
          v-model="model.choosenTags"
          :items="tagList"
          label="Themengebiete"
          multiple
          class="v-select-item"
        ></v-select>
      </div>
      <div class="form-item">
        <strong class="dark-orange">Angebotsart?</strong>
        <v-select
          v-model="model.choosenOfferingTypes"
          :items="offeringTypeList"
          label="Angebotsart"
          multiple
          class="v-select-item"
        ></v-select>
      </div>
      <div class="form-item">
        <strong class="dark-orange">Standort?</strong>
        <v-select
          v-model="model.city"
          :items="cityNames"
          label="Standort"
          class="v-select-item"
        ></v-select>
      </div>
      <div class="form-item form-item-right">
        <div>
          <strong class="dark-orange radius-text">Radius?</strong>
          <v-slider
            v-model="model.distance"
            :thumb-size="24"
            thumb-label
            class="slider"
          ></v-slider>
          <v-subheader class="pl-0"> {{ model.distance }} km</v-subheader>
        </div>
            <v-btn @click="submit" id="form-submit-button" class="dark-orange">
             <!-- <v-btn to="/inconstruction" id="form-submit-button" class="dark-orange"> -->
          <img src="../assets/icons/search.png" id="search-icon-form" />
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import OfferingDataService from "../services/OfferingDataService";

var cityNames = OfferingDataService.getAllCities();
var tagList = OfferingDataService.getAllTags();
var offeringTypeList = OfferingDataService.getAllTypes();

export default {
  name: "searchConfiguration-component",
  props: ["isStartPage", "model"],
  components: {},
  data() {
    return {
      cityNames: cityNames,
      tagList: tagList,
      offeringTypeList: offeringTypeList,
    };
  },

  methods: {
    checkInputsAndCreateErrorList() {
      let errorList = [];

      if (!this.model.choosenTags || this.model.choosenTags.length === 0) {
        errorList.push("Bitte mindestens ein Themengebiet mitangeben.");
      }
      if (
        !this.model.choosenOfferingTypes ||
        this.model.choosenOfferingTypes.length === 0
      ) {
        errorList.push("Bitte mindestens einen Angebotstyp mitangeben.");
      }
      if (!this.model.city) {
        errorList.push("Bitte eine Stadt angeben.");
      }
      return errorList;
    },
    submit() {
      let errorList = this.checkInputsAndCreateErrorList();
      if (errorList.length === 0) {
        let paramsAsJSON = {
          tags: this.model.choosenTags,
          offeringTypes: this.model.choosenOfferingTypes,
          city: this.model.city,
          distance: this.model.distance,
        };

        if (this.isStartPage) {
          //befindet sich auf der LandingPage
          this.$router.push({
            name: "Searcher",
            hash: "#offer-list",
            params: { landingPageParams: paramsAsJSON },
          });
        } else {
          //befindet sich auf der SearcherPage
          this.$emit("update:searchparams", this.model);
          this.$emit("search-offering");
        }
      } else {
        for (const idx in errorList) {
          this.$toastr.Add({
            name: "Warnung",

            title: "Fehlende Angabe", // Toast Title

            msg: errorList[idx], // Toast Message

            clickClose: true, // Click Close Disable

            timeout: 4000, // Remember defaultTimeout is 5 sec.(5000) in this case the toast won't close automatically

            position: "toast-top-right", // Toast Position.

            type: "warning", // Toast type,
            style: { backgroundColor: "orange", width: "300px" },
          });
        }
      }
    },
  },
};
</script>

<style lang="scss">
#root-SC {
  padding-top: 25vh;
  background-image: url(../assets/banners/diversityHands.jpg);
  color: white;
  background-size: cover;
  height: 100vh;
  width: 100%;
}

#root-SC h3 {
  font-family: "DM Serif Text", serif;
  font-size: 47px;
}

.seperation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.actual-form {
  margin-top: 6%;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 4em 0 4em;
}

.form-item {
  background-color: #fffbf5;
  padding: 2em 2em 2em 2em;
  border-right: 1px solid rgba(10, 10, 10, 0.1);
  align-self: center;
  align-items: center;
  width: 22%;
  box-shadow: rgba(0, 0, 0, 0.172549) 0 6px 12px 0;
  height: 11em;
}

.form-item-left {
  border-top-left-radius: 8%;
  border-bottom-left-radius: 8%;
  //padding-left: 10%;
  //width: 25%;
  width: 22%;
}

.form-item-right {
  display: flex;
  flex-direction: row;
  border-top-right-radius: 8%;
  border-bottom-right-radius: 8%;
  //border-bottom-right-radius: 50%;
  //width: 25%;
  width: 22%;
}

.form-item > strong,
.radius-text {
  font-weight: 700;
  font-size: 1.5em;
}

.radius-text {
  margin-bottom: 1em;
}

.v-select-item {
  width: 100%;
}

#form-submit-button {
  width: 7em;
  background-color: #ff5100;
  border-radius: 50%;
  margin-left: 20%;
}

#search-icon-form {
  margin: 50%;
  width: 7em;
  background-color: #ff5100;
  padding: 1em;
  border-radius: 50%;
}

.slider {
  width: 10em;
}

.v-messages {
  min-height: 0em !important;
}
.v-input__slot {
  margin-bottom: 0em !important;
}

.v-subheader {
  height: 2em;
}

@media (max-width: 1200px) {
  .actual-form {
    flex-direction: column;
  }
  .form-item-left {
    width: 40%;
  }
}
</style>
