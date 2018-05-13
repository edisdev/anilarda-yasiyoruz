module.exports = {
  eslint: {
    globals: {
      jest: true,
      expect: true,
      mockFn: true,
      config: true,
      afterEach: true,
      beforeEach: true,
      describe: true,
      it: true,
      runs: true,
      waitsFor: true,
      pit: true,
      require: true,
      xdescribe: true,
      xit: true
    },
    rules: {
      'prefer-template': 0,
      'linebreak-style': 0,
      'comma-dangle': 0,
      'no-console': 0,
      'function-paren-newline': 0,
      'arrow-parens': 0,
      'vue/max-attributes-per-line': 0,
      'import/prefer-default-export': 0,
      'max-len': 0,
      'no-useless-escape' : 0
    }
  }
}  