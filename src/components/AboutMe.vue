<template>
    <div class="about-section">
        <div class="profile-container">
            <img src="../assets/portfolio_pic.jpg" alt="Your Name" />
        </div>

        <!-- <div class="about-me-container">
        </div> -->

        <article>
          <div style="display: block;">
            <div style="display: flex; gap: 4px; flex-direction: column;">

              <h2 style="color: #0b1c98;">Who is Andrei?</h2>
              <p>{{ aboutTextV2 }}</p>
              <p>
              Currently working at
                <a style="color: #0b1c98;" href="https://www.layakk.com/">Layakk</a>.
              Based in Valencia, Spain.
              </p>

            </div>

          </div>

        </article>

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

@media (min-width: 320px) {

  .about-section {
    /* padding-left: 10vw; */
    margin-top: -10vw;
    margin-bottom: 20vw;
    display: flex;
    justify-content: center;
  }

  article {
    /* width: 70vw; */
    max-width: 70vw;
    /* height: 50vh; */
    text-align: center;
    /* padding: 0px; */
    padding: 25vw 3vw 0vw;       /* ! AICI AM RAMAS !  */
    /* padding-top: 0vw; */

    display: flex;
    transform: none;

    border-radius: 3vw;
    background-color: #d9d9d9; /* Rectangle background color */
    
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2); /* Box shadow for depth */

  }

  p {
    font-size: 4vw;
    font-weight: 300;
    line-height: 1.2;
    text-align: justify;
    padding-left: 3vw;
    padding-right: 3vw;
    color: #01204c;
    
    /* font-size: 1.2rem; */
  }

  .text-down {
    padding-bottom: 2vw;
  }

  h2 {
    font-size: 4vw;
    font-weight: bold;
    /* margin-top: 0.5em; */
    color: #01204c;
  }

  .profile-container {
    width: 35vw; /* Adjust the width to your desired size */
    height: 35vw;  /* Set the same height as the width for a square shape */
    margin: 0 auto;
    background-color: transparent; /* Container background color */
    border: 0px solid #333; /* Border style */
    border-radius: 50%;
    z-index: 300;
    text-align: center;
    display: flex;
    /* transform-origin: 0, 0;
    transform: translate(-110%, -290%); */
    transform: translateY(-50%);
    position: absolute;
    /* align-items: center;
    justify-content: center; */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
  }

  img {
    width: 100%; /* Set the width to 100% to fill the square container */
    height: 100%; /* Set the height to 100% to fill the square container */
    object-fit: cover; /* Maintain aspect ratio and cover the entire container */
    object-position: top;
    position: absolute;
    display: unset;
    border-radius: 50%; /* Round the corners for a circular effect */
  }
}

@media (min-width: 480px) {

}

@media (min-width: 600px) {

}

@media (min-width: 800px) {

}

@media (min-width: 1025px) {

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
    height: auto;
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
    transform: translate(-150%, -180%);
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

@media (min-width: 1280px) {

}

</style>
