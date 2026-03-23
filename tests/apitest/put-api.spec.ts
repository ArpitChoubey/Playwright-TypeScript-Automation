import { test, expect } from '@playwright/test';
import fs from 'fs';

//utility function returns json file data
function readJson(filePath:string){
  return JSON.parse(fs.readFileSync(filePath,'utf-8'));
}

test("Update Booking(Put)", async({request})=>{

  //1) Create a booking (Post) ---> bookingId

  const requestBody=readJson('Testdata/Data.json');
  const createResponse=await request.post('/booking',{data:requestBody});
  expect(createResponse.ok()).toBeTruthy();

  const responseBody=await createResponse.json();
  const bookingid=responseBody.bookingid;   // extracting bookingid from the response body
  console.log("Booking id=======>",bookingid);

  //2) Update booking (Put)   // required token

  //token creation
  const tokenrequestBody=readJson('testdata/token_request_body.json');
  const tokenresponse=await request.post('/auth',{data:tokenrequestBody});
  expect(tokenresponse.ok()).toBeTruthy();

  const tokenresponsebody= await tokenresponse.json();
  const token = tokenresponsebody.token;
  console.log("Token ======>", token);

  //sending update(Put)
  const updateRequestBody = readJson('testdata/put_request_body.json');
  const updateresponse = await request.put(`/booking/${bookingid}`, {
    headers: { "Cookie": `token=${token}` },
    data: updateRequestBody
  });

  expect(updateresponse.ok()).toBeTruthy();
  expect(updateresponse.status()).toBe(200);

  const updateresponsebody = await updateresponse.json();
  console.log(updateresponsebody);
  console.log("Booking details updated successfully...");
});