package main

import (
	"fmt"
	"log"
	"net/http"
	// "rest-api/helper" // a Diffrent package
)

var taskItems = []string{
	"Task 1",
	"Task 2",
	"Task 3",
}

func main() {
	// email := "adiimaurya02@gmail.com"
	// if helper.ValidateEmail(email) {
	// 	fmt.Println("Email is valid")
	// } else {
	// 	fmt.Println("Email is invalid")
	// }
	http.HandleFunc("/", rootHandler)
	http.HandleFunc("/task", showTasks)

	// this should be below the http.HandleFunc
	log.Fatal(http.ListenAndServe(":8080", nil))

}

func showTasks(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		r.ParseForm()
		task := r.FormValue("task")
		taskItems = addTask(taskItems, task)
	}

	fmt.Fprintln(w, "List of tasks:")
	for i, task := range taskItems {
		fmt.Fprintf(w, "%d. %s\n", i+1, task)
	}
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	greeting := "Hello, World!"
	fmt.Fprintln(w, greeting)
}

func addTask(taskItems []string, task string) []string {
	taskItems = append(taskItems, task)
	return taskItems
}
