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

const deletePhoneBookEntry = id => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => {
        return response;
    })
}

const exportedObject = {
    getAllPhonebookEntries,
    addPhonebookEntry,
    deletePhoneBookEntry
}

export default exportedObject;