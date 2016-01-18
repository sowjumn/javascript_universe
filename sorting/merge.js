function merge(arr1, arr2) {
  var i = 0;
  var j = 0;
  var k = 0;
  var sorted_arr = []

  while ((i < arr1.length) && (j < arr2.length)) {
    if (arr1[i] < arr2[j]) {
      sorted_arr[k] = arr1[i];
      i++;
      k++;
    } else {
      sorted_arr[k] = arr2[j];
      j++;
      k++;
    }
  }

  while (i < arr1.length) {
    sorted_arr[k] = arr1[i]
    i++;
    k++;
  }

  while (j < arr2.length) {
    sorted_arr[k] = arr2[j]
    j++;
    k++;
  }

  return sorted_arr;
}


function mergeSort(a) {
  var i;
  var step = 1;

  while (step < a.length) {
    for(i = 0; i < a.length-step;)
      merge(a.slice(i,i+step-1), a.slice(i+step,))
    }
    step = step*2;
  }
}

console.log(merge([1,3], [2,4,6,8]))