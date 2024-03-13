const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/todos/byid", () => {
  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todos/all")
      .expect("Content-Type", /json/)
      .expect(200);

    const myTodos = response.body;
    const myFirstTodo = myTodos[0];

    expect(myTodos.length).toBeGreaterThan(0);
    expect(myFirstTodo.id).toBeDefined();
    expect(myFirstTodo.task).toBeDefined();
    expect(myFirstTodo.userId).toBeDefined();
  });

  test("GET by Id", async () => {
    const todoId = 1;
    const response = await request(app)
      .get(`/v1/todos/byid?todoId=${todoId}`)
      .expect("Content-Type", /json/)
      .expect(200);

    const myTodo = response.body.todo;

    expect(myTodo.id).toEqual(todoId);
  });

  test("Test Create Object", async () => {
    const response = await request(app)
      .post("/v1/todos/create")
      .send({
        newTask: "Tennis spielen",
        newIsDone: false,
        newDueDate: "2026-10-10",
        newUserId: 2,
      })
      .expect("Content-Type", /json/)
      .expect(200);

    // überprüfen der zurückgegebenen werte
    const createdTodo = response.body.todo;
    expect(createdTodo).toHaveProperty("id");
    expect(createdTodo).toHaveProperty("task", "Tennis spielen");
    expect(createdTodo).toHaveProperty("isDone", false);
    //   // vergleichen des datums direkt mit toEqual
    //   expect(createdTodo.dueDate).toEqual("2026-10-10");

    expect(createdTodo).toHaveProperty("userId", 2);
    // });

    // Vergleichen des Datums ohne Zeit mit toBe
    const expectedDate = new Date("2026-10-10");
    const receivedDate = new Date(createdTodo.dueDate);
    expect(receivedDate).toEqual(expectedDate);

    expect(createdTodo).toHaveProperty("userId", 2);
  });
});

describe("PUT /v1/todos/update", () => {
  test("Test Updated Object", async () => {
    // aktualisierungen durchführen
    const updateResponse = await request(app)
      .put(`/v1/todos/update`)
      .send({
        todoId: 1,
        newTask: "Putzen",
        newIsDone: false,
        newDueDate: "2024-10-10",
      })
      .expect("Content-Type", /json/)
      .expect(200);

    // überprüfung der aktualisierten werte
    const updatedTodoId = updateResponse.body.updatedTodoId;
    expect(updatedTodoId).toEqual(1);
  });
});
