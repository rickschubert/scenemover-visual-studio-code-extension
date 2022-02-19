export interface Scene {
    title: string
    content: string
}

export const getScenes = async (): Promise<Scene[]> => {
    const response = await fetch('http://localhost:8080/scenes')
    const responseBody = await response.text()
    return JSON.stringify(responseBody) as unknown as Scene[]
}
