import { storage, ID } from './appwrite'; // Adjust the path if needed

const upload = async (file) => {
    const promise = await storage.createFile(
      '67ce73af001a0830cbe9', // Your bucket ID
      ID.unique(),
      file
    );
    const result = storage.getFileDownload('67ce73af001a0830cbe9', promise.$id);
    return result;
};

export default upload;
