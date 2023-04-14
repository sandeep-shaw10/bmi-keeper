import CDCChart from "../assets/CDCChart";


// meters and kg
export default function BMICalculation(age: number, sex: boolean, w: string, h: string): BMICalculationResult {
    const weight = parseFloat(w)
    const height = parseFloat(h)
    let bmi = weight / (height * height); 
    let {status, color, range, value } = getStatus(bmi, age, sex, height) 
    return { bmi, status, color, range, value };
}


function getStatus(bmi: number, age: number, sex: boolean, height: number) {
    let color = ["cyan", "cyan"]
    let status = ""
    let range = {
        lower: -1,
        upper: -1
    }
    let value = -1
    if(age <= 1){
        status = "Not for Infant Kids"
    }else if(age >= 2 && age <= 20){
        const percentile = childPercentile(age, bmi, sex, height)
        color = percentile.color
        status = percentile.status
        range = percentile.range
        value = percentile.value
    }else{
        if(bmi < 18.5) { color = ['#60a5fa', '#1e3a8a']; value = 0; status = 'Underweight' }
        else if(bmi >= 18.5 && bmi < 25) { color = ['#2dd4bf', '#14532d']; value = 1; status = 'Normal' }
        else if(bmi >= 25 && bmi < 30) { color = ['orange', '#881337']; value = 2; status = 'Overweight' }
        else if(bmi >= 30 && bmi < 35) { color = ['#f472b6', '#9d174d']; value = 3; status = 'Obese Class I' }
        else if(bmi >= 35 && bmi < 40) { color = ['#fb7185', '#9f1239']; value = 4; status = 'Obese Class II' }
        else { color = ['#f87171', '#7f1d1d']; value = 5; status = 'Obese Class III' }
        range.lower = 18.5*height*height
        range.upper = 24.9*height*height
    }
    return { color, status, range, value }
}


function childPercentile(age: number, bmi: number, sex: boolean, height: number){
    let color = ["#fb7185", ""]
    let status = ""
    let range = {
        lower: -1,
        upper: -1
    }
    let value = -1
    const childData = sex ? CDCChart.GIRL : CDCChart.BOY
    let lowBar = childData.LOW[age]
    let medBar = childData.MED[age]
    let highBar = childData.HIGH[age]
    if(bmi < lowBar) { color = ['#60a5fa', '#1e3a8a']; value = 0; status = 'Underweight' }
    else if(bmi >= lowBar && bmi <= medBar) { color = ['#2dd4bf', '#14532d']; value = 1; status = 'Normal' }
    else if(bmi >= medBar && bmi <= highBar) { color = ['orange', '#881337']; value = 2; status = 'Overweight' }
    else { color = ['#f87171', '#7f1d1d']; value = 3; status = 'Obese' }
    range.lower = childData.LOW[age]*height*height
    range.upper = childData.MED[age]*height*height
    return { color, status, range, value }
}