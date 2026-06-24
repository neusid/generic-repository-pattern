import BaseRepository from "./base.repository";

export interface ParserResult {
    userId: number;
    id: number;
    title: string;
    completed: string;
}

export class ApiParserRepository extends BaseRepository {
    constructor() { super('https://jsonplaceholder.typicode.com/todos/') }

    async extractResponse(rawInput: number): Promise<ParserResult> {
        return this.get<ParserResult>(rawInput);
    }
}

export const apiParserRepository = new ApiParserRepository();

