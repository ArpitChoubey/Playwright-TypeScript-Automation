import { test, expect } from "@playwright/test";

test("Get booking details by Id- path param", async ({ request }) => {

  const bookingId = 1; // we can this as path parameter

  //sending get request
  const response = await request.get(`/booking/${bookingId}`);

  //parse the response and print
  const responseBody = await response.json();
  console.log(responseBody);

  //add assertions
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

});

test('Get booking details by Name- query params', async ({ request }) => {

  const firstname = "Jim";
  const lastname = "Brown";

  //sending get request along with query parameters
  const response = await request.get("/booking", {
    params: {
      firstname,
      lastname
    }
  });

  //parse the response and print
  const responseBody = await response.json();
  console.log(responseBody);

  //add assertions
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  //check response should not be empty
  expect(responseBody.length).toBeGreaterThan(0);
});