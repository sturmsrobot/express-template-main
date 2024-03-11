const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/todos/all", () => {
  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todos/all")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual([]);
  });
});

describe("GET /v1/todos/byid", () => {
  test("responds with json", async () => {
    // angenommen, ich habe ein todo mit der id"1234"
    const todoId = "1234";
    const response = await request(app)
      .get("/v1/todos/byid?todoId=${todoId}")
      .expect("Content-Type", /json/)
      .expect(200);

    // hier wird erwartet, dass antwort entsprechende info über todo-id enthält
    expect(response.body).toEqual({
      id: todoId,
      task: "Irgendein Todo",
      isDone: false,
    });
  });
});
