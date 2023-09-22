<template>
    <nav 
    :class="[`navbar-${theme}`, 'navbar', 'navbar-expand-lg']"
    style="padding-top: 20px; padding-bottom: 20px;">
        <div class="container-fluid">
            <a class="navbar-brand custom-text" 
            style="padding-left: 50px; padding-top: 20px; padding-bottom: 20px;" href="/">Andrei Ardelean</a>
            <div class="navbar-buttons">
                <!-- <router-link class="button" to="/oldabout">Old About</router-link> -->
                <router-link class="button" to="/about">About</router-link>
                <router-link class="button" to="/projects">Projects</router-link>
                <router-link class="button" to="/contact">Contact</router-link>
            </div>
        </div>
    </nav>
</template>

<script>

//import NavbarLink from './NavbarLink.vue'

export default {
    components: {
        //NavbarLink,
    },
    created() {
        this.getThemeSetting()
    },
    props: ['pages', 'activePage', 'navLinkClick'],
    data() {
        return {
            theme: 'light'
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light'

            if(this.theme == 'light') {
                theme = 'dark'
            }

            this.theme = theme
            this.storeThemeSetting()
        },
        storeThemeSetting() {
            localStorage.setItem('theme', this.theme)
        },
        getThemeSetting() {
            let theme = localStorage.getItem('theme')

            if(theme) {
                this.theme = theme
            }
        },
        pushToAbout() {
            this.$router.push('/about')
        }
    }
}
</script>

<style scoped>


.custom-text {
    color: #1b2947;
    font-weight: bold;
}

.navbar-buttons {
  display: flex;
  align-items: center;
  padding-right: 10%;
}

.button {
    background-color: transparent;
    color: #1b2947;
    border: 2px solid #1b2947;
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    margin-left: 10%;
    text-decoration: none;
    transition: background-color 0.3s ease; /* Add a smooth transition effect */

/* Initial styles for the button */
}

.button:hover {
background-color: darkred;
color: #fff;
border-color: darkred;

/* Styles for the button when hovered */
}

</style>