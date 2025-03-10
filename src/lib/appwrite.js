import { Client, Storage } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67ce71cc000d973bf64e'); // Replace with your project ID

export const storage = new Storage(client);
export { ID } from 'appwrite';
