package main

import (
	"fmt"
	"sync"
	"time"
)

// WaitGroup is a struct type that is used to wait for a collection of goroutines to finish executing. The main goroutine calls the Add() method to set the number of goroutines to wait for. Each goroutine runs and calls Done() method when it completes. The main goroutine calls the Wait() method to block until all goroutines have completed.
var wg = sync.WaitGroup{}

func main() {
	fmt.Println("main() started") // main func doen't wait for goroutine to finish
	// a new thread is created and the function printNumbers() is executed in that thread
	wg.Add(1) // increments the counter set by WaitGroup
	go printNumbers()

	// this loop is executed in the main thread and it will not wait for the goroutine to finish
	for i := 0; i < 10; i++ {
		fmt.Println("main: ", i)
	}
	wg.Wait() // blocks the main goroutine until the counter becomes 0
}

func printNumbers() {
	time.Sleep(5 * time.Second)
	// some time consuming task
	fmt.Println("Email sent")
	wg.Done() // decrements the counter set by Add() method
}
