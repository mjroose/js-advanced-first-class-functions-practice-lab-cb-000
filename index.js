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

const driversByRevenue = (drivers) => {
  return [...drivers].sort((a, b) => {
    return a.revenue - b.revenue
  });
};

const driversByName = (drivers) => {
  return [...drivers].sort((a, b) => {
    a_name = a.name;
    b_name = b.name;
    return a_name.localecompare(b_name);
  });
}
