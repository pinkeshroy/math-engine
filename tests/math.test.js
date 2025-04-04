import request from 'supertest';
import app from '../src/app.js';

describe('Math API Endpoints', () => {
  // Addition
  it('POST /api/addition → returns sum', async () => {
    const res = await request(app)
      .post('/api/addition')
      .send({ a: 4, b: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(9);
    expect(res.body.operation.type).toBe('addition');
  });

  // Power
  it('POST /api/power → calculates power', async () => {
    const res = await request(app)
      .post('/api/power')
      .send({ base: 2, exponent: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  // Factorial
  it('GET /api/factorial/:number → returns factorial', async () => {
    const res = await request(app).get('/api/factorial/5');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(120);
  });

  // Fibonacci
  it('GET /api/fibonacci/:count → returns sequence', async () => {
    const res = await request(app).get('/api/fibonacci/5');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toEqual([0, 1, 1, 2, 3]);
  });

  //Prime Check
  it('POST /api/is-prime → returns prime result', async () => {
    const res = await request(app)
      .post('/api/is-prime')
      .send({ number: 7 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(true);
  });

  // 📋 Get all operations
  it('GET /api/operations → returns operations list', async () => {
    const res = await request(app).get('/api/operations');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  //Delete an operation
  it('DELETE /api/operations/:id → deletes operation', async () => {
    // First create a new record
    const addRes = await request(app)
      .post('/api/addition')
      .send({ a: 10, b: 10 });
    const id = addRes.body.operation.id;

    const delRes = await request(app).delete(`/api/operations/${id}`);
    expect(delRes.statusCode).toBe(200);
    expect(delRes.body.message).toBe('Operation deleted successfully');
  });
});
