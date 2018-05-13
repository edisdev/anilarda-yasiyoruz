
import { pick } from 'lodash';

export class PersonModel {
  constructor(data = {}) {
    this.data = data;
    this.model = this.populateModel();
    this.form = this.populateModel();
  }
    static validationRules = {
      name: { required: true, min: '4' },
      kind: { required: true },
      url: { required: true, regex: '([a-z0-9]+)$' },
      img: { required: true, regex: '/([-a-zA-Z0-9:%_\+.~#?&//=]*)/' }
    };

    static validStatus = {
      name: false,
      kind: false
    }
    populateModel() {
      return pick(this.data, ['name', 'kind', 'url', 'img']);
    }
}

export default {
  PersonModel
};
