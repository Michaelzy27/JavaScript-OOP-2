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

    mode(numb1, numb2, numb3, numb4, numb5){

        let array = [numb1, numb2, numb3, numb4, numb5]
        
    }

}

const des = new descriptiveStatistics()
des.mean(2, 4, 6, 3, 8)
des.groupedMedian(20, 1, 55, 14, 3)
des.ungroupedMedian(20, 1, 55, 14, 3)


function numberSort(a, b) {
    return a - b
}