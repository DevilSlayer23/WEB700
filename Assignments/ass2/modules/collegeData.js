class Data {
    dataCollection = null;
    constructor(students, courses){
        this.courses = courses;
        this.students = students;
    };
    async readJson (filename)  {
      await fs.readFile(filename, 'utf8', function(err, dataFromSomeFile){
            if (err){
            console.log(err); // or reject the promise (if used in a promise)
            return; // exit the function
            }
            let data = JSON.parse(dataFromSomeFile); // convert the JSON from the file into an array of objects
            console.log(data);
            });
            
    };


}

