#include <stdio.h>

int main()
{
    float a;
    int n;

    printf("enter value the of a:\n");
    scanf("%f", &a);

    n = a;

    printf("value stored in n is %d\n", n);

    if (n < 0)
    {
        printf("%.1f is not a natural number\n", a);
    }

    else if (n != a)
    {
        printf("%.1f is not a natural number\n", a);
    }

    else
    {
        printf("%.0f is a natural number\n", a);
    }
    
    return 0;
}