export interface TemperatureScale {
	readonly name: string;
	readonly symbol: string;
	toKelvin(value: number): number;
	fromKelvin(kelvin: number): number;
}

export const Kelvin: TemperatureScale = {
	name: 'kelvin',
	symbol: 'k',
	toKelvin: (value: number) => value,
	fromKelvin: (value: number) => value
};

export const Celsius: TemperatureScale = {
	name: 'celsius',
	symbol: 'c',
	toKelvin: (value: number) => value + 273.15,
	fromKelvin: (value: number) => value - 273.15
};

export const Fahrenheit: TemperatureScale = {
	name: 'fahrenheit',
	symbol: 'f',
	toKelvin: (value: number) => (value - 32) * (5 / 9) + 273.15,
	fromKelvin: (value: number) => (value - 273.15) * (9 / 5) + 32
};

export const Rakine: TemperatureScale = {
	name: 'rakine',
	symbol: 'ra',
	toKelvin: (value: number) => value * (5 / 9),
	fromKelvin: (value: number) => value * (9 / 5)
};

export const Romer: TemperatureScale = {
	name: 'romer',
	symbol: 'ro',
	toKelvin: (value: number) => (value - 7.5) * (40 / 21) + 273.15,
	fromKelvin: (value: number) => (value - 273.15) * (21 / 40) + 7.5
};

export const Newton: TemperatureScale = {
	name: 'newton',
	symbol: 'n',
	toKelvin: (value: number) => value * (100 / 33) + 273.15,
	fromKelvin: (value: number) => (value - 273.15) * (33 / 100)
};

export const Delisle: TemperatureScale = {
	name: 'delisle',
	symbol: 'de',
	toKelvin: (value: number) => 373.15 - value * (2 / 3),
	fromKelvin: (value: number) => (373.15 - value) * (3 / 2)
};

export const Reamur: TemperatureScale = {
	name: 'reamur',
	symbol: 're',
	toKelvin: (value: number) => value * (5 / 4) + 273.15,
	fromKelvin: (value: number) => (value - 273.15) * (4 / 5)
};

export class Temperature {
	private readonly kelvin: number;

	private constructor(value: number) {
		this.kelvin = value;
	}

	static from(value: number, scale: TemperatureScale) {
		return new Temperature(scale.toKelvin(value));
	}

	as(scale: TemperatureScale): number {
		return scale.fromKelvin(this.kelvin);
	}
}
