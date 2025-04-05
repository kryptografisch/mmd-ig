export interface ImageData {
  url: string;
  description: string;
  likes: number;
  id: number;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const getImageData = async (): Promise<ImageData[]> => {
  const response = await fetch(`${API_BASE}/getimages.php`);
  const data = await response.json();
  return data as ImageData[];
};
