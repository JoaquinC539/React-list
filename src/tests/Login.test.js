import { render,fireEvent,waitFor,screen } from "@testing-library/react";

import nock from "nock";

test("It call a functional login and 200 if status 200 and error if error code is ERR_BAD_REQUEST",async()=>{
    
    const scope = nock("http://localhost:4700")
    .post('/login')
    .reply(200, { username: 'testUser' });
    

});