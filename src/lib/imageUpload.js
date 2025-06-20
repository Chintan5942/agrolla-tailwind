import { supabase } from "./supabaseClient";
import { v4 as uuidv4 } from "uuid"; // Use UUID for unique file names

// Function to upload a single image to Supabase Storage
export const uploadImageToStorage = async (file, bucket = "product-images") => {
  try {
    // Generate unique filename using UUID for better uniqueness
    const fileExt = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`; // Use UUID as the file name

    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Error uploading image:", error);
      return null; // Return null in case of an error
    }

    // Get the public URL for the uploaded image
    const { publicURL, error: urlError } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);

    if (urlError) {
      console.error("Error getting public URL:", urlError);
      return null; // Return null if we fail to get the URL
    }

    return publicURL; // Return the public URL of the uploaded image
  } catch (error) {
    console.error("Error in uploadImageToStorage:", error);
    return null; // Return null if a general error occurs
  }
};

// Function to upload multiple images
export const uploadMultipleImages = async (
  files,
  bucket = "product-images"
) => {
  if (!Array.isArray(files) || files.length === 0) {
    console.error("No files provided for upload.");
    return []; // Return an empty array if no files are provided
  }

  const uploadPromises = files.map((file) => {
    if (file && file instanceof File) {
      return uploadImageToStorage(file, bucket); // Upload each file individually
    } else {
      console.error("Invalid file:", file);
      return null; // Return null if file is invalid
    }
  });

  // Wait for all uploads to finish and filter out any null results
  const results = await Promise.all(uploadPromises);
  return results.filter((url) => url !== null); // Return only valid URLs
};

// Function to delete an image from Supabase Storage
export const deleteImageFromStorage = async (
  imageUrl,
  bucket = "product-images"
) => {
  try {
    // Extract filename from URL
    const urlParts = imageUrl.split("/");
    const fileName = urlParts[urlParts.length - 1];

    // Remove the file from the storage bucket
    const { error } = await supabase.storage.from(bucket).remove([fileName]);

    if (error) {
      console.error("Error deleting image:", error);
      return false; // Return false if deletion fails
    }

    return true; // Return true if the deletion was successful
  } catch (error) {
    console.error("Error in deleteImageFromStorage:", error);
    return false; // Return false if a general error occurs
  }
};
