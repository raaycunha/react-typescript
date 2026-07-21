"use strict";
const acceptVehicle = (vehicleUser) => {
    console.log(`Veículo: ${vehicleUser.make} ${vehicleUser.model}, fabricado em ${vehicleUser.year}.`);
};
const vehicleModel = { make: 'Ford', model: 'Mustang', year: 1998 };
acceptVehicle(vehicleModel);
