import "@testing-library/jest-dom";
import { GET } from "../src/app/apis/task/route.ts";

describe("GET Route: /apis/task", () => {
  // Mocking the Prisma task create method
  const mockCreate = jest.spyOn(prisma.task, "findMany");

  it("should return a list of tasks", async () => {
    const response = await GET();
    expect(response.status).toBe(200);
  });
  it("should return the correct fields", async () => {
    const response = await GET();
    const tasks = await response.json();
    expect(response.status).toBe(200);

    tasks.task.forEach((task) => {
      expect(task).toHaveProperty("id");
      expect(task).toHaveProperty("content");
      expect(task).toHaveProperty("favorite");
      expect(task).toHaveProperty("color");
      expect(task).toHaveProperty("completed");
    });
  });
  it("should return 500 when get tasks fail", async () => {
    mockCreate.mockRejectedValue(new Error("Failed to get all task"));

    const response = await GET();
    const tasks = await response.json();

    expect(response.status).toBe(500);
  });
});
