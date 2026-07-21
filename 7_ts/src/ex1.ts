interface Vehicle {
  make: string;
  model: string;
  year: number;
}

const acceptVehicle = (vehicleUser: Vehicle): void => {
  console.log(`Veículo: ${vehicleUser.make} ${vehicleUser.model}, fabricado em ${vehicleUser.year}.`);
}

const vehicleModel: Vehicle = { make: 'Ford', model: 'Mustang', year: 1998 }

acceptVehicle(vehicleModel)