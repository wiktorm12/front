 <template>
  <div class="home">
    <loadingSection v-if="!api" />
    <headerSection
      :logo="data.logo"
      v-if="api"
    />
    <nameSection 
      :name="data.name" 
      :links="JSON.parse(data.links)"
      v-if="api"
    />
    <aboutSection 
      :text="data.about"
      v-if="api"
    />
    <projectSection 
      :projects="JSON.parse(data.projects)"
      v-if="api"
    />
    <contactSection
      v-if="api"
    />
    <footerSection
      :text="data.footer"
      v-if="api"
    />
  </div>
</template>

<script>
import loadingSection from './components/loadingSection.vue';

import nameSection from './components/nameSection.vue';
import headerSection from './components/logoSection.vue';
import projectSection from './components/projectSection.vue';
import aboutSection from './components/aboutSection.vue';
import contactSection from './components/contactSection.vue';
import footerSection from './components/footerSection.vue';

export default {
  components: {
    nameSection,
    headerSection,
    projectSection,
    aboutSection,
    contactSection,
    footerSection,
    loadingSection
  },
  data() {
    return {
      api: false,
      data: {
        name: "",
        logo: "",
        footer: "",
        about: "",
        links: [],
        projects: []
      }
    }
  },
  mounted: function () {
    this.$nextTick(async function () {
      await this.$recaptchaLoaded()
      const token = await this.$recaptcha('login')

      await fetch(`${this.$store.state.api}/home`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'recaptcha': token
        }
      })
      .then( i => i.json() )
      .then( context => {
        this.data = context;
        this.api = true;
      })
      .catch( () => location.pathname = "/error" )
    })
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .home{
    width: 100%;
    background: #06070f;
    min-height: 100vh;
  }
  .fullscreen{
    width: 100%;
    min-height: 100vh;
    padding-bottom: 100px;
    padding-top: 100px;
    @media (max-width: 600px){
      min-height: 500px;
    }
  }
</style>
