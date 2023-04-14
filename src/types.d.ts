type AppStateContextValue = {
    isOpen: boolean;
    theme: boolean;
    setIsOpen: (isOpen: boolean) => void;
    setTheme: (theme: boolean) => void;
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