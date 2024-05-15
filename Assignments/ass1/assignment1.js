/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Sagar Thapa  Student ID: 153855234   Date: 11/05/2024
*
********************************************************************************/

serverVerbs = ['GET','GET','GET','POST','GET','POST']
serverPaths = ["/","/about","/contact",'/login',"/panel","/logout"]
serverResponses = ["Welcome to WEB700 Assignement 1","This assignment was prepared by Sagar Thapa","Sagar Thapa:sthapa67@myseneca.ca","User Logged In","Main Panel","Logout Complete"]

var httpRequest = function (httpVerb, path) {
    
    for (let item of serverPaths){
        if(item == path){
            if(httpVerb == serverVerbs[serverPaths.indexOf(path)]){
                return`200: ${serverResponses[serverPaths.indexOf(path)]}`
            }
            else{
                return `404: Unable to process ${httpVerb} request for ${path}`
            }
        }
    }
};

// var resp = httpRequest("PUT","/about")
// console.log(resp)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var automateTests = function () {

var randomRequest = function (){
testVerbs = ["GET",'POST']
testPaths = ['/','/about','/contact','/login','/panel','/randomPath1','/randomPath2']
testVerb = testVerbs[getRandomInt(testVerbs.length)]
testPath = testPaths[getRandomInt(testPaths.length)]
// console.log(`Testing ${testVerb} in ${testPath}...`)
console.log(httpRequest(testVerb,testPath))
}

setInterval(() => {
   randomRequest()
}, 1000);
}

automateTests();