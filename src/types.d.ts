// Units
interface UNITProps {
  unit: string,
  conversion: number
}


// Context Value
type AppStateContextValue = {
    isOpen: boolean;
    theme: boolean;
    setIsOpen: (isOpen: boolean) => void;
    setTheme: (theme: boolean) => void;
    heightUnit: UNITProps;
    setHeightUnit: (heightUnit: UNITProps) => void
    weightUnit: UNITProps;
    setWeightUnit: (weightUnit: UNITProps) => void,
    language: string,
    setLanguage: (language: string) => void,
    t: TFunction<"translation", undefined, "translation">
};


// BMI Calculation Props
interface BMICalculationResult {
  bmi: number;
  status: string;
  color: string[];
  range: {
      lower: number,
      upper: number
  },
  value: number
}