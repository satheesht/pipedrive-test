# Pipedrive Interview Test Project
Simple React client interface integrated with three endpoints of NodeJS. You can upload CSV file of 5 fields in the order of "id", "name", "age", "address", "team". Script will upload the data to a remote MongoDB and change the screen so that you can search records by its name. Everytime you upload a new CSV file, it will replace existing records from the remote server.

Tech stack:
1. Frontend: ReactJS
2. Backend: NodeJS
3. Database: MongoDB (Mlab remote server)
4. Actions:  Serve UI, Upload CSV, Search _(Cache enabled for 30 seconds)_

**For Development:**

_Frontend_
1. npm install
2. npm run dev-client


_Backend_
1. npm install
2. npm run build-client
3. npm run dev

**For Production**

Run
1. npm install
2. npm start

NOTE: Developed in latest NPM(6.4.1) and Node(10.12.0) versions. Not tested in older versions :)

**Author**

Satheesh Thangavel
