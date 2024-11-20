package main

import (
	"fmt"
	"math/rand"
	"time"
)

/*
	//! Channel
	// Channels are used to communicate between goroutines. They are typed and can be used to send and receive data.
	// Channels are used to synchronize goroutines. They are used to prevent goroutines from accessing shared resources at the same time.
	//- Holds a value of a specific type.
	//- Listen for data (receive) and send data.

	func main() {
		var c = make(chan int, 10)  // Create a channel of type int.
		// buffer size of 10 -> the channel can hold 10 values before it is blocked.
		go process(c) 								// Send a value to the channel.
		// c <- 10 => when we send a value to the channel, the goroutine will be blocked until the value is received by another goroutine.
		// i := <- c								// Receive a value from the channel.
		// fmt.Println(i)
		for i := range c { 				// Receive a value from the channel.
			fmt.Println(i)
			time.Sleep(1 * time.Second)
		}
	}

	// In simple terms, before sending a value to the channel, make sure that there is a goroutine or code that is ready to receive the value.

	func process(c chan int) {

		// defer -> do this right before the function is done.
		defer close(c) // Close the channel when the goroutine is done.
		for i := 0; i < 10; i++ {
			c <- i
		}
		fmt.Println("Done sending values to the channel.")
	}
*/

var MAX_CHICKEN_PRICE float32 = 5
var MAX_TOFU_PRICE float32 = 3

func main() {
	var chickenChannel = make(chan string)
	var tofuChannel = make(chan string)

	var website = []string{"walmart.com", "costco.com", "wholefoods.com"}

	for i := range website {
		go checkChickenPrice(website[i], chickenChannel)
		go checkTofuPrice(website[i], tofuChannel)
	}

	sendMessage(chickenChannel, tofuChannel)
}

func checkTofuPrice(website string, tofuChannel chan string) {
	for {
		time.Sleep(1 * time.Second)
		price := rand.Float32() * 10
		if price < MAX_TOFU_PRICE {
			tofuChannel <- website
			break
		}
	}
}

func checkChickenPrice(website string, chickenChannel chan string) {
	for {
		time.Sleep(1 * time.Second)
		price := rand.Float32() * 10
		if price < MAX_CHICKEN_PRICE {
			chickenChannel <- website
			break
		}
	}
}

func sendMessage(chickenChannel chan string, tofuChannel chan string) {
	select {
	case website := <-chickenChannel:
		fmt.Printf("Chicken is available at %s\n", website)
	case website := <-tofuChannel:
		fmt.Printf("Tofu is available at %s\n", website)
	}
}
