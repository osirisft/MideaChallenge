# MideaChallenge
## Requirements and Achievement Status:
|Requirements | Status |Description
| ------- | ------| -------|
|MUST have an API server written in Javascript|DONE|All APIs are implemented by using Node.js |
|MUST have routes for Shopping Centres|DONE|Support all CRUD operations|
|MUST have routes for Assets|DONE|Support all CRUD operations|
|MUST persist data to a database|DONE|Use MongoDB as database to persist data|
|SHOULD be secured against anonymous access and track which user makes changes to the data|60%|Implemented the "Audit Trail" function for Entity Shopping Centre. All the "Create" and "Delete" operations for Shopping Centre are recorded|
|SHOULD allow marking Asses "inactive" for maintenance and re-active the later|DONE||
|COULD have a UI|20%|Implemented the React UI for Shopping Centre list display|
|COULD support searching for Assets|20%|Currently support searching on name|

## Design:
1. ER Diagram of whole scenario
![Alt text](/Documents/ER_Diagram.png)      


  |Entity Name | Description
  | ------- |  -------- |
  | ShoppingCentre | Shopping Centre
  | Asset |Asset|
  | Advertisement |One Asset may include multiple Advertisement content|
  | Status |Assets may have multiple different status|
  | Unit |The measure unit such as width, height may be different. For example, metre or inch|
  | Provider |One provider may provide different advertisement content|
  | User |System users|
  | Role |Users have different roles to get different access|
  | AuditTrail |Could be implemented on different enities to record all the changes|

## Project Structure:

|Folder Name|Description|
|--------|----------|
|root  | root|
|--client    |Front-end folder   |      
|------public  | React UI static file|
|------src  |React UI source code|
|--src |Backend folder|
|------main  |Node.js source code folder |
|--------config  |Configuration file |
|--------controller  |Request controller. Reponsible for dispatch requests to model|
|-------------schema| Schema file for MongoDB |  
|--------model  |Model file for MongoDB |
|--------route  |Route file for requsts dispatch |
|--test| Unit Test file for model and controller|  


## Usage:
1. Backend Usage  
cd folder .../MideaChallenge/  
Run "nodemon server"  
1.1 API for Shopping Centres  
 ![Alt text](/Documents/screenShot/shoppingCentre.png)  
 ![Alt text](/Documents/screenShot/shoppingCentreDel.png)
1.2 API for Asset
![Alt text](/Documents/screenShot/asset.png)
1.3 API for AuditTrail  
![Alt text](/Documents/screenShot/auditTrail.png)
1.4 API for Status
![Alt text](/Documents/screenShot/status.png)
1.5 API for Unit
![Alt text](/Documents/screenShot/unitPost.png)

2. Front-end Usage  
cd folder .../MideaChallenge/client
Run "npm start"  
![Alt text](/Documents/screenShot/react.png)

3. Unit Test for model and controller
cd folder .../MideaChallenge/  
Run "npm test"   
![Alt text](/Documents/screenShot/UT.png)
