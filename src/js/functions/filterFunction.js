function objectFilter(objArray, filterKey, filterValue) {
  return objArray.filter(obj => obj[filterKey] === filterValue);
}

module.exports = { objectFilter };
