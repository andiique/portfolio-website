<template>

    <div class="wrapper">
        <header>
            <img src="../assets/layers/sky.png" class="background" style="transform: translateZ(-20px) scale(3);">
            <img src="../assets/layers/rocks_1.png" class="background" style="transform: translateZ(-15px) scale(2.5);">
            <img src="../assets/layers/rocks_2.png" class="background">
            <img src="../assets/layers/clouds_1.png" class="background" style="transform: translateZ(-10px) scale(2);">
            <img src="../assets/layers/clouds_2.png" class="background" style="transform: translateZ(-5px) scale(1.5);">
            <img src="../assets/layers/clouds_3.png" class="background" style="transform: translateZ(5px) scale(0.5);">
            <img src="../assets/layers/clouds_4.png" class="background" style="transform: translateZ(5px) scale(0.5);">
            <div style="padding-bottom: 10%;">
                <h2 class="title" >Andrei Ardelean</h2>
                <h5 style="color: #0b1c98; padding-bottom: 230px;" class="subtitle">Software Engineer</h5>
            </div>
        </header>
        <section>
            <h3>About</h3>
            <AboutMeRectangle style="padding-top: 7rem;"/>
            <SkillsRectangle style="padding-top: 5%;"/>
        </section>
        <section>
            <h4>Projects</h4>
            <Projects/>
        </section>
        <section>
            <h4>Contact me</h4>
            <Contact/>
        </section>
    </div>
</template>

<script>
import strings from "../strings"
//import SocialMedia from "../components/SocialMediaButtons.vue"
import AboutMeRectangle from "../components/AboutMe.vue"
import SkillsRectangle from "../components/MySkills.vue"
import Projects from "../components/Projects.vue"
import Contact from "../components/Contact.vue"

export default {
    name: 'Home',
    props: ['page'],
    data() {
        return {
            aboutText: strings.aboutMeText,
            secondAboutText: strings.secondAboutMeText
        }
    },
    components: {
        AboutMeRectangle,
        SkillsRectangle,
        Projects,
        Contact,
    }
}
</script>

<style scoped>

h3 {
    color: white;
    text-align: center; 
    font-weight: bold; 
    margin-top: 3%;
    font-family: 'Avenir Next','Segoe ui',Ubuntu,sans-serif; 
    font-size: 40px;
}

h4 {
    color: white; 
    text-align: center; 
    font-weight: bold; 
    margin-top: 5%;
    font-family: 'Avenir Next','Segoe ui',Ubuntu,sans-serif; 
    font-size: 40px;
    /* margin-bottom: 5%; */
}

h4::before {
  content: '';
  display: block;
  width: 20rem;
  height: 1.5px;
  margin: auto;
  margin-bottom: 5%;
  background: white;
}

/* section::after {
  content: '';
  display: block;
  width: 300px;
  height: 1px;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -150px;
  background: rgba(117,81,125,0.15);
} */

.title {
    color: #54fad4;
    font-size: 45px;
    font-family: 'Avenir Next','Segoe ui',Ubuntu,sans-serif;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .2em;
    line-height: 1.4;
    font-weight: bold;
    text-shadow: 0 0 5px black;
    
}

.subtitle {
    color: #9f5c8b;
    text-align: center;
    font-family: 'Avenir Next','Segoe ui',Ubuntu,sans-serif;
    font-size: 30px;
    letter-spacing: .2em;
    text-transform: uppercase;
    line-height: 1.4;
    font-weight: bold;
    text-shadow: 0 0 5px black;
}

section {
    font-size: 2rem;
    padding: 2rem;
    background-color: #4b8e9d;
    color: white;
}

.wrapper {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 10px;
}

header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transform-style: preserve-3d;
    z-index: -1;
    
}

.background {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    object-position: bottom;
}







.about-container {
    border: 0px solid #333;
    padding: 20px;
    display: flex;
    align-items: center;
}

.about-image {
    width: auto;
    height: auto;
    padding-left: 50%;
}

.about-text {
    flex: 2;
    font-family: karol-sans;
    font-style: italic;
    color: white;
    max-width: 800px;
    text-align: justify;
}


@media (min-width: 320px) {

section {
    font-size: 4vw;
    padding: 2rem;
    background-color: #4b8e9d;
    color: white;
}

h3 {
    color: white;
    text-align: center; 
    font-weight: bold; 
    margin-top: 3%;
    font-family: 'Avenir Next','Segoe ui',Ubuntu,sans-serif; 
    font-size: 5vw;
}

h4 {
    color: white; 
    text-align: center; 
    font-weight: bold; 
    margin-top: 5%;
    font-family: 'Avenir Next','Segoe ui',Ubuntu,sans-serif; 
    font-size: 5vw;
    /* margin-bottom: 2vh; */
}

h4::before {
  content: '';
  display: block;
  width: 50vw;
  height: 1px;
  /* margin: auto; */
  margin-bottom: 5%;
  background: white;
}


}

</style>