<template>
  <div v-if="currentOrganization" id="organizationPage">
    <div id="organizationBox">
      <div id="two-columns">
        <!-- Name und Beschreibung -->

        <section id="left-column">
          <h3>{{ currentOrganization.name }}</h3>
          <p>
            {{ currentOrganization.description }} 
          </p>
        </section>

        <!-- Bild mit Themen und Button -->

        <section id="right-column">
          <img
            class="organziation-logo"
            v-if="currentOrganization"
            src="../assets/orgaLogos/statttour-logo.png"
          />
          <div id="themengebiete">
            <div id="themen-header-logo">
              <h4>Themengebiete</h4>
              <img src="../assets/icons/three-bars.png" />
            </div>
            <ul>
              <li>Behinderungen</li>
              <li>Barrierefreiheit</li>
              <li>Stadttouren</li>
            </ul>
          </div>

          <v-btn id="to-offer-on-orga">Zu den Angeboten -></v-btn>
        </section>
      </div>

      <!-- Untere Leiste -->

      <div id="map-and-address">
        <iframe
          width="100%"
          height="450"
          style="border: 0"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8WMga20Hl0cRuU8NdDkV99U&key=AIzaSyC1eu-m_SHUlD5IZ5JkkvMazRHMAgC02jc"
          id="organization-map"
        ></iframe>

        <div id="organization-anschrift">
          <h4>Anschrift</h4>
          <p>
            {{ currentOrganization.street }}
            {{ currentOrganization.houseNumber }}
          </p>
          <p>
            {{ currentOrganization.postcode }} {{ currentOrganization.city }}
          </p>
          <p>Deutschland</p>
        </div>

        <div id="kontakt">
          <h4>Kontakt</h4>
          <div id="name-and-person">
            <p>{{ currentOrganization.name }}</p>
          </div>
          <div id="organization-contact-details">
            <p>{{ currentOrganization.websiteURL }}</p>
            <p>{{ currentOrganization.telefon }}</p>
            <p>{{ currentOrganization.mailAdress }}</p>
          </div>
        </div>
      </div>

      <div id="not-in-ux-orga">
        <h2>Themenbereiche</h2>
        <div id="themen-tags-orga">
          <v-chip
            class="chip"
            v-for="tag in currentOrganization.tags"
            :key="tag._id"
            color="blue"
            text-color="white"
          >
            {{ tag.label }}</v-chip
          >
        </div>

        <div id="orga-photos">
          <h2>Ein paar Impressionen:</h2>
                      <v-carousel v-model="model">
              <v-carousel-item
                v-for="(image, i) in require_imgs"
                :key="i"
                :src="image.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          -->
        </div>
      </div>
      <!--
            <div class="descr-item-organization" id="angebotsliste">
              <h2>Angebote:</h2>

              <h1>Hier kommen Angebote hin</h1>
              <div v-if="filteredOfferings">
                <offeringEntry
                  v-for="offeringEntry in filteredOfferings"
                  :key="offeringEntry._id"
                  :offeringId="offeringEntry._id"
                />
              </div>
            </div>

            <div class="descr-item-organization" id="orga-fotos">
              <h2>Ein paar Impressionen:</h2>
              <v-carousel v-model="model">
                <v-carousel-item v-for="(color, i) in colors" :key="color">
                  <v-sheet :color="color" height="100%" tile>
                    <v-row class="fill-height" align="center" justify="center">
                      <div class="display-3">Bilder {{ i + 1 }}</div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </div>
            <h2>Themenbereiche</h2>
            <div class="descr-item-organization" id="themen-tags">
              <v-chip
                class="chip"
                v-for="tag in organization.tags"
                :key="tag._id"
                color="blue"
                text-color="white"
              >
                {{ tag.label }}
              </v-chip>
            </div>
          </div>
          <iframe
            width="100%"
            height="450"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8WMga20Hl0cRuU8NdDkV99U&key=AIzaSyC1eu-m_SHUlD5IZ5JkkvMazRHMAgC02jc"
          ></iframe>
        </section>
 -->
    </div>
    <section id="contact-offerer">
      <ContactForm />
    </section>
  </div>
</template>

<script>
import OrganizationDataService from "../services/OrganizationDataService";

export default {
  name: "Organization",
  data() {
    return {
      currentOrganization: null,
      model: 0,
      imageDir: "",
      require_imgs : [],
      logo: ""
    };
  },
  methods: {
    getOrganization(id) {
      OrganizationDataService.get(id)
        .then((response) => {
          this.currentOrganization = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
        this.imageDir = this.currentOrganization.image_folder_name;
        this.getImages(require.context(`../assets/offeringPictures`, true, /\.(png|jpg|jpeg)$/))
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
       if (imagepath.includes(this.imageDir + "-logo")) {
          this.logo = `${imagepath.substr(1)}`
        }
      }
      console.log("Logo: " + this.logo)
    },
    getLogo() {
      return require("../assets/orgaLogos" + this.logo)
    }
  },
  mounted() {
    this.message = "";
    console.log("übergebener Parameter: " + this.$route.params.id);
    this.getOrganization(this.$route.params.id);
  },
};
</script>

<style>
#organizationPage {
  height: 100%;
  color: #004c45;;
  background: #fffbf5;
  padding-top: 6%;
}

#organizationBox {
  margin: 2% 7% 4% 7%;
  box-shadow: 1px 1px 15px grey;
  border-radius: 16px;
  text-align: left;
  padding: 2% 6% 2% 4%;
}

#two-columns {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

/* Name und Beschreibung */

#left-column {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 44%;
  padding-top: 4%;
}

#left-column h3 {
  color: #ff5100;
  padding-bottom: 4%;
}

#left-column p {
  padding-bottom: 2%;
}

/* Bild mit Themen und Button */

#right-column {
  width: 44%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
}

#right-column > img {
  height: 30%;
  margin-bottom: 10%;
}

#themen-header-logo > img {
  margin-left: 1em;
  width: 3em;
  height: 3em;
}

#themen-header-logo {
  display: flex;
  flex-direction: row;
}

#to-offer-on-orga {
  background-color: transparent;
  color: #004c45;
  font-family: "DM Serif Text", serif;
  margin: 3em 0 4em 0;
  padding: 1em 1em 1em 1em;
  max-width: 18em;
  font-size: 1.5em;
}
/* Untere Leiste */

#map-and-address {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 4%;
}

#organization-map {
  max-height: 20em;
  max-width: 40%;
}

#organization-anschrift,
#kontakt {
  display: flex;
  flex-direction: column;
  margin: 0 4% 0 8%;
  width: 20%;
}

#organization-anschrift h4,
#kontakt h4,
#right-column h4 {
  color: #f0956a;
  padding-bottom: 3%;
  font-size: 2em;
}

#organization-anschrift p,
#name-and-person p,
#organization-contact-details p {
  margin-bottom: 0;
}

#name-and-person {
  margin-bottom: 10%;
}
/* Not in UX Design */

#not-in-ux-orga {
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 6% 0 4% 0;
  text-align: center;
}

#themen-tags-orga {
  flex-direction: row;
  margin: 1%;
}

.chip {
  margin: 0 0.5% 0 0.5%;
}

#orga-photos {
  width: 60%;
  margin: 2% auto 0 auto;
}

#contact-offerer {
  border-top: dashed;
}

/* Auskommentiertes Zeug */

#angebotsliste {
  background: #004c45;
  color: #fffbf5;
}
</style>