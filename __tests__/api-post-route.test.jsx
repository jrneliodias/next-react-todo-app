import "@testing-library/jest-dom";
import { POST } from "../src/app/apis/task/route.ts";
import { NextRequest, NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

const testValues = {
  id: faker.string.uuid(),
  content: "New Task",
  favorite: faker.datatype.boolean(),
  color: faker.helpers.arrayElement(["bg-red-500", "bg-blue-500", "bg-green-500"]),
  completed: faker.datatype.boolean(),
};
// Mocking the request object
const mockReq = {
  json: jest.fn().mockResolvedValue(testValues),
}; // Mocked Request object

// Mocking the Prisma task create method
const mockCreate = jest.spyOn(prisma.task, "create");
mockCreate.mockResolvedValue(testValues);

describe("POST", () => {
  it("should create a new task", async () => {
    // Call the POST function with the mock request object
    const response = await POST(mockReq);
    const tasks = await response.json();

    // Check if the Prisma task create method is called with the correct arguments

    // Check if the response message is 'OK'
    expect(response.status).toBe(200);

    // Check if the response task matches the expected data
    expect(tasks.task).toEqual(testValues);
  });

  it("should return an error message when task creation fails", async () => {
    // Mocking the Prisma task create method to throw an error
    mockCreate.mockRejectedValue(new Error("Failed to create task"));

    // Call the POST function with the mock request object
    const response = await POST(mockReq);
    const tasks = await response.json();

    // Check if the error message is returned
    expect(tasks.message).toBe("Error");

    // Check if the error status is returned
    expect(response.status).toBe(500);
  });
});
