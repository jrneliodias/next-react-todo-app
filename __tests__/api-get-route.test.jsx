import "@testing-library/jest-dom";
import { GET } from "../src/app/apis/task/route.ts";

describe("GET Route: /apis/task", () => {
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
});
