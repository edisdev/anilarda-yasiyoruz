<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['Persons'])
  },
  created() {
    this.getPersons();
  },
  methods: {
    ...mapActions(['getPersons']),
  }
};
</script>

<template>
  <section class="Home">
    <h1> Gönüllerde , anılarıyla her zaman yaşayacak olanlara sonsuz saygılarımla ...</h1>
  </section>
</template>

<style lang="scss">
 .Home {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
 }
</style>
