class descriptiveStatistics {
    measuresOfCentralTendency = 3
    mesauresOfDispersion = 5

    mean(numb1, numb2, numb3, numb4, numb5) {

        let array = [numb1, numb2, numb3, numb4, numb5]
        let entryTotalValue = numb1 + numb2 + numb3 + numb4 + numb5
        let entryLength = array.length
        let mean = entryTotalValue/entryLength
        console.log(mean)

    }

    groupedMedian(numb1, numb2, numb3, numb4, numb5) {

        let array = [numb1, numb2, numb3, numb4, numb5]
        array.sort(numberSort)
        console.log(array)
        console.log(array[2])

    }

    ungroupedMedian(numb1, numb2, numb3, numb4, numb5){

        let array = [numb1, numb2, numb3, numb4, numb5]
        console.log(array)
        console.log(array[2])

    }

    mode(numb1, numb2, numb3, numb4, numb5, numb6, numb7, numb8){

        let array = [numb1, numb2, numb3, numb4, numb5, numb6, numb7, numb8]
        let mode = getMode(array)
        console.log(mode)
    }

}

const des = new descriptiveStatistics()
des.mean(2, 4, 6, 3, 8)
des.groupedMedian(20, 1, 55, 14, 3)
des.ungroupedMedian(20, 1, 55, 14, 3)
des.mode(4, 20, 14, 93, 14, 30, 20, 20)


function numberSort(a, b) {
    return a - b
}

function getMode(array) {
    // count amount of occurences of each number
  
    // create object
    const obj = {};
    // loop over array
    array.forEach(number => {
      // for each number in array,
      // if it doesn't already exist as a key on the
      // object, create one and set its value to 1.
      if (!obj[number]) {
        obj[number] = 1;
      } else {
        // if it already exists as key on the object,
        // increment its corresponding value.
        obj[number] += 1;
      }
    });
    
    // return object key with highest value.
    let highestValue = 0;
    let highestValueKey = -Infinity;
  
    for (let key in obj) {
      const value = obj[key];
      if (value > highestValue) {
        highestValue = value;
        highestValueKey = key;
      }
    }
  
    // convert key back to number
    return Number(highestValueKey);
  }