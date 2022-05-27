<template>
  <div id="mongoDbConnectionPage">
    <!-- Angebot anlegen -->
    <section id="contact-offerer">
      <InsertOffering />
    </section>

    <!-- Organisation anlegen -->
    <section id="contact-offerer">
      <InsertOrganization />
    </section>
  </div>
</template>

<script>
import InsertOrganization from "../components/InsertOrganization";
import InsertOffering from "../components/InsertOffering";
export default {
  components: {
    InsertOrganization,
    InsertOffering,
  },
  methods: {},
};
</script>

<style>
html,
body,
#mongoDbConnectionPage {
  height: 100%;
  width: 100%;
  background-color: #fffbf5;
}
/* Bottom Part */
#concave-delimiter-top {
  background-color: #fffbf5;
  float: left;
  width: 100%;
  height: 4em;
  margin-top: None;
  margin-bottom: 2em;
  border-radius: 30% 70% 80% 20% / 0% 0% 100% 100%;
}

#bottom-part {
  background-color: #004c45;
  padding: 2% 1%;
}

#concave-delimiter-bottom-bg {
  background-color: #004c45;
  float: left;
  width: 100%;
  height: 4em;
}

#concave-delimiter-bottom {
  background-color: #fffbf5;
  float: left;
  width: 100%;
  height: 4em;
  margin-top: None;
  margin-bottom: 2em;
  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
}

#bottom-part > h4 {
  color: white;
  font-size: 24px;
  margin-bottom: 0em;
}

#offererPage > h2 {
  font-size: 2.8em;
  margin-bottom: 2em;
  color: #ff5100;
  font-weight: bold;
}

#contact-offerer {
  background-color: #fffbf5;
  padding: 0 20em 4em 20em;
  color: #fffbf5 !important;
}
</style>
