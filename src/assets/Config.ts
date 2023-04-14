// BG COLOR
const BG_COLOR = '#c2dfe7'
const bgStyle = { backgroundColor: BG_COLOR };

// UNITS
const LENGTH_UNITS = [
    { unit: "m", conversion: 1 },
    { unit: "cm", conversion: 1 },
    { unit: "ft", conversion: 1 },
    { unit: "in", conversion: 1 }
]
const WEIGHT_UNITS = [
    { unit: "kg", conversion: 1 },
    { unit: "lbs", conversion: 1 },
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

export default bgStyle
export {
    LENGTH_UNITS,
    WEIGHT_UNITS,
    UI_CONTAINER,
    UI_WIDTH,
    SEX
}