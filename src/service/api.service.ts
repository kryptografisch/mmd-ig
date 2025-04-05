const API_BASE = import.meta.env.VITE_API_BASE_URL;

export interface ImageData {
  url: string;
  description: string;
  likes: number;
  id: number;
}
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
interface ApiResult {
  STATUS: "OK" | "ERROR";
}
export const toggleLike = async (
  like: boolean,
  id: number
): Promise<LikeResult> => {
  try {
    const response = await fetch(`${API_BASE}/rateimages.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, rate: like ? "LIKE" : "UNLIKE" }),
    });

    const result = (await response.json()) as ApiResult;
    if (result.STATUS === "OK") {
      return LikeResult.OK;
    } else {
      return LikeResult.ERROR;
    }
  } catch (error) {
    console.log(`an error occurred on toggleLike`, error);
    return LikeResult.ERROR;
  }
};
