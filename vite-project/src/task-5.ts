function logStatus(
  status: "loading" | "success" | "error" // дозволені тільки ці значення
): void {
  // функція нічого не повертає
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading"); // OK
// logStatus("other"); // ❌ помилка — значення не дозволене
logStatus("success"); // OK
