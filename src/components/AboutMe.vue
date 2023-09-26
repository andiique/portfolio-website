<template>
    <div>
        <div class="about-me-container">
            <h2 style="color: #0b1c98;">Who is Andrei?</h2>
            <p style="margin-top: 25px;">{{ aboutTextV2 }}</p>
            <p>
              Currently working at
              <a style="color: #0b1c98;" href="https://www.layakk.com/">Layakk</a>.
              Based in Valencia, Spain.
             </p>
            
            <!-- <p>{{ secondAboutText }}</p> -->
        </div>

        <div class="profile-container">
            <img src="../assets/portfolio_pic.jpg" alt="Your Name" />
        </div>
    </div>

  </template>

<script>
import strings from "../strings"

export default {
    data() {
        return {
            aboutText_1: strings.aboutMeText_1,
            aboutText_2: strings.aboutMeText_2,
            aboutTextV2: strings.aboutMeTextV2,
            secondAboutText: strings.secondAboutMeText
        }
    },
}
</script>

<style scoped>

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #01204c;
  }
  
  p {
    font-size: 16px;
    color: white;
    text-align: justify;
    padding-left: 100px;
    padding-right: 40px;
    color: #01204c;
  }
  .about-me-container {
    width: 80%;
    max-width: 29vw;
    margin: 0 auto;
    padding: 20px;
    border-radius: 15px;
    background-color: #d9d9d9; /* Rectangle background color */
    border: 0px solid #333; /* Border style */
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
  }

  .profile-container {
    width: 10vw; /* Adjust the width to your desired size */
    height: 19vh; /* Set the same height as the width for a square shape */
    margin: 0 auto;
    background-color: #fff; /* Container background color */
    border: 0px solid #333; /* Border style */
    border-radius: 15px;
    text-align: center;
    display: flex;
    transform-origin: 0, 0;
    transform: translate(-150%, -150%);
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
  }

  img {
    width: 100%; /* Set the width to 100% to fill the square container */
    height: 100%; /* Set the height to 100% to fill the square container */
    object-fit: cover; /* Maintain aspect ratio and cover the entire container */
    object-position: top;
    border-radius: 12px; /* Round the corners for a circular effect */
  }

@media (min-width: 320px) {
  .about-me-container {
    /* width: 70vw; */
    max-width: 70vw;
    height: 50vh;
    margin: 0 auto;
    padding: 0px;
    padding-top: 1vh;
    border-radius: 5px;
    background-color: #d9d9d9; /* Rectangle background color */
    border: 0px solid #333; /* Border style */
    text-align: center;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
  }

  p {
    font-size: 3vw;
    color: white;
    text-align: justify;
    padding-left: 3vw;
    padding-right: 3vw;
    color: #01204c;
  }

  h2 {
    font-size: 4vw;
    font-weight: bold;
    margin-top: 0.5em;
    color: #01204c;
  }

  .profile-container {
    width: 30vw; /* Adjust the width to your desired size */
    height: 20vh; /* Set the same height as the width for a square shape */
    margin: 0 auto;
    background-color: #fff; /* Container background color */
    border: 0px solid #333; /* Border style */
    border-radius: 15px;
    text-align: center;
    display: flex;
    transform-origin: 0, 0;
    transform: translate(-110%, -310%);
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
  }

  img {
    width: 100%; /* Set the width to 100% to fill the square container */
    height: 100%; /* Set the height to 100% to fill the square container */
    object-fit: cover; /* Maintain aspect ratio and cover the entire container */
    object-position: top;
    border-radius: 12px; /* Round the corners for a circular effect */
  }
}

@media (min-width: 320px) {

}

@media (min-width: 480px) {

}

@media (min-width: 600px) {

}

@media (min-width: 800px) {

}

@media (min-width: 1025px) {

}

@media (min-width: 1280px) {

}

</style>
