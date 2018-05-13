<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PersonDetail',
  data() {
    return {
      who: {}
    };
  },
  async created() {
    await this.showPerson(this.$route.params.personUrl);
    this.who = this.Persons.active.Person;
  },
  computed: {
    ...mapGetters(['Persons'])
  },
  methods: {
    ...mapActions(['showPerson'])
  },
  watch: {
    async $route() {
      await this.showPerson(this.$route.params.personUrl);
      this.who = this.Persons.active.Person;
    }
  }
};
</script>

<template>
  <section class="PersonDetail">
    <b-container>
      <b-row>
        <b-col md="5" sm="12" class="PersonDetail__img">
          <img :src="who.img" alt="">
        </b-col>
        <b-col md="7" sm="12">
          <div class="PersonDetail__text">
            <h1 class="title">{{ who.name }}</h1>
            <h4 class="kind">
              <span v-for="(kind, index) in who.kind" :key="index">
                {{ kind }}
                <span v-if="index < who.kind.length - 1">,</span>
              </span>
            </h4>
            <p class="biography">
              {{ who.biography }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables/index.scss';

 .PersonDetail {
    margin-top: 94px;
    &__img {
      img {
        object-fit: contain;
        width: 100%;
      }
    }
    &__text {
      .title {
        margin-bottom: 15px;
        color: $color-red;
        font-size: 27px;
      }
      .kind {
        color: rgba($app-color, 0.5);
        font-size: 17px;
        margin-bottom: 15px;
      }
      .biography {
        word-break: break-all;
        font-size: 14px;
        letter-spacing: normal;
        line-height: 28px;
      }
    }
 }
</style>
