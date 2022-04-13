<template>
  <div id="offererPage">
    <!-- Welcome -->

    <section id="offer-upper">
      <img id="fistbump" src="../assets/fistbump.jpg" />
      <section id="offer-upper-right">
        <h1><strong>Du bist Teil einer sozialen Organisation in Deutschland?</strong></h1>
        <p>
          Wir helfen Dir dein Angebot für Suchende sichtbarer im Internet zu
          machen!
        </p>
        <p>
          Teile deine Erfahrungen und unterstütze uns beim Abbau von Vorurteilen
          & Diskriminierung in Deutschland.
        </p>
        <img
          id="offerer-process-image"
          src="../assets/flowcharts/offering-flowchart-with-background.png"
        />
      </section>
    </section>
    <h2 style="strong">Melde dich bei uns in dem unten stehenden Formular!</h2>

    <!-- Bottom Part --><!--
    <section id="concave-delimiter-top"></section>
    <section id="bottom-part">
      <h4>Du hast noch weitere Fragen?</h4>
    </section>

    <section id="concave-delimiter-bottom-bg">
      <section id="concave-delimiter-bottom"></section>
    </section>
    -->

    <!-- Kontaktformular -->
    <section id="contact-offerer">
      <ContactForm />
    </section>
  </div>
</template>

<script>
import ContactForm from "../components/OfferingContactForm";
export default {
  components: {
    ContactForm,
  },
  methods: {},
};
</script>

<style>
html,
body,
#offererPage {
  height: 100%;
  width: 100%;
  background-color: #fffbf5;
}

/* Upper part */

#offer-upper {
  padding: 8% 4% 4% 2%;
  display: flex;
  flex-direction: row;
}

#fistbump {
  object-fit: cover;
  max-width: 40%;
  width: auto;
  height: auto;
  border-radius: 1em;
}

#offer-upper-right {
  max-width: 60%;
  text-align: right;
}

#offer-upper-right > h1 {
  color: #ff5100;
  padding-bottom: 2em;
}

#offer-upper-right > h1,
#offer-upper-right > p {
  padding-left: 2em;
}

#offer-upper-right > p {
  color: #004c45;
}

#offerer-process-image {
  width: 100%;
  margin: 2em 0 0 6em;
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
