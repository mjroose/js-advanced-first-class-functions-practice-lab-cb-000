// Code your solution in this file!
const logDriverNames = (drivers) => {
  drivers.forEach((driver) => {
    console.log(driver.name);
  });
};

const logDriversByHometown = (drivers, hometown) => {
  const matchingDrivers = drivers.filter((driver) => {
    return driver.hometown === hometown;
  });
  
  logDriverNames(matchingDrivers);
};