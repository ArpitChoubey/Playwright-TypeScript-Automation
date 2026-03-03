import { test, expect } from "@playwright/test";
import fs from 'fs';

test("Create Post request using json file body", async ({ request }) => {

  // Read data from JSON
  const jsonFile = './testdata/Data.json';
  const requestBody = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));

  // Send POST request
  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    { data: requestBody }
  );

  const responseBody = await response.json();
  console.log(responseBody);

  // Validate status
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // Validate response body structure
  expect(responseBody).toHaveProperty("bookingid");
  expect(responseBody).toHaveProperty("booking");
  expect(responseBody.booking).toHaveProperty("additionalneeds");

  const booking = responseBody.booking;

  // Validate booking details
  expect(booking).toMatchObject({
    firstname: requestBody.firstname,
    lastname: requestBody.lastname,
    totalprice: requestBody.totalprice,
    depositpaid: requestBody.depositpaid,
    additionalneeds: requestBody.additionalneeds
  });

  // Validate nested booking dates
  expect(booking.bookingdates).toMatchObject({
    checkin: requestBody.bookingdates.checkin,
    checkout: requestBody.bookingdates.checkout
  });

});