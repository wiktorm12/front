<template>
  <font-awesome-icon :icon="icon" />
</template>

<script>

import { faGithub, faFacebook, faTwitter, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export default {
    computed: {
        icon(){
            switch (this.name){
                case "github": return faGithub;
                case "facebook": return faFacebook;
                case "twitter": return faTwitter;
                case "mail": return faEnvelope;
                case "linked": return faLinkedin;
                case "discord": return faDiscord;
                default: return faTimes;
            }
        }
    },
    props: {
        name: String
    }
}
</script>

<style scoped lang="scss">
    
</style>