package main

import (
	"fmt"
	"os"
	"bufio"
	"strings"
)

type Todo struct {
	ID     int
	Task   string
	IsDone bool
}

var todos []Todo
var nextID int

func main() {
	reader := bufio.NewReader(os.Stdin)
	for {
		fmt.Println("\n--- Todo App ---")
		fmt.Println("1. Add Todo")
		fmt.Println("2. List Todos")
		fmt.Println("3. Complete Todo")
		fmt.Println("4. Exit")
		fmt.Print("Choose an option: ")

		var choice int
		fmt.Scan(&choice)
		reader.ReadString('\n') // Clear the buffer

		switch choice {
		case 1:
			addTodo()
		case 2:
			listTodos()
		case 3:
			completeTodo()
		case 4:
			fmt.Println("Exiting...")
			os.Exit(0)
		default:
			fmt.Println("Invalid choice. Please try again.")
		}
	}
}

func addTodo() {
	fmt.Print("Enter task: ")
	reader := bufio.NewReader(os.Stdin)
	task, _ := reader.ReadString('\n')
	task = strings.TrimSpace(task)

	if task == "" {
		fmt.Println("Task cannot be empty.")
		return
	}

	todo := Todo{
		ID:     nextID,
		Task:   task,
		IsDone: false,
	}
	nextID++
	todos = append(todos, todo)
	fmt.Println("Todo added successfully.")
}

func listTodos() {
	fmt.Println("\n--- Todos ---")
	if len(todos) == 0 {
		fmt.Println("No todos found.")
		return
	}
	for _, todo := range todos {
		status := "Pending"
		if todo.IsDone {
			status = "Done"
		}
		fmt.Printf("%d. %s [%s]\n", todo.ID, todo.Task, status)
	}
}

func completeTodo() {
	fmt.Print("Enter todo ID to complete: ")
	var id int
	fmt.Scan(&id)

	for i, todo := range todos {
		if todo.ID == id {
			todos[i].IsDone = true
			fmt.Println("Todo marked as complete.")
			return
		}
	}
	fmt.Println("Todo not found.")
}
