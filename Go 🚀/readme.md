## Go
Go, also known as Golang, is an open-source programming language designed for simplicity, reliability, and efficiency. It is particularly well-suited for building scalable and high-performance applications.

### Setup

1. **Download Go:**
  - Visit the official [Go downloads page](https://golang.org/dl/) and download the installer for your operating system.

2. **Install Go:**
  - Follow the instructions provided by the installer to complete the installation.

3. **Verify Installation:**
  - Open a terminal or command prompt.
  - Run the command `go version` to verify that Go is installed correctly.

4. **Set Up Workspace:**
  - Create a directory for your Go workspace, e.g., `mkdir $HOME/go` (Linux/macOS) or `mkdir %USERPROFILE%\go` (Windows).
  - Set the `GOPATH` environment variable to point to your workspace directory.

5. **Hello World:**
  - Create a new directory for your project, e.g., `mkdir $GOPATH/src/hello`.
  - Inside the `hello` directory, create a file named `main.go` with the following content:

```go
package main

import "fmt"

func main() {
   fmt.Println("Hello, World!")
}
```

### Packages and Modules

Go uses packages to organize code and modules to manage dependencies.

#### Packages

A package is a collection of Go files in the same directory that are compiled together. Every Go file starts with a package declaration.

#### Modules

A module is a collection of related Go packages that are versioned together. Modules are defined by a `go.mod` file.

### Initializing a Go Module

1. **Create a new directory for your project:**

  ```sh
  mkdir $GOPATH/src/myproject
  cd $GOPATH/src/myproject
  ```

2. **Initialize the module:**

  Run `go mod init myproject` to create a `go.mod` file.

3. **Add dependencies:**

  Use `go get` to add dependencies, e.g., `go get example.com/some/package`.

### Example `main.go` file:

```go
package main

import (
   "fmt"
   "example.com/some/package"
)

func main() {
   fmt.Println("Hello, Modules!")
   package.SomeFunction()
}
```

### Build and Run Your Project

1. **Build the project:**

  Run `go build` to compile the project.

2. **Run the compiled binary:**

  Run `./myproject` (or `myproject.exe` on Windows) to execute the compiled binary.

### Resources

- [Official Go Website](https://golang.org/)
- [Go Documentation](https://golang.org/doc/)

