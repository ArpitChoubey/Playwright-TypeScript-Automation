import { test, expect } from "@playwright/test";

test("Create Post request using static body", async ({ request }) => {

  // request body
  const requestBody = {
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 1000,
    depositpaid: true,
    bookingdates: {
      checkin: "2025-07-01",
      checkout: "2025-07-05",
    },
    additionalneeds: "super bowls",
  };

  // send post request
  const response = await request.post("https://restful-booker.herokuapp.com/booking", { data: requestBody });

const responseBody = await response.json(); // Extracted response
console.log(responseBody);

//validate status
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);

// validate response body
expect(responseBody).toHaveProperty("bookingid");
expect(responseBody).toHaveProperty("booking");
expect(responseBody.booking).toHaveProperty("additionalneeds");

// validate booking details
const booking = responseBody.booking;

expect(booking).toMatchObject({
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 1000,
    depositpaid: true,
    bookingdates: {
        checkin: "2025-07-01",
        checkout: "2025-07-05",
    },
    additionalneeds: "super bowls",

});

expect(booking.bookingdates).toMatchObject({
    checkin: "2025-07-01",
    checkout: "2025-07-05",
});
});