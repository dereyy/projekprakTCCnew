import config from "../config";

export const checkApiConnection = async () => {
  try {
    const response = await fetch(`${config.API_URL}/api`);
    if (!response.ok) {
      throw new Error("API connection failed");
    }
    return true;
  } catch (error) {
    console.error("Error checking API connection:", error);
    return false;
  }
};

export const getApiUrl = () => config.API_URL;

