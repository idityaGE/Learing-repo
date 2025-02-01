package main

import (
	"fmt"
)

func main() {
	// var p *int32 = new(int32) // gives a free memory location
	// *p = 10  // derefrencing the pointer


	var a int32 = 10
	var b *int32 = &a
	// shorthand
	// a := 10
	// b := &a

	fmt.Println("a:", a)
	fmt.Println("b:", b)
	fmt.Println("*b:", *b)

	*b = 20
	fmt.Println("a:", a)
	fmt.Println("b:", b)
	fmt.Println("*b:", *b)

	// pointer to pointer
	var c int32 = 10
	var d *int32 = &c
	var e **int32 = &d

	fmt.Println("c:", c)
	fmt.Println("d:", d)
	fmt.Println("e:", e)
	fmt.Println("*d:", *d)
	fmt.Println("**e:", **e)

	**e = 30
	fmt.Println("c:", c)
	fmt.Println("d:", d) 
	fmt.Println("e:", e)
	fmt.Println("*d:", *d)
	fmt.Println("**e:", **e)

	// pointer to array
	var slice = []int32{1, 2, 3, 4, 5} // slice is a pointer to the first element of the array
	var sliceCopy = slice // sliceCopy is a pointer to slice
	sliceCopy[0] = 100
	fmt.Println("slice:", slice)
	fmt.Println("sliceCopy:", sliceCopy)

	// pointer to struct
	type Person struct {
		Name string
		Age int
	}

	var person1 = Person{"John", 30}
	fmt.Println("person1:", person1)
	var person2 = &person1
	person2.Name = "Doe"
	person2.Age = 40
	fmt.Println("person1:", person1)
	fmt.Println("person2:", person2)


	// pointer to function
	thing1 := [5]float64{1, 2, 3, 4, 5}
	fmt.Printf("\nthing1: %p \n", &thing1)
	square(&thing1)
	fmt.Println(thing1)
} 

func square(thing2 *[5] float64) {
	for i := range thing2 {
		thing2[i] = thing2[i] * thing2[i]
	}
}