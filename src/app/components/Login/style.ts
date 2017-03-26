import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    "main": {
        "backgroundColor": "#FFF",
        "width": "100%",
        // "flex": "1 100%",
        "flex": 1,
        "alignItems": "center",
        "justifyContent": "center"
    },
    "loginStep": {
        // "textAlign": "center",
        "width": 300,
        /*"h1": {
            "fontWeight": "400"
        }*/
    },
    "formGroupLogin": {
        // "composes": "form-group from '../../../vendor/app.css'",
        "marginBottom": 42
    },
    "btn": {
        // "border": "none",
        // "outline": "none",
        // "cursor": "pointer",
        "backgroundColor": "#ccc",
        // "paddingTop": 1,
        // "paddingBottom": 1,
        // "paddingLeft": 75,
        // "paddingRight": 75,
        // "width": 100,
        // "height": 54,
        "borderRadius": 3,
    },
    "btnText": {
      "lineHeight": 54,
      "color": "#fff",
      "fontSize": 16,
      "textAlign": "center",
      // "textTransform": "uppercase"
    },
    "btn:active": {
        "paddingTop": 2,
        "paddingBottom": 0
    },
    "primary": {
        "backgroundColor": "#2fa9e2"
    },
    "primary:hover": {
        "backgroundColor": "#279ad0"
    }
})
