/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for( var i = 0; i < preferences.length; i++){
          var first = preferences[i];
          var second = preferences[preferences[i]-1];
          var third = preferences[preferences[preferences[i]-1]-1];
    if(first != second
    && second != third
    && third == (i+1))
    {
      count ++;
    }
  }
  return(count/3);
};