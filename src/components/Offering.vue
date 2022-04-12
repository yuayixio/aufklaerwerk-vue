<template>
  <div>
    <div v-if="currentOffering" id="offeringPage">
      <!-- Start Screen  -->

      <div id="offeringBox">
        <div id="offering-image-and-details">
          <!-- Hier sind Foto und Anschrift -->
          <img
            id="offering-image"
            v-if="currentOffering"
            src="../assets/orgaLogos/statttour-logo.png"
          />
          <!--        :src="currentOffering.imageUrl"-->
          <div id="offering-details">
            <h3 id="offering-name">{{ currentOffering.name }}</h3>
            <div id="icon-with-data" class="entry-with-gap">
              <img src="../assets/icons/three-bars.png" />
              <p>{{ currentOffering.organame }}</p>
            </div>
            <div class="entry-without-gap">
              <img src="../assets/icons/location.png" />
              <p>
                {{ currentOffering.postcode }}
                {{ currentOffering.city }}
              </p>
            </div>
            <div class="entry-with-gap">
              <img src="../assets/icons/blank-space.png" />
              <p>
                {{ currentOffering.street }}
                {{ currentOffering.houseNumber }}
              </p>
            </div>
            <div class="entry-with-gap">
              <img src="../assets/icons/phone.png" />
              <p>
                {{ currentOffering.telephone }}
              </p>
            </div>
            <div class="entry-with-gap">
              <img src="../assets/icons/mail-box.png" />
              <p>
                {{ currentOffering.mailAdress }}
              </p>
            </div>
            <div class="entry-with-gap">
              <img src="../assets/icons/price-tag.png" />
              <p>
                {{ currentOffering.price }}
              </p>
            </div>
          </div>
        </div>

        <div id="offering-description">
          <p id="offering-descr">
              {{ currentOffering.description }}
          </p>
        </div>

        <div id="organisation-and-map">
          <div id="organisation-descr">
            <h3 class="left">Organisation</h3>
            <p class="left">
              StattTour ist eine studentische Initiative zum besseren Verständnis für die Bedürfnisse und Probleme von Rollstuhlfahrern im Alltag. Wir bieten verschiedenste Touren mit verschiedenen Guides durch verschiedene Teile Hamburgs an. Kommt auf unsere Seite und findet mehr über uns heraus!  
            </p>
            <v-btn id="to-orga" @click="openOrganisation"
              >Mehr zur Organisation</v-btn
            >
          </div>
          <iframe
            width="100%"
            height="450"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyC1eu-m_SHUlD5IZ5JkkvMazRHMAgC02jc&q=' + currentOffering.city.replace(' ', '+') + ',' + currentOffering.postcode.replace(' ', '+') + ',' + currentOffering.street.replace(' ', '+') + ',' + currentOffering.houseNumber.replace(' ', '+') "
            id="map"
          ></iframe>
        </div>

        <!-- Ab hier kommt Beschreibung und so -->
        <div id="not-in-ux">
          <h2>Themenbereiche</h2>
          <div id="themen-tags-offering">
            <v-chip
              class="chip"
              v-for="tag in currentOffering.tags"
              :key="tag._id"
              color="blue"
              text-color="white"
            >
              {{ tag.label }}
            </v-chip>
          </div>

          <h2>Angebotstypen</h2>
          <div id="themen-tags-offering">
            <v-chip
              class="chip"
              v-for="offeringType in currentOffering.offeringTypes"
              :key="offeringType._id"
              color="blue"
              text-color="white"
            >
              {{ offeringType.label }}
            </v-chip>
          </div>

          <div id="offering-photos">
            <h2>Ein paar Impressionen</h2>
            <v-carousel v-model="model">
              <v-carousel-item
                v-for="(image, i) in require_imgs"
                :key="i"
                :src="image.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </div>
          <div>
            <v-btn id="booking-button" to="/contact">Angebot buchen</v-btn>
          </div>
        </div>
      </div>

      <!-- TODO Kontaktformular-->
    </div>
  </div>
</template>

<script>
import OfferingDataService from "../services/OfferingDataService";

