package main

import "fmt"
import "unicode/utf8"

func main() {
	var intVar int = 32767
	intVar = intVar + 1
	fmt.Println(intVar)

	var intNum1 = 3
	var intNum2 = 2
	fmt.Println(intNum1 + intNum2) // 5
	fmt.Println(intNum1 - intNum2) // 1
	fmt.Println(intNum1 * intNum2) // 6
	fmt.Println(intNum1 / intNum2) // 1
	fmt.Println(intNum1 % intNum2) // 1

	var floatVar float32 = 0.99
	floatVar = floatVar + 0.2
	fmt.Println(floatVar) // 1.19

	// floatVar = intVar + floatVar  --> Error: cannot perform intVar + floatVar (mismatched types int and float32)
	floatVar = float32(intVar) + floatVar
	fmt.Println(floatVar) // 32768.19

	var strVar string = "Hello"
	strVar = strVar + " World"
	fmt.Println(strVar) // Hello World

	var multiLineStrVar string = `Hello 
	World`
	fmt.Println(multiLineStrVar) // Hello 
															// World

	var concatStrVar string = "Hello" + " " + " World"
	fmt.Println(concatStrVar) // Hello World

	// len function gives the length no of bytes in a string
	fmt.Println(len("a"))           // 1
	fmt.Println(len("Hello World")) // 11
	fmt.Println(len("世界"))          // 6

	// utf8.RuneCountInString function gives the length no of runes in a string
	fmt.Println(utf8.RuneCountInString("世界")) // 2

	var byteVar byte = 'a'
	fmt.Println(byteVar) // 97

	// rune is an data type which is an alias for int32 which represents a  charater (Unicode code point) in Go
	var runeVar rune = 'a'
	fmt.Println(runeVar) // 97

	var boolVar bool = true
	boolVar = !boolVar
	fmt.Println(boolVar) // false

	// Type Conversion
	var intVar1 int = 10
	var floatVar1 float32 = 0.99
	var sum float32 = float32(intVar1) + floatVar1
	fmt.Println(sum) // 10.99

	// shorthand declaration
	intVar2 := 10        // automatically infers the type of the variable
	fmt.Println(intVar2) // 10

	// Multiple variable declaration
	n1, n2 := 10, 20
	fmt.Println(n1, n2) // 10 20

	// Swapping two variables
	n1, n2 = n2, n1
	fmt.Println(n1, n2) // 20 10

	// Constants
	const constVar int = 10
	// constVar = 20  --> Error: cannot assign to constVar
	fmt.Println(constVar) // 10

}
