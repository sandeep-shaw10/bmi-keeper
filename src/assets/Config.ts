// BG COLOR
const BG_COLOR_DARK = '#c2dfe7'
const BG_COLOR_LIGHT = '#0f172a'
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


export default bgStyle
export {
    LENGTH_UNITS,
    WEIGHT_UNITS,
    UI_CONTAINER,
    UI_WIDTH,
    SEX,
    STATUSBAR_BG
}