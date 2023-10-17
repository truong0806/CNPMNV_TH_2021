var { CityDb } = require("./model");

var City = {
  getAllCity: function (callback) {
    return CityDb.find().then(callback);
  },
  getCityById: function (id, callback) {
    return CityDb.findById(id).then(callback);
  },
  addCity: function (city, callback) {
    const cityDb = new CityDb({
      TenThanhPho: city.TenThanhPho,
      ImageThanhPho: city.ImageThanhPho,
    });
    return cityDb.save(cityDb).then(callback);
  },
  deleteCity: function (id, callback) {
    return CityDb.findByIdAndRemove(id).then(callback);
  },
  updateCity: function (id, city, callback) {
    return CityDb.findByIdAndUpdate(
      id,
      { TenThanhPho: city.TenThanhPho, ImageThanhPho: city.ImageThanhPho },
      {
        useFindAndModify: false,
      }
    ).then(callback);
  },
};
console.log("🚀 ~ file: city.js:30 ~ City.city:", City.city)

module.exports = City;
