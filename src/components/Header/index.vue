<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      searchList: {},
      searchKey: ''
    };
  },
  computed: {
    ...mapGetters(['Persons']),
  },
  methods: {
    /* eslint-disable space-before-function-paren, func-names */
    onSearchPerson: _.debounce(function () {
      if (this.searchKey) {
        const getIndex = (item, searchKey) => (item.search(searchKey) > -1);
        const res = this.Persons.data.allPersons.filter(
          item => getIndex(item.name.toLowerCase(), this.searchKey)
        );
        this.searchList = res;
      }
    }, 300)
  },
  watch: {
    searchKey() {
      if (this.searchKey.length === 0) {
        this.searchList = {};
      }
    },
    $route() {
      this.searchKey = '';
    }
  }
};
</script>

<template>
  <b-navbar class="Header" toggleable="md" type="dark">
    <b-container>
      <b-navbar-toggle target="nav_collapse"/>
      <router-link class="navbar-brand" to="/">Anılarda Yaşıyoruz</router-link>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Sanatçılar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Bilim İnsanları</router-link>
          </li>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link new-person" to="/kisi-ekle">Kişi Ekle</router-link>
            </li>
          </b-navbar-nav>
          <div class="search-field">
            <b-form-input size="sm"
                          class="mr-sm-2 search-input"
                          type="text"
                          v-model="searchKey"
                          placeholder="Search"
                          @input="onSearchPerson" />
            <div class="search-result" v-if="searchList.length > 0">
              <router-link :to="{name: 'PersonDetail', params: {personUrl: sl.url}}" v-for="sl in searchList" :key="sl.name">{{ sl.name }}</router-link>
            </div>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<style lang="scss">
@import '@/assets/scss/variables/index.scss';

  .Header {
    box-shadow: 2px 5px 10px rgba(#999, 0.2);
    z-index: 999;
    background: $app-bg-color;
    position: fixed;
    width: 100%;
    top: 0;
    .navbar-brand {
      color: $color-red !important;
      font-family: 'Pacifico', cursive;
      font-size: 23px;
    }
    .navbar-nav {
      transform: translateY(3px);
      .nav-item {
        .new-person {
          background: $color-red;
          color: $app-color;
          border-radius: 3px;
          font-size: 14px;
          margin-right: 7px;
          transform: translateY(-3px);
        }
      }
    }
    .search-field {
      position: relative;
      .search-result {
        background: #fff;
        color: $app-bg-color;
        position: absolute;
        width: 100%;
        padding: 7px;
        a {
          color: $app-bg-color;
          text-decoration: none;
          display: block;
          padding-top: 5px;
          padding-bottom: 5px;
          width: 100%;
          &:not(:last-child) {
            border-bottom: 1px solid #ccc;
          }
          &:hover {
            color: $color-red;
          }
        }
      }
    .search-input {
      color: $app-color;
      background: $app-bg-color;
      border-color: rgba(#999, 0.4);
      height: 36px;
      &:focus {
        border: 1px solid $app-color;
        box-shadow: none;
      }
    }
   }
  }
</style>
