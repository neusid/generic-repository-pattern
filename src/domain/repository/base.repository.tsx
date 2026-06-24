export default class BaseRepository {
    private baseUrl: string;

    constructor(url: string) {
        this.baseUrl = url;
    }

    protected async get<T>(endpoint: number): Promise<T> {
        const response = await fetch(this.baseUrl + endpoint, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`)
        }

        return response.json() as Promise<T>
    }

}
