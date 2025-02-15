# JavaScript Stack Overflow Error

This repository demonstrates a common error in recursive JavaScript functions: stack overflow. The provided code implements a recursive Fibonacci sequence calculation, which is prone to stack overflow errors for larger inputs.

## Bug Description

The `foo` function calculates Fibonacci numbers recursively. However, the recursive calls consume stack space. For larger inputs (e.g., `foo(50)`), the function will exceed the available stack space, resulting in a stack overflow error.

## Solution

The solution demonstrates how to mitigate stack overflow errors by using iteration instead of recursion or memoization techniques to reduce redundant function calls.