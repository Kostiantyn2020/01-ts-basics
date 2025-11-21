function printUserInfo(
  name: string,
  age: number,
  email?: string // опціональний параметр
): void {
  // функція нічого не повертає
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
}

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");
