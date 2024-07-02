//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];   
      }
    }
    return min;
  }

//Sort each array in ascending order.
function sortedArrayAscending(arr){
    let newAscendingArray = [];
  
    while(arr.length !== 0){
      let num = findMinValue(arr) ;
      let numIndex = arr.indexOf(num);
      arr.splice(numIndex, 1);
      newAscendingArray.push(num);   
    }
    return newAscendingArray;
  }
  console.log(sortedArrayAscending(nums1));


//Sort each array in descending order.
function sortedArrayDescending(arr){
    let newdDescendingArray = [];
  
    while(arr.length !== 0){
      let num = findMinValue(arr) ;
      let numIndex = arr.indexOf(num);
      arr.splice(numIndex, 1);
      newdDescendingArray.push(num);
    }
    return newdDescendingArray.reverse();
  }
  console.log(sortedArrayDescending(nums2));