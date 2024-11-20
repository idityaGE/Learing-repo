package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

type contactInfo struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

type purchaseInfo struct {
	Name   string  `json:"name"`
	Price  float32 `json:"price"`
	Amount int     `json:"amount"`
}

func main() {
	intSlice := []int{1, 2, 3, 4, 5}
	float32Slice := []float32{1.1, 2.2, 3.3, 4.4, 5.5}

	fmt.Println(sumSliceGen(intSlice))
	fmt.Println(sumSliceGen(float32Slice))

	contacts := loadJSON[contactInfo]("contacts.json")
	fmt.Println(contacts)

	purchases := loadJSON[purchaseInfo]("purchases.json")
	fmt.Println(purchases)
}

func loadJSON[T any](filepath string) []T {
	data, err := ioutil.ReadFile(filepath)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to load file: %v\n", err)
		return nil
	}
	var loaded []T
	if err := json.Unmarshal(data, &loaded); err != nil {
		fmt.Fprintf(os.Stderr, "Failed to parse JSON: %v\n", err)
		return nil
	}
	return loaded
}

// using interface{} to accept any type of slice
func sumSlice(slice interface{}) interface{} {
	switch slice.(type) {
	case []int:
		sum := 0
		for _, v := range slice.([]int) {
			sum += v
		}
		return sum
	case []float32:
		sum := float32(0)
		for _, v := range slice.([]float32) {
			sum += v
		}
		return sum
	default:
		return "Unsupported type"
	}
}

// using generics to accept any type of slice
func sumSliceGen[T int | float32 | float64](slice []T) T {
	var sum T
	for _, v := range slice {
		sum += v
	}
	return sum
}

func isEmpty[T any](slice []T) bool {
	return len(slice) == 0
}
