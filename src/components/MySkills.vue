<template>

    <article>
        <h2>My Skills</h2>
        <p style="font-family: 'Roboto', sans-serif; font-weight: 100; color: white;">
            The following skills are part of my toolbox. In my free time, I often find myself learning new technologies.
        </p>
    </article>

    <div class="skills-container">
        <div class="skill">
            <div class="back-card"></div>
            <div class="card">
                <img src="../assets/icons/python.png">
            </div>
            <p>Python</p>
        </div>
        <div class="skill">
            <div class="back-card"></div>
            <div class="card">
                <img src="../assets/icons/java.png">
            </div>
            <p>Java</p>
        </div>
        <div class="skill">
            <div class="back-card"></div>
            <div class="card">
                <img src="../assets/icons/c-.png">
            </div>
            <p>C/C++</p>
        </div>
        <div class="skill">
            <div class="back-card"></div>
            <div class="card">
                <img src="../assets/icons/android.png">
            </div>
            <p>Android</p>
        </div>
        <div class="skill">
            <div class="back-card"></div>
            <div class="card">
                <img src="../assets/icons/unity.png">
            </div>
            <p>Unity</p>
        </div>
        <div class="skill">
            <div class="back-card"></div>
            <div class="card">
                <img src="../assets/icons/github.png">
            </div>
            <p style="margin-bottom: 0;">Github</p>
        </div>
        <div class="skill">
            <div class="back-card"></div>
            <div class="card">
                <img src="../assets/icons/visual-studio.png">
            </div>
            <p style="margin-bottom: 0;">VS Code</p>
        </div>
        <div class="skill">
            <div class="back-card"></div>
            <div class="card">
                <img style="width: 70%; margin-top: 10%;" src="../assets/icons/java-script.png">
            </div>
            <p style="margin-bottom: 0;">JavaScript</p>
        </div>
        <div class="skill">
            <div class="back-card"></div>
            <div class="card">
                <img style="width: 70%; margin-top: 10%;" src="../assets/icons/vue2.png">
            </div>
            <p style="margin-bottom: 0;">Vue.js</p>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>

article {
  max-width: 1100px; /* Adjust the maximum width as needed */
  margin: 0 auto; /* Center the article horizontally */
  padding: 0px; /* Add padding to the article if desired */
  text-align: left; /* Align the content within the article to the left */
}

h2 {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 10px;
    color: white;
  }
  
  p {
    font-size: 20px;
    color: #01204c;
    text-align: justify;
  }

  img {
    width: 80%;
    height: auto;
  }

.skills-container {
    width: 32vw;
    max-width: 32vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    padding: 20px;
    border-radius: 15px;
    background-color: #e3e3e3; /* Rectangle background color */
    border: 0px solid #333; /* Border style */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
  }

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  width: 100px;
  height: 100px;
  overflow: hidden;
}

.back-card {
    position: absolute;
    width: 100px; /* Adjust the size as needed */
    height: 100px; /* Adjust the size as needed */
    background-color: #01204c; /* Set the background color */
    border-radius: 50%;
    opacity: 0; /* Set initial opacity to 0 */
    transform: scale(0); /* Set initial scale to 0 */
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

}

.skill:hover .back-card {
    animation: expandCircle 0.3s ease-in-out forwards;
    animation-delay: 0.4s; /* Delay it to start after icon animation */
    animation-fill-mode: both; /* Keep the final state of the animation */
}

@keyframes expandCircle {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    100% {
        opacity: 0.5;
        transform: scale(1.5) translateY(6px); /* Adjust the scaling factor as needed */
    }
}

.skill {
    position: relative;
    color: white;
    margin-right: 25px;
    margin-left: 25px;
    /* transition: all .3s ease-in-out; */
}

.skill .card {
    transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out;
}

.skill p {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
}

.skill:hover .card {
    /* transform: translateY(-5px);
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    transition-delay: 0.2s;
    transform: translateY(5px); */
    animation: moveIcon .3s ease-in-out forwards;
    /* animation: moveIconUp 0.4s ease-in-out, rotateIcon 0.4s ease-in-out forwards; */
    /* animation: moveIconUp 0.4s ease-in-out, rotateIcon 0.4s ease-in-out forwards, moveIconDown 0.4s ease-in-out 0.4s forwards; */
}

@keyframes moveIcon {
    0% {
        transform: translateY(0) rotate(0deg);
    }
    10% {
        transform: translateY(-1px) rotate(40deg);
    }
    20% {
        transform: translateY(-2px) rotate(80deg);
    }
    30% {
        transform: translateY(-3px) rotate(120deg);
    }
    40% {
        transform: translateY(-4px) rotate(160deg);
    }
    50% {
        transform: translateY(-5px) rotate(200deg);
    }
    60% {
        transform: translateY(-6px) rotate(240deg);
    }
    70% {
        transform: translateY(-7px) rotate(280deg);
    }
    80% {
        transform: translateY(-8px) rotate(320deg);
    }
    90% {
        transform: translateY(15px) rotate(360deg);
    }
    100% {
        transform: translateY(10px) rotate(360deg);
    }
}

