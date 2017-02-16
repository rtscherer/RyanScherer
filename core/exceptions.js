module.exports = {
    //database connection exception
    DatabaseConnectionException: function(error)
    {
        console.log("Unable to Establish Connection to Database.");
        console.log(error);
        return;
    },
    //file not found exception
    FileNotFoundException: function(error)
    {
        console.log("Unable to Find File.");
        console.log(error);
        return;
    },
    //put exception
    GetException: function(source, error)
    {
        console.log("GET Exception occurred at " + source + "api.");
        console.log(error);
        return;
    },
    //put exception
    PutException: function(source, error)
    {
        console.log("PUT Exception occurred at " + source + "api.");
        console.log(error);
        return;
    }
};
