describe("Timer", function(){
   it("updates time in seconds", function(){
       var dummyTimer = document.createElement('div');
       document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyTimer);
       expect(document.getElementById("timer").innerHTML).toBe("00:00:00");
   });
});
