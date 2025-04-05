export interface ImageData {
  url: string;
  description: string;
  likes: number;
  id: number;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const getImageData = async (): Promise<ImageData[]> => {
  try {
    const response = await fetch(`${API_BASE}/getimages.php`);
    const data = await response.json();
    return data as ImageData[];
  } catch (error) {
    console.log(`an error occurred on getImages`, error);
    // TODO: map to error codes or messages using api response data or error object
    throw "failed to fetch";
  }
};

export enum LikeResult {
  OK = 1,
  ERROR = 2,
}

export const toggleLike = async (
  like: boolean,
  id: number
): Promise<LikeResult> => {
  console.log(id, like);
  return LikeResult.OK;
};
