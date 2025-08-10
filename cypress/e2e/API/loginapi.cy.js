describe("Swagger Petstore User API", () => {
   it("create user",()=>{
    cy.request({
      method:"POST",
      url:"https://parasoli.com",
      body:[{
        id: 0,
        username: "paras",
        firstName: "paras",
        lastName: "oli",
        email: "paras.oli@gmail.com",
        password: "paras",
        phone: "9868757379",
        userStatus: 0
      }]
    }).then((response)=>{
      expect(response.status).to.oneOf(['200','201'])
    })
   })
  
    it("Update user", () => {
      cy.request({
        method: "PUT",
        url: "https://petstore.swagger.io/v2/user/paras",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          id: 0,
          username: "paras",
          firstName: "jpayetei",
          lastName: "gang",
          email: "string",
          password: "string",
          phone: "string",
          userStatus: 0
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("Get user by the username", () => {
      cy.request({
        method: "GET",
        url: "https://petstore.swagger.io/v2/user/paras",
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.include({
          username: "paras",
          firstName: "jpayetei",  // updated value here
          lastName: "gang",       // updated  here
          email: "string",
          password: "string",
          phone: "string",
          userStatus: 0
        });
      });
    });
  });