<script>
import customIcon from 'vue-icon/lib/vue-feather.esm';

export default {
  components: {
    customIcon
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
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2 search-input" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0 search-button" type="submit">
              <custom-icon name="search" base-class="custom-icon"/>
            </b-button>
          </b-nav-form>
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
    .search-button {
      border-radius: 50%;
      width: 36px;
      height: 36px;
      background-color: $app-color;
      font-size: 9px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border: none;
      color: $app-bg-color;
      padding: 3px;
      position: relative;
      &::before {
        content: '';
        width: 28px;
        height: 28px;
        border: 2px solid $app-bg-color;
        border-radius: 50%;
        position: absolute;
      }
      .custom-icon {
        width: 15px;
      }
    }
  }
</style>
