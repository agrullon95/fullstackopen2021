import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAllPhonebookEntries = () => {
    const request = axios.get(baseUrl);
    return request.then(response => {
        return response.data;
    });
}

const addPhonebookEntry = newPersonObject => {
    const request = axios.post(baseUrl, newPersonObject);
    return request.then(response => { 
        return response.data 
    });
}

const exportedObject = {
    getAllPhonebookEntries,
    addPhonebookEntry
}

export default exportedObject;