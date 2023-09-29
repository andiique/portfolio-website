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

              <p class="restricted">{{secondAboutText}}</p>
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
    /* margin-top: -10vw; */
    margin-bottom: 20vw;
	display: flex;
    justify-content: center;

  }

  article {
    /* width: 70vw; */
    max-width: 70vw;
    /* height: 50vh; */
    text-align: center;
    padding: 25vw 3vw 0vw;

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

    .restricted {
	display: none;
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

}




















@media (min-width: 1280px) {

.about-section {
    display: flex;
    justify-content: center;
	margin-bottom: 10rem;
  }

  article {
    max-width: 650px;

	padding-top: 3rem;
	padding-left: 5rem;
	padding-right: 0rem;
	padding-bottom: 1.5rem;

    border-radius: 15px;
    background-color: #d9d9d9; /* Rectangle background color */
    
    box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.7); /* Box shadow for depth */
	

  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.2;
    text-align: justify;
    padding-left: 1rem;
    padding-right: 2rem;
    color: #01204c;
    
    /* font-size: 1.2rem; */
  }

  .restricted {
	display: block;
	visibility: visible;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    /* margin-top: 0.5em; */
    color: #01204c;
	text-align: left;
    padding-left: 3vw;
    padding-right: 3vw;
  }

  .profile-container {
    width: 300px; /* Adjust the width to your desired size */
    height: 300px;  /* Set the same height as the width for a square shape */
	position: absolute;
	border-radius: 15px;
  	transform: translate(-420px,-50px);
    box-shadow: 0rem 0rem 1.7rem rgba(0, 0, 0, 0.7); /* Box shadow for depth */
  }

  img {
    width: 100%; /* Set the width to 100% to fill the square container */
    height: 100%; /* Set the height to 100% to fill the square container */
    object-fit: cover; /* Maintain aspect ratio and cover the entire container */
    object-position: top;
    border-radius: 15px;
  }


}

</style>



  <!--  From @media 1025px
    
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
  } -->