module.exports = {
    "main": {
        "backgroundColor": "#FFF",
        "width": 100,
        "flex": "1 100%",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "loginStep": {
        "textAlign": "center",
        "width": 300,
        "h1": {
            "fontWeight": "400"
        }
    },
    "formGroupLogin": {
        "composes": "form-group from '../../../vendor/app.css'",
        "marginBottom": 42
    },
    "buttonbtn": {
        "border": "none",
        "outline": "none",
        "cursor": "pointer",
        "backgroundColor": "#ccc",
        "lineHeight": 54,
        "color": "#fff",
        "paddingTop": 1,
        "paddingBottom": 1,
        "paddingLeft": 75,
        "paddingRight": 75,
        "width": 100,
        "borderRadius": 3,
        "fontSize": 16,
        "textAlign": "center",
        "textTransform": "uppercase"
    },
    "buttonbtn:active": {
        "paddingTop": 2,
        "paddingBottom": 0
    },
    "buttonbtnprimary": {
        "backgroundColor": "#2fa9e2"
    },
    "buttonbtnprimary:hover": {
        "backgroundColor": "#279ad0"
    }
}