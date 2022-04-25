const fetchedDataFromAPI = {
    name: 'John',
    age: 38,
    job: {
        title: 'Imbecil'
    }
}

console.log(fetchedDataFromAPI?.job?.title) // check if there is a job key from fetchedDataAPI