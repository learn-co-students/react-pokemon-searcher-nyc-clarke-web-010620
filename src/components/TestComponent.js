import React from 'react'

// Given an array_of_ints, 
// find the highest_product you can get from three of the integers.

let testArray1 = [1, 2, 3, 4]
let testArray2 = [4, 1, 7, 3, 9, 2, 1, 1, 11]
let testArray3 = [2, 1, 4, 3]


class TestComponent extends React.Component {

    highestProdAmongThree = (intArray) => {
        let i = 0;
        let prodArray = [];
            for (i = 0; i < intArray.length - 2; i++) {
                let prod = intArray[i] * intArray[i+1] * intArray[i+2] 
                prodArray.push(prod)
            }
        const reducer = (previousLargestNumber, currentLargestNumber) => {
                return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber
            }
        return prodArray.reduce(reducer, 0) 
    }

    betterProdAmongThree = (intArray) => {
        let sumArray = [];
        let num2Array = [];
        let num3Array = [];
        const reducer = (previousLargestNumber, currentLargestNumber) => {
            return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber
        };
        const reducer1 = (product, num) => {
            return product * num
        };

        let largest1 = intArray.reduce(reducer, 0)
        sumArray.push(largest1)
        intArray.forEach(int => {
            if (int !== largest1) {
                num2Array.push(int)
            }
        })
        let largest2 = num2Array.reduce(reducer, 0)
        sumArray.push(largest2)
        intArray.forEach(int => {
            if (int !== largest1 && int !== largest2) {
                num3Array.push(int)
            }
        })
        let largest3 = num3Array.reduce(reducer, 0)
        sumArray.push(largest3)
        return sumArray.reduce(reducer1, 1)
    }


    render() {
        console.log(11 * 7 * 9)
        return (
            <div>
                <h2>
                Array1:  {this.highestProdAmongThree(testArray1)}  | newAlg:  {this.betterProdAmongThree(testArray1)}  
                </h2>
                <br />
                <h2>
                Array2:  {this.highestProdAmongThree(testArray2)}  | newAlg:  {this.betterProdAmongThree(testArray2)}  
                </h2>
                <br />
                <h2>
                Array3:  {this.highestProdAmongThree(testArray3)}  | newAlg:  {this.betterProdAmongThree(testArray3)}  
                </h2>
            </div>
        )
    }
}
export default TestComponent