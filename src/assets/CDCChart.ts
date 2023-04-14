// Age 2 to 20

/*
LOW: 5th Percentile
MED: 85th Percentile
HIGH: 95th Percentile
*/

// Rough Estimation from chart upto 1 decimal places
// https://www.cdc.gov/growthcharts/data/set1clinical/cj41l023.pdf
const BOY = {
    "LOW": [0, 14.7, 14.3, 14, 13.8, 13.7, 13.7, 13.8, 14, 14.2, 14.6, 15, 15.4, 16, 16.5, 17.1, 17.7, 18.2, 18.7, 19.1],
    "MED": [0, 18.2, 17.4, 16.9, 16.8, 17, 17.4, 17.9, 18.6, 19.2, 20.2, 21, 21.8, 22.6, 23.4, 24.2, 24.9, 25.6, 26.3, 27.1],
    "HIGH": [0, 19.3, 18.3, 17.8, 17.9, 18.4, 19.1, 20, 21, 22.1, 23.2, 24.2, 25.2, 26, 26.8, 27.5, 28.2, 28.9, 29.7, 30.6]
}

// https://www.cdc.gov/growthcharts/data/set1clinical/cj41l024.pdf
const GIRL = {
    "LOW": [0, 14.4, 14, 13.7, 13.5, 13.4, 13.4, 13.5, 13.7, 14, 14.2, 14.8, 15.3, 15.8, 16.3, 16.8, 17.2, 17.5, 17.7, 17.8],
    "MED": [0, 18, 17.2, 16.8, 16.8, 17.1, 17.6, 18.3, 19.1, 20.0, 20.8, 21.7, 22.6, 23.3, 24, 24.6, 25.2, 25.7, 26.1, 26.5],
    "HIGH": [0, 19.1, 18.3, 18, 18.2, 18.8, 19.6, 20.6, 21.8, 22.9, 24.1, 25.2, 26.3, 27.2, 28.1, 28.9, 29.6, 30.3, 31, 31.8]
}

export default {
    BOY,
    GIRL
}

/*
Developed by the National Center for Health Statistics in collaboration with
the National Center for Chronic Disease Prevention and Health Promotion (2000).
Published May 30, 2000 (modified 10/16/00).
*/