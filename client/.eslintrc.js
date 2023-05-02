/* eslint-disable */

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        // enable additional rules
        "indent": ["off", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["off", "double"],
        "semi": ["off", "always"],
        "no-unused-vars": ["off"],
        "react/prop-types": 0,
        "no-extra-boolean-cast": 0,

        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
         "for-direction": "off",
    },
    "plugins": [
        "react"
    ]
}