package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

type User struct {
	Name string `json:"name" xml:"name" form:"name"`
	Pass string `json:"pass" xml:"pass" form:"pass"`
}

func main() {
	app := fiber.New()
	app.Get("/", hello)
	app.Get("/:value", paramsRoute)
	app.Get("/user/:name?", optionalParamsRoute)

	app.Post("/post", func(c *fiber.Ctx) error {
		return c.Send(c.Body())
	})
	app.Post("/user", func(c *fiber.Ctx) error {
		user := new(User)
		if err := c.BodyParser(user); err != nil {
			return c.Status(400).SendString(err.Error())
		}
		fmt.Println(user.Name, user.Pass)
		return c.JSON(user)
	})

	log.Fatal(app.Listen(":3000"))
}

func optionalParamsRoute(c *fiber.Ctx) error {
	name := c.Params("name")
	if name != "" {
		return c.SendString("Hello, " + name)
	}
	return c.SendString("Where is the name?")
}

func paramsRoute(c *fiber.Ctx) error {
	value := c.Params("value")
	return c.SendString("Value: " + value)
}
func hello(c *fiber.Ctx) error {
	return c.SendString("Hello, World!")
}
