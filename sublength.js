const subLength = (str, char) => {
    let x = str.split('').filter(y => y == char)
    if (x.length > 2 ) {
    return 0;
    }
    if ( x.length < 2) {
    return 0;
    }
    
    if (x.length === 2 ) {
    return str.lastIndexOf(char) - str.indexOf(char) +1 }
    };
    
    console.log(subLength('Saturday', 'a'));
    /*
    console.log (subLength(‘summer’, ‘m’));
    console.log (subLength(‘digitize’, ‘i’));
    console.log (subLength(‘cheesecake’, ‘k’));
    */