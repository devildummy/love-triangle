/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
    let p = preferences;
    let first, second, third;
    for (let i=0;i<p.length;i++){
        if(p[i]==undefined)
        continue;
      first = p[i];
      second = p[first-1];
      third = p[second-1];
        
      if (first!=second && second!=third && third==i+1){
        count++;
        p[second-1]=undefined;
        p[first-1]=undefined;
        p[i]=undefined;
      }
    }
    return count;
};