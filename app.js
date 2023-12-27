// 1. Quick sort

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivotIndex = Math.floor(arr.length / 2);
//   const pivot = arr[pivotIndex];

//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === pivot) {
//       continue;
//     }

//     if (arr[i] > pivot) {
//       right.push(arr[i]);
//     } else {
//       left.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort([9, -3, 5, 2, 6, 8, -6, 1, 3]));

// 2. Linear Search

// function linearSearch(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(linearSearch([2, 3, 5, 7, 9], -7));

// 3. Binary Search

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 3, 5, 7, 8, 10, 12, 15, 18, 20], 7));
