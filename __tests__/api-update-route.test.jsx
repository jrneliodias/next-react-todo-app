import "@testing-library/jest-dom";
import { PUT } from "../src/app/apis/task/route.ts";
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
const mockCreate = jest.spyOn(prisma.task, "update");
mockCreate.mockResolvedValue(testValues);

describe("PUT Route Test", () => {
  it("should create a new task", async () => {
    // Call the PUT function with the mock request object
    const response = await PUT(mockReq);
    const tasks = await response.json();

    // Check if the Prisma task create method is called with the correct arguments

    // Check if the response message is 'OK'
    expect(response.status).toBe(200);

    // Check if the response task matches the expected data
    expect(tasks.task).toEqual(testValues);
  });
});
