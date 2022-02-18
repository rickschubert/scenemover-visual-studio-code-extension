export interface Scene {
    title: string
    content: string
}

export const getScenes = async (): Promise<Scene[]> => {
    const response = await fetch('http://localhost:8080/scenes')
    return JSON.stringify(response.text()) as unknown as Scene[]
}