.skill:hover .card {
    animation-delay: 0.2s; 
}

.skill:hover p {
    opacity: 0;
    transition-delay: 0.2s; /* Delay the text fade-out animation  */
}

.skill p {
    text-align: center;
    margin-top: 5px;
}

/* Reverse animations */

@keyframes reverseExpandCircle {
    0% {
        opacity: 0.5;
        transform: scale(1.5) translateY(6px); /* The final state of the expandCircle animation */
    }
    100% {
        opacity: 0;
        transform: scale(0); /* The initial state of the expandCircle animation */
    }
}

/* Apply the reverse animation when the user hovers off the skill element */
.skill:not(:hover) .back-card {
    animation: reverseExpandCircle 0.3s ease-in-out forwards;
    animation-fill-mode: both; /* Keep the final state of the reverse animation */
}


@keyframes reverseMoveIcon {
    0% {
        transform: translateY(10px) rotate(360deg); /* The final state of the moveIcon animation */
    }
    100% {
        transform: translateY(0) rotate(0deg); /* The initial state of the moveIcon animation */
    }
}

/* Reverse animation for the .skill p element */
@keyframes reverseFadeText {
    0% {
        opacity: 0; /* The final state of the fadeText animation */
    }
    100% {
        opacity: 1; /* The initial state of the fadeText animation */
    }
}

/* Apply reverse animations to .card and .skill p elements when the user hovers off the .skill element */
.skill:not(:hover) .card {
    animation: reverseMoveIcon 0.3s ease-in-out forwards;
    animation-fill-mode: both; /* Keep the final state of the reverse animation */
}

.skill:not(:hover) p {
    animation: reverseFadeText 0.2s ease-in-out forwards;
    animation-delay: 0.2s; /* Delay the reverse animation to match the original animation */
    animation-fill-mode: both; /* Keep the final state of the reverse animation */
}

@media (min-width: 320px) {
    
article {
  max-width: 80vw; /* Adjust the maximum width as needed */
  margin: 0 auto; /* Center the article horizontally */
  padding: 0px; /* Add padding to the article if desired */
  text-align: left; /* Align the content within the article to the left */
}

h2 {
    font-size: 4vw;
    font-weight: bold;
    margin-bottom: 10px;
    color: white;
  }
  
  p {
    font-size: 3vw;
    color: #01204c;
    text-align: justify;
  }

  .skills-container {
    width: 80vw;
    max-width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    padding: 4vw 5vw;
    border-radius: 15px;
    background-color: #e3e3e3; /* Rectangle background color */
    border: 0px solid #333; /* Border style */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
  }

  /* All about skill */

  .skill {
    position: relative;
    color: white;
    margin-right: 1vw;
    margin-left: 1vw;
    /* transition: all .3s ease-in-out; */
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  width: 12vw;
  height: 12vw;
  overflow: hidden;
}

img {
    width: 70%;
    height: auto;
  }

.back-card {
    position: absolute;
    width: 12vw; /* Adjust the size as needed */
    height: 12vw; /* Adjust the size as needed */
    background-color: #01204c; /* Set the background color */
    border-radius: 50%;
    opacity: 0; /* Set initial opacity to 0 */
    transform: scale(0); /* Set initial scale to 0 */
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

}


}

@media (min-width: 1280px) {

article {
  max-width: 1100px; /* Adjust the maximum width as needed */
  margin: 0 auto; /* Center the article horizontally */
  padding: 0px; /* Add padding to the article if desired */
  text-align: left; /* Align the content within the article to the left */
}

h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: white;
  }
  
  p {
    font-size: 1.2rem;
    color: #01204c;
    text-align: justify;
  }

  .skills-container {
    width: 32vw;
    max-width: 32vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    padding: 20px;
    border-radius: 15px;
    background-color: #e3e3e3; /* Rectangle background color */
    border: 0px solid #333; /* Border style */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Box shadow for depth */

  }

  /* All about skill */

  .skill {
    position: relative;
    color: white;
    margin-right: 25px;
    margin-left: 25px;
    /* transition: all .3s ease-in-out; */
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  width: 100px;
  height: 100px;
  overflow: hidden;
}

img {
    width: 80%;
    height: auto;
  }

.back-card {
    position: absolute;
    width: 100px; /* Adjust the size as needed */
    height: 100px; /* Adjust the size as needed */
    background-color: #01204c; /* Set the background color */
    border-radius: 50%;
    opacity: 0; /* Set initial opacity to 0 */
    transform: scale(0); /* Set initial scale to 0 */
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

}


}

</style>