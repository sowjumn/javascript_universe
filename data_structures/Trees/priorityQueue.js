//MAXHEAP

//In javascript args are passed by value but arr is an object so a reference is passed
// arr is the existing heap and n is the new element
function insertIntoHeap(arr, n) {
  var len;
  var i;

  //add the item to the end of the array
  len = arr.length;
  arr.push(n);
  len = len + 1;
  i = len;

  percolateUp(arr, i);
}

function percolateUp(arr, j) {
  var temp;
  var data = arr[j];

  while ((j !== 0) && (data > arr[(j-1)/2]) ) {
    arr[j] = arr[(j-1)/2];
    j = (j - 1)/2;
  }
  arr[j] = data;
}

function deleteFromHeap(arr) {
  //The only operation supported by heap is to delete from the root 
  // copy the last element to the first element and percolateDown

  var result = arr[0];
  //copy
  arr[0] = arr.pop();
  percolateDown(arr,0); 
}

function percolateDown(arr, i, last) {
  var left;
  var right;
  var max;
  while (i <= (Math.floor((last - 1)/2))) {
    left = 2*i + 1;
    right = 2*i + 2;

    if (arr[i] < arr[left]) {
      max = left;
    } else {
      max = i;
    }

    if (arr[max] < arr[right]) {
      max = right;
    }

    //swap max with i
    if (max !== i) {
      temp = arr[max];
      arr[max] = arr[i];
      arr[i] = temp;
      i = max;
    } else {
      break;
    }
  }
}

function heapSort(arr) {
  var i;
  var len = arr.length;

  for(i = Math.floor((len-2)/2); i !== 0; i = i - 1) {
    percolateDown(arr, i, len-1);
  }

  for(i = len-1; i !== 0; i = i - 1) {
    //exchange last with first
    temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;
    len--;
    percolateDown(arr, 0, len-1)
  }
}

heapSort([4, 1, 89, 0, 20, 15, 10]);