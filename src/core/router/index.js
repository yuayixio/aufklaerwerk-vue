import VueRouter from "vue-router";

import LandingPage from "../../pages/LandingPage.vue";
import SearcherPage from "../../pages/SearcherPage.vue";
import OffererPage from "../../pages/OffererPage.vue";
import AboutUs from "../../pages/AboutUs.vue";
import Contact from "../../pages/ContactPage.vue";
import HowItWorksPage from "../../pages/HowItWorksPage.vue";

import FAQ from "../../pages/informationpages/FAQ.vue";
import Impressum from "../../pages/informationpages/Impressum.vue";
import Datasec from "../../pages/informationpages/Datenschutz.vue";
import inConstruction from "../../pages/InConstruction.vue";
import Offering from "../../components/Offering.vue"
import Organization from "../../components/Organization.vue"
import MongoDbConnectionPage from "../../pages/MongoDbConnectionPage.vue"

const routes = [{
    path: "/",
    component: LandingPage
  },
  {
    path: "/searcher",
    component: SearcherPage,
    name: "Searcher"
  },
  {
    path: "/offerer",
    component: OffererPage,
    name: "Offerer"
  },
  {
    path: "/aboutUs",
    component: AboutUs,
    name: "aboutus"
  },
  {
    path: "/contact",
    component: Contact,
    name: "Contact"
  },
  {
    path: "/howitworks",
    component: HowItWorksPage,
    name: "HowTo"
  },

  {
    path: "/impressum",
    component: Impressum,
    name: "Impressum"
  },
  {
    path: "/datasec",
    component: Datasec,
    name: "datasec"
  },
  {
    path: "/faq",
    component: FAQ,
    name: "FAQ"
  },
  {
    path: "/inConstruction",
    component: inConstruction,
    name: "inConstruction"
  },
  {
    path: "/offering/:id",
    component: Offering,
    name: "Offering"
  },
  {
    path: "/organization/:id",
    component: Organization,
    name: "Organization"
  },
  {
    path: "/mongoDbConnectionPage",
    component: MongoDbConnectionPage,
    name: "MongoDbConnection"
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      /*
            return {
              selector: to.hash
            }
      */
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
});

export default router;