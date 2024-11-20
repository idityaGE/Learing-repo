package main

import (
	"fmt"
	"sync"
	"time"
)
var m = sync.Mutex{} // Mutex is a struct with a lock that can be locked and unlocked. It is used to synchronize access to shared resources.
var rm = sync.RWMutex{} // It allows multiple readers or a single writer at a time.
var wg = sync.WaitGroup{} // WaitGroup is a struct with a counter that is incremented when a goroutine is created and decremented when the goroutine is done.

var dbData = []string{"data1", "data2", "data3", "data4", "data5"}
var results = []string{}

func main() {
	t0 := time.Now()
	for i := 0; i < 1000; i++ { // 1000 goroutines but only 16 can run at a time because of the number of cores in the CPU. The rest of the goroutines will be in the queue waiting for their turn to run.
		wg.Add(1)
		// go dbCall(i)
		go count()
	}
	wg.Wait()
	fmt.Printf("Time taken: %v\n", time.Since(t0))
	// fmt.Printf("Result: %v\n", results)  // multiple goroutines are appending to the same slice, so the order of the elements in the slice is not guaranteed.

}

// Lock and Unlock 

func dbCall(i int) {
	// delay := rand.Float32() * 2000
	time.Sleep(2 * time.Second)
	fmt.Printf("Data %d: %s\n", i, dbData[i])
	// It really matter where you put the lock and unlock. If you put the lock and unlock inside the for loop, then only one goroutine can access the shared resource at a time. If you put the lock and unlock outside the for loop, then multiple goroutines can access the shared resource at a time.
	// m.Lock() // Lock the mutex to prevent other goroutines from accessing the shared resource. when the goroutine is done, unlock the mutex. That way, only one goroutine can access the shared resource at a time.
	save(dbData[i])
	log()
	// m.Unlock() // Unlock the mutex to allow other goroutines to access the shared resource. But does not guarantee the order of the elements in the slice.
	wg.Done()
}

func save(result string) {
	rm.Lock() // full lock
	results = append(results, result)
	rm.Unlock()
}

func log() {
	rm.RLock() // this will check if there is a full Lock on the resource. If there is a full Lock, then it will wait until the full Lock is released. If there is no full Lock, then it will allow multiple goroutines to access the shared resource.
	fmt.Printf("Results: %v\n", results)
	rm.RUnlock()
}

func count() {
	var res int
	for i := 0; i < 100000000; i++ {
		res += i
	}
	wg.Done()
}