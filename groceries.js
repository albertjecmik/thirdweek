const groceries = function(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length-1; i++) {
      newArr.push(arr[i].item)
    }
    if (arr.length > 2) {
      let newArr2 = [];
      for (let j = 0; j <= newArr.length-3; j++) {
        newArr2.push(newArr[j]);
  };
     return newArr2.join(', ') + `, ${newArr[newArr.length-2]} and ${newArr[newArr.length-1]}`;
    } else if (arr.length === 2) {
      return newArr.join(' and ');
    } else {
      return newArr.join(', ');
    };
  
  };
  
  console.log(groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}]));
  
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
  // returns 'Carrots, Hummus, Pesto and Rigatoni'
   
  console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
  // returns 'Bread and Butter'
   
  console.log(groceries( [{item: 'Cheese Balls'}] ));
  // returns 'Cheese Balls'  