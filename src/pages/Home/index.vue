<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      smallPersonList: {},
      bigPersonList: {}
    };
  },
  computed: {
    ...mapGetters(['Persons']),
  },
  created() {
    this.getPersons();
  },
  methods: {
    ...mapActions(['getPersons']),
  },
  watch: {
    Persons() {
      if (this.Persons.loaded) {
        this.smallPersonList = this.Persons.data.allPersons.filter(p => (p.url === 'kerim-tekin') || (p.url === 'baris-manco'));
        this.bigPersonList = this.Persons.data.allPersons.filter(p => (p.url !== 'kerim-tekin') && (p.url !== 'baris-manco'));
      }
    }
  }
};
</script>

<template>
  <section class="Home">
    <b-container>
      <b-row class="Person">
        <b-col md="4" sm="12">
          <b-col cols="12"
                 class="Person__item"
                 v-for="person in smallPersonList"
                 :key="person.id">
            <router-link :to="{name: 'PersonDetail', params: {personUrl: person.url}}" class="Person__item__name">{{ person.name }}</router-link>
            <img class="Person__item__img" :src="person.img" :alt="person.name">
          </b-col>
        </b-col>
        <b-col md="8" sm="12">
          <b-row>
            <b-col md="6"
                   sm="12"
                   class="Person__item"
                   v-for="person in bigPersonList"
                   :key="person.id">
              <router-link :to="{name: 'PersonDetail', params: {personUrl: person.url}}" class="Person__item__name">{{ person.name }}</router-link>
              <img class="Person__item__img" :src="person.img" :alt="person.name">
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/variables/index.scss';

 .Home {
   margin-top: 94px;
   .Person {
     &__item {
      position: relative;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        .Person__item__name {
          display: flex;
        }
      }
      &__img {
        width: 100%;
        height: 100%;
      }
      &__name {
        position: absolute;
        background: rgba(#000,.7);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        color: $app-color;
        text-decoration: none;
        font-weight: bold;
      }
     }
   }
 }
</style>
