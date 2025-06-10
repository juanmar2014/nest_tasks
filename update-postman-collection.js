require('dotenv').config();
const fs = require('fs');
const axios = require('axios');

const config = {
    apiKey: process.env.POSTMAN_API_KEY,
    collectionUid: process.env.POSTMAN_COLLECTION_UID
};

async function updateCollection() {
    try {
        const collection = JSON.parse(fs.readFileSync('./NestJS_Tasks_API.postman_collection.json', 'utf8'));
        
        const response = await axios.put(
            `https://api.getpostman.com/collections/${config.collectionUid}`,
            { collection },
            {
                headers: {
                    'X-Api-Key': config.apiKey,
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log('✅ Colección actualizada exitosamente');
    } catch (error) {
        console.error('❌ Error al actualizar la colección:', error.message);
        if (error.response) {
            console.error('Detalles del error:', error.response.data);
        }
    }
}

updateCollection();