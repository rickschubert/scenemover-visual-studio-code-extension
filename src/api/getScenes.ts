export interface Scene {
  title: string;
  content: string;
  file: string;
}

const baseUrl = "http://127.0.0.1:8080"

export const getScenes = async (): Promise<Scene[]> => {
  const response = await fetch(`${baseUrl}/scenes`);
  const responseBody = await response.text();
  return JSON.parse(responseBody) as unknown as Scene[];
};
