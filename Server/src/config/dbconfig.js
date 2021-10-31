
//server host name
const HOST = "localhost";

//remote database name
const DATABASE = "gab";

//database credentials
const USERNAME = "gab-clone";
const PASSWORD = "gabclone123";

//default app port
const PORT = process.env.PORT || 2345;

//default connection url
const DEFAULT_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@yatra-clone.xrxnv.mongodb.net/${DATABASE}`; 

/* 
//default connection url
const DEFAULT_CONNECTION_STRING = `mongodb+srv://gab-clone:gabclone123@gab-clone.1lwve.mongodb.net/gab`; 
*/
//mongoose options for connection
const MONGOOSE_OPTIONS = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}



module.exports = {HOST, PORT, DATABASE, USERNAME, PASSWORD, DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS}