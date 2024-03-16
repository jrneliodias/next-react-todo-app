import "@testing-library/jest-dom";
import { DELETE } from "../src/app/apis/task/route.ts";
import { NextRequest, NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

const testValues = {
  id: faker.string.uuid(),
};
// Mocking the request object
const mockReq = {
  json: jest.fn().mockResolvedValue(testValues),
}; // Mocked Request object

// Mocking the Prisma task create method
const mockCreate = jest.spyOn(prisma.task, "delete");
mockCreate.mockResolvedValue(testValues);

describe("POST", () => {
  it("should return 200 when delete a task", async () => {
    // Call the POST function with the mock request object
    const response = await DELETE(mockReq);
    const tasks = await response.json();

    expect(response.status).toBe(200);
  });
});
