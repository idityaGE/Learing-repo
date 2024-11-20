package helper

import (
	"strings"
)

func ValidateEmail(email string) bool {  // Exported function --> Its first letter is capital to make it public
	if len(email) < 3 && len(email) > 254 {
		return false
	}
	if strings.Contains(email, "@") && strings.Contains(email, ".") {
		return true
	}
	return false
}
