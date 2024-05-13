import { storage } from "@/firebase/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export const uploadImages = async ({ length, ...files }: FileList) => {
  try {
    if (!files) {
      throw new Error("No file provided");
    }

    const urls = await Promise.all(
      Object.values(files).map(async (file) => {
        const fileRef = ref(storage, `${file.name}-${v4()}`);
        const uploadResult = await uploadBytes(fileRef, file as File);
        const url = await getDownloadURL(uploadResult.ref);
        return url;
      }),
    );

    return urls;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
