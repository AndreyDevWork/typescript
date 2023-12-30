const electricityUserData = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData = {
	readings: 3,
	units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [1, 1]; // [electricity, water]



const sendInvoice = (
	[ePayment, wPayment]: number[],
	waterUserData: {units: string, readings: number},
	electricityUserData: {units: string, readings: number}
): string => {
	const text: string = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${ePayment}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${wPayment}€`;

	return text;
};


console.log(sendInvoice(monthPayments, electricityUserData, waterUserData))

const calculatePayments = ({
   mode, readings,}:{mode: string,readings: number},
   wData: {readings: number}, elRate: number, wRate: number): void => {
	if (mode === "double" && readings < 50) {
		monthPayments[0] = readings * elRate * 0.7;
	} else {
		monthPayments[0] = readings * elRate;
	}

	monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);