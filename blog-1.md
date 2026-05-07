# Why `unknown` is Safer Than `any` in TypeScript

## Introduction

TypeScript provides powerful type safety features that help developers write more reliable code. Among its many types, `any` and `unknown` are commonly used when dealing with uncertain or dynamic data. Although they may look similar at first, they behave very differently.

This article explains why `any` is considered a “type safety hole,” why `unknown` is safer, and how type narrowing helps developers work with unpredictable data safely.

---

## What is `any`?

The `any` type disables TypeScript’s type checking completely. Once a variable becomes `any`, TypeScript allows any operation on it.

```ts
let value: any = "Hello"

value.toUpperCase()
value.toFixed(2)
value.nonExistentMethod()

