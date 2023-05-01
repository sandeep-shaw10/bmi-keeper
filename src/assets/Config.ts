// BG COLOR
const BG_COLOR_DARK = '#c2dfe7'
const BG_COLOR_LIGHT = '#0f172a'
const SPLASH_BG = '#0FD2FF'
const bgStyle = { 
    DARK: { backgroundColor: BG_COLOR_DARK },
    LIGHT: { backgroundColor: BG_COLOR_LIGHT }
 };


// UNITS
const LENGTH_UNITS: UNITProps[] = [
    { unit: "m", conversion: 1 },
    { unit: "cm", conversion: 0.01 },
    { unit: "ft", conversion: 0.3048 },
    { unit: "in", conversion: 0.0254 }
]
const WEIGHT_UNITS: UNITProps[] = [
    { unit: "kg", conversion: 1 },
    { unit: "lbs", conversion: 0.45359237 },
]
const SEX = [
    { val: 0, label: "Male" },
    { val: 1, label: "Female" },
]


// CALCULATOR VIEW
const UI_CONTAINER = {
    INNER: 12,
    OUTER: 10
}
const UI_WIDTH = 120


// STYLE
const STATUSBAR_BG = {
    LIGHT: BG_COLOR_DARK,
    DARK: BG_COLOR_LIGHT
}

// LINK
const APP_LINK = {
    GITHUB: "https://github.com/sandeep-shaw10",
    AMAZON: "https://www.amazon.com/dp/B0C1XC555F"
}

const SPLASH_SCREEN_TIME = 2000


export default bgStyle
export {
    LENGTH_UNITS,
    WEIGHT_UNITS,
    UI_CONTAINER,
    UI_WIDTH,
    SEX,
    STATUSBAR_BG,
    BG_COLOR_DARK,
    BG_COLOR_LIGHT,
    APP_LINK,
    SPLASH_BG,
    SPLASH_SCREEN_TIME
}