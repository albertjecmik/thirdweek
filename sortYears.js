const sortYears = arr => arr.sort((x,y) => y - x);
// sorts a given array and inverts the order so it is going to be descending not ascending

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
