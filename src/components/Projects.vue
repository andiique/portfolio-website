<template>
	<div class="project-container" style="margin-top: 5%;">
		<img class="img-left" src="../assets/brain.jpg">
		<div class="text-container text-right">
			<h3 class="title">
				Alzheimer's Game
				<p class="subtitle">(February-April/2023)</p>
			</h3>
			<p class="text">
				Card flip memory game designed to aid those suffering of Alzheimer's Disease
				by helping slow down the rapidly decreasing cognitive abilities. Developed with Unity. 
			</p>
		</div>
	</div>

	<div class="project-container" style="margin-top: 2%; justify-content: left;">
		<div class="text-container text-left">
			<h3 class="title">
				GroupChat App
				<p class="subtitle">(August/2023)</p>
			</h3>
			<p class="text" style="margin-right: 0px;">
				Relatively lightweight messaging app that uses a cloud for storage,
				developed using Android Studio.
			</p>
		</div>
		<img class="img-right" src="../assets/chat-app.png">
	</div>

	<div class="project-container" style="margin-top: 2%;">
		<img class="img-left" src="../assets/aco.jpeg">
		<div class="text-container text-right">
			<h3 class="title">
				Ant Colony Optimization
				<p class="subtitle">March/2023</p>
			</h3>
			<p class="text">
				Simulation of the natural behaviour of wild ants within the colony,
				which presents the ants' journey to wild food sources and back to 
				the nest, with a focus on their smart, yet overlooked approach on the task.
			</p>
		</div>
	</div>

	<div class="project-container" style="margin-top: 2%; justify-content: left;">
		<div class="text-container text-left">
			<h3 class="title">
				Role-Playing Game (RPG)
				<p class="subtitle">February-April/2023</p>
			</h3>
			<p class="text" style="margin-right: 0px;">
				RPG prototype, set in an open-world-like map. Implemented systems such as
				quest system, quest log, leveling system and AI-driven enemies.
			</p>
		</div>
		<img class="img-right" src="../assets/rpg.png">
	</div>
	
</template>


<style scoped>

.project-container {
	display: flex;
	align-items: center;
	justify-content: right;
}
/* 
.project-container:nth-child(2n+1) .j {
  left: 50%;
  text-align: left;
  padding-right: 0;
  padding-left: 25px;
} */

img {
  border-radius: 2px;
  position: relative;
  vertical-align: middle;
  border: 6px solid #fff;
  background: rgba(117,81,125,0.1);
  margin-left: 25px;
  box-shadow: 1px 4px 25px rgba(117,81,125,0.15);
  max-width: 17%; /* Ensure the image doesn't exceed its container's width */
  height: auto;
}

.img-right {
	left: 1%;
}

.img-left {
	right: 1%;
}

.i {
  border-radius: 2px;
  position: relative;
  right: 1%;
  vertical-align: middle;
  border: 6px solid #fff;
  background: rgba(117,81,125,0.1);
  margin-left: 25px;
  box-shadow: 1px 4px 25px rgba(117,81,125,0.15);
  max-width: 100%; /* Ensure the image doesn't exceed its container's width */
  height: auto;
}


/* De aici in jos, stiluri pentru text si alte prostii */


.text-container {
  position: relative;
  width: 50%;
  text-align: justify;
  vertical-align: middle;
  box-sizing: border-box;
  padding-right: 30%;   /*Cat de strans e textul*/
  font-size: 20px;
}

.text-right {
	left: 1%;
}

 .text-left {
  padding-left: 30%;
  padding-right: 0%;   /*Cat de strans e textul*/
  right: 1%;
  text-align: right;
}



.title {
  margin: 0;
  font-family: 'Avenir Next','Segoe ui',Ubuntu,sans-serif;
  font-weight: bold;
  font-size: 30px;
  line-height: 1;
  color: rgb(70, 46, 74);
}

.subtitle {
  font-family: serif;
  font-style: italic;
  font-size: 20px;
  color: #75517d;
  font-weight: normal;
  margin-top: 1%;
}

.text {
	font-family: Georgia,serif;
	font-size: 20px;
	margin-right: 50px;
	
}



</style>