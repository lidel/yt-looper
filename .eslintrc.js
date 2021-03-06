module.exports = {
  "globals": {
    "module": true,
    "exports": true,
    "jQuery": true,
    "$": true,
    "_": true,
    "$LAB": true
  },
  "plugins": ["you-dont-need-lodash-underscore"],
    "rules": {
        "indent": [
            0,
            2
        ],
        "quotes": [
            1,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            1,
            "always"
        ],
        "comma-dangle": 0, // no tears just dreams
        "no-unused-vars": 1,
        "no-redeclare": 1,
        "no-console": 0
    },
    "parserOptions": {
      "ecmaFeatures": {
        "modules": true,
        "arrowFunctions": true
      }
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": "eslint:recommended"
};
