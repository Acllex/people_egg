'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // admin
  router.post('/api/admin', controller.admin.adminAdd);
  router.get('/api/admin', controller.admin.adminFind);
  // user
  router.post('/api/user', controller.user.userAdd);
  router.get('/api/user', controller.user.userFind);
  // city
  router.post('/api/city', controller.city.cityAdd);
  router.get('/api/city', controller.city.cityFind);
  router.put('/api/city', controller.city.cityUp);
  router.del('/api/city', controller.city.cityDelet);
  // area
  router.post('/api/area', controller.area.areaAdd);
  router.get('/api/area', controller.area.areaFind);
  router.put('/api/area', controller.area.areaUp);
  router.del('/api/area', controller.area.areaDelet);
  // estate
  router.post('/api/estate', controller.estate.estateAdd);
  router.get('/api/estate', controller.estate.estateFind);
  router.put('/api/estate', controller.estate.estateUp);
  router.del('/api/estate', controller.estate.estateDelet);
  // information
  router.post('/api/information', controller.information.informationAdd);
  router.get('/api/information', controller.information.informationFind);
  router.put('/api/information', controller.information.informationUp);
  router.del('/api/information/:_id', controller.information.informationDelet);

  // people
  router.get('/api/people', controller.people.peopleSee);
};