export default {
  name: "Offering",
  data() {
    return {
      currentOffering: null,
      model: 0,
      imageDir: "",
      require_imgs : [],
    };
  },
  methods: {
    openOrganisation() {
      this.$router.push({
        name: "Organization",
        params: { id: this.currentOffering.organizationId },
      });
    },
    getOffering(id) {
      OfferingDataService.get(id)
        .then((response) => {
          this.currentOffering = response.data;
          console.log("Offering data: " + response.data);
          this.imageDir = this.currentOffering.image_folder_name;
          // Require Context erlaubt keine Variablen. Also ist die Lösung:
          
          //this.getImages(require.context(`../assets/orgaLogos/${imageDirectory}`, true, /\.(png|jpg|jpeg)$/))
          
          // nicht möglich leider. Habe noch das hier versucht: 
          
          // const files = fs.readdirSync("../assets/orgaLogos/statttour")
          // Source: https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
          
          // Hat aber auch nicht geklappt. Wir müssen eigentlich nur die Filenames als Parameter in die getImages Methode packen. Dann sind wir good to go
          // Die hardcoded Lösung unten geht.
          this.getImages(require.context(`../assets/orgaLogos`, true, /\.(png|jpg|jpeg)$/))
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getImages(path) {
      var imgs = {}
      path.keys().forEach(key => (imgs[key] = path(key)))
      for (var imagepath in imgs) {
        if (imagepath.startsWith("./" + this.imageDir + "/")) {
          this.require_imgs.push({
            src: require(`../assets/orgaLogos${imagepath.substr(1)}`)
            }
          )
        }
      }
      console.log("Require Images: " + this.require_imgs)
    },
  },
  mounted() {
    console.log("übergebener Parameter: " + this.$route.params.id);
    this.getOffering(this.$route.params.id);
  },
};
</script>

<style>
#offeringPage {
  height: 100%;
  color: #004c45;
  padding-top: 6%;
  background: #fffbf5;
}

#offeringBox {
  margin: 2% 7% 4% 7%;
  box-shadow: 1px 1px 15px grey;
  border-radius: 16px;
  padding: 2% 6% 2% 4%;
}

#offering-image-and-details {
  margin-top: 3em;
  display: flex;
  flex-direction: row;
  color: #004c45;
  background: #fffbf5;
  margin-left: 4%;
}

#offering-image {
  width: 30vw;
  height: 20%;
}

#offering-name {
  color: #ff5100;
  padding-bottom: 1em;
  text-align: left;
  font-size: 2em;
}

#offering-details {
  display: flex;
  flex-direction: column;
  margin-left: 16%;
}

#offering-descr {
  padding: 4em 2em 0em 2em;
  margin-top: 3%;
  white-space: pre-wrap;
}

#offering-descr-middle {
  padding: 0em 2em;
}

#offering-desc-end {
  padding: 0em 2em 4em 2em;
}

.entry-with-gap,
.entry-without-gap {
  text-align: left;
  display: flex;
  flex-direction: row;
}

.entry-with-gap {
  padding-bottom: 1%;
}

.entry-with-gap img {
  width: 4%;
}

.entry-with-gap p,
.entry-without-gap p {
  padding-left: 2%;
}

#offering-details p {
  text-align: left;
  margin-bottom: 0px;
}

#pro-list {
  text-align: left;
  padding-left: 10%;
  margin-top: 2%;
}
/* Organisation and Map */

#organisation-and-map {
  display: flex;
  flex-direction: row;
  padding: 2% 0 6% 0;
}

#organisation-descr h3 {
  margin-bottom: 4%;
  color: #ff5100;
}

#to-orga {
  background: transparent;
  color: #004c45;
  font-size: 1.2em;
  font-family: "DM Serif Text", serif;
  margin: 1em;
  padding: 1.4em;
}

.left {
  text-align: left;
}

#map {
  flex-shrink: 0.6;
  max-height: 26em;
  padding: 2% 0 0 4%;
}
/* Not in UX Design */

#not-in-ux {
  margin: auto;
  display: flex;
  flex-direction: column;
}

#themen-tags-offering {
  flex-direction: row;
  margin: 1%;
}

#offering-types-offering {
  flex-direction: row;
}

#offering-photos {
  width: 60%;
  margin: 1% auto 0 auto;
}

#booking-button {
  min-width: 20%;
  color: #fffbf5;
  font-size: 1.5em;
  margin: 6em 0 2em 0;
  padding: 1.4em;
  font-family: "DM Serif Text", serif;
  background-color: #004c45;
}

#contact-offering {
  border-top: dashed;
}
</style>