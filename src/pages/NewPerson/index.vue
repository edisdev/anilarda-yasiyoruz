<script>
import { PersonModel } from '@/models';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewPerson',
  data() {
    return {
      PersonModel,
      form: {},
    };
  },
  computed: {
    ...mapGetters(['Persons'])
  },
  methods: {
    ...mapActions(['newPerson']),
    onValid(name) {
      const input = this.$validator.fields.items.find(item => item.name === name);
      switch (name) {
        case 'name':
          this.PersonModel.validStatus.name = input.flags.valid;
          break;
        case 'kind':
          this.PersonModel.validStatus.kind = input.flags.valid;
          break;
        case 'url':
          this.PersonModel.validStatus.url = input.flags.valid;
          break;
        case 'img':
          this.PersonModel.validStatus.img = input.flags.valid;
          break;

        default:
          break;
      }
    },
    onSubmit() {
      const kindArray = (this.form.kind.split(',')).map(item => `"${item}"`).join(',');
      const { model } = new PersonModel({
        ...this.form,
        kind: kindArray
      });
      this.newPerson(model);
    },
    formValidate() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.onSubmit();
        }
      });
    }
  }
};
</script>

<template>
  <section class="PersonForm">
    <b-container>
      <b-row>
        <b-col md="6" sm="12" class="PersonForm__img">
          <img src="http://image.graphic-idea.com/big/141/macbook-laptop-with-journal-book-038-coffee-140679.jpg" alt="">
          <h1>Unutulmasını istemediğin değerli bir ismi buradan ekleyebilirsin ..</h1>
        </b-col>
        <b-col md="6" sm="12" class="PersonForm__form">
          <b-form @submit.prevent="formValidate">
            <b-form-group
              id="fieldset1"
              description="Kayıt etmek istediğiniz kişinin adı"
              label="İsim"
              label-for="input1">
              <b-form-input id="input1"
                            v-model.trim="form.name"
                            name="name"
                            @input="onValid('name')"
                            :class="errors.has('name') ? 'is-invalid' : (this.PersonModel.validStatus.name ? 'is-valid' : '') "
                            v-validate="PersonModel.validationRules.name"/>
            </b-form-group>

            <b-form-group
              id="fieldset2"
              description="Müzisyen, rock, aktör vs. (Birden fazla alan gireceksiniz lüften alanları virgül ile ayırarak yazınız)"
              label="Alan"
              label-for="input2">
              <b-form-input id="input2"
                            v-model.trim="form.kind"
                            name="kind"
                            @input="onValid('kind')"
                            :class="errors.has('kind') ? 'is-invalid' : (this.PersonModel.validStatus.kind ? 'is-valid' : '') "
                            v-validate="PersonModel.validationRules.kind"/>
            </b-form-group>

            <b-form-group
              id="fieldset3"
              description="Kişi için bir link oluştur. Örneğin: baris-akarsu "
              label="Url"
              label-for="input3">
              <b-form-input id="input3"
                            v-model.trim="form.url"
                            name="url"
                            @input="onValid('url')"
                            :class="errors.has('url') ? 'is-invalid' : (this.PersonModel.validStatus.url ? 'is-valid' : '') "
                            v-validate="PersonModel.validationRules.url"/>
            </b-form-group>

            <b-form-group
              id="fieldset4"
              description="Paylaşmak istediğiniz kişinin bir fotoğrafının linki"
              label="Fotoğraf"
              label-for="input4">
              <b-form-input id="input4"
                            v-model.trim="form.img"
                            name="img"
                            @input="onValid('img')"
                            :class="errors.has('img') ? 'is-invalid' : (this.PersonModel.validStatus.img ? 'is-valid' : '') "
                            v-validate="PersonModel.validationRules.img"/>
            </b-form-group>
            <button class="btn add-btn"
                    :class="{'is-loading' : Persons.creating.loading}"
                    :disabled="Persons.creating.loading">
              <span v-if="Persons.creating.loading">KİŞİ EKLENIYOR..</span>
              <span v-else>KİŞİ EKLE</span>
            </button>
          </b-form>
          <div class="alert alert-success" v-if="Persons.creating.loaded">
            KİŞİ EKLENDİ, KATKILARINIZ İÇİN TEŞEKKÜR EDERİZ  ..
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style lang="scss">
@import '@/assets/scss/variables/index.scss';

  .PersonForm {
    margin-top: 94px;
    &__img {
      img {
        width: 100%;
      }
    }
    .add-btn {
      background-color: $color-red;
      color: #fff;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      &.is-loading {
        opacity: 0.5;
        &::before {
          content: '';
          border: 3px dashed #fff;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          animation: loading 1.5s .3s cubic-bezier(.17,.37,.43,.67) infinite;
          margin-right: 10px;
        }
      }
    }
    @keyframes loading {
    0% {transform: rotate(0deg);}
    50% {transform: rotate(180deg);}
    100% {transform: rotate(360deg);}
   }
  }
</style>
