export interface Scene {
  title: string;
  content: string;
  file: string;
}

export interface SceneAfterTransition extends Scene {
  oldFile: string;
}

export interface TransitionScenePayload {
  newIndex: number;
  fileToMove: string;
}

const baseUrl = "http://127.0.0.1:8080";

export const getScenes = async (): Promise<Scene[]> => {
  const response = await fetch(`${baseUrl}/scenes`);
  const responseBody = await response.text();
  return JSON.parse(responseBody) as unknown as Scene[];
};

export const transitionScene = async ({newIndex, fileToMove}: TransitionScenePayload): Promise<SceneAfterTransition[]> => {
  const body = JSON.stringify({
    newIndex,
    file: fileToMove,
  });
  const response = await fetch(`${baseUrl}/scenes/transition`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const responseBody = await response.text();
  return JSON.parse(responseBody) as unknown as SceneAfterTransition[];
};
