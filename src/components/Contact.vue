<template>
	<div class="contact-container">

        <p class="contact-text" style="color: white; margin-bottom: 0;">You can drop me a line at</p>
        <a style="margin-top: -1rem;" class="email" 
		 href="mailto:andrei.ardelean31@gmail.com">
		<strong>andrei.ardelean31</strong>@<strong>gmail</strong>.com
		</a>
        <p class="contact-text" style="color: white; margin-top: 1rem;">You can also find me on</p>

        <SocialMedia style="text-align: center;"/>
    </div>
</template>

<script>
import SocialMedia from "./SocialMediaButtons.vue"

export default {
	components: {
		SocialMedia,
	}
}

</script>


<style scoped>

.contact-container {
	text-align: center;
	margin-bottom: 7%;
}

.contact-text {
  color: #1b2947;
  font-family: Georgia,serif;
  font-size: 20px;

}

.email {
  font-family: 'Avenir Next','Segoe ui',Ubuntu,sans-serif;
  text-decoration: none;
  color: rgb(70, 46, 74);
  background: linear-gradient(180deg,transparent 94%,#0b1c98 94%,#0b1c98 100%);
  background-repeat: repeat-x;
  background-position: 0 10px;
  transition: background-position 80ms ease-in;
}

.email:hover {
	background-position-x: 0%;
	background-position-y: 0%;
	background-repeat: repeat-x;
}

.email strong {
	color: #0b1c98;
	transition: color 0.3s ease;
	font-weight: bold;
}

.email:hover strong {
	color: rgb(70, 46, 74);
}

/* strong {
  color: #e96f92;
  transition: color 80ms;
}

strong:hover {
	color: rgb(70, 46, 74);
} */


@media (min-width: 320px) {

.contact-text {
  color: #1b2947;
  font-family: Georgia,serif;
  font-size: 3vw;
}

.email {
  font-family: 'Avenir Next','Segoe ui',Ubuntu,sans-serif;
  font-size: 3vw;
  text-decoration: none;
  color: rgb(70, 46, 74);
  background: linear-gradient(180deg,transparent 94%,#0b1c98 94%,#0b1c98 100%);
  background-repeat: repeat-x;
  background-position: 0 10px;
  transition: background-position 80ms ease-in;
}

.contact-container {
	text-align: center;
	margin-bottom: 2vw;
  margin-top: 10vw;
}

}

</style>