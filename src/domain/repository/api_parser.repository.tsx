import BaseRepository from "./base.repository";

export interface ParserResult {
    postId: number;
    id: number;
    email: string;
    body: string;
}

export class ApiParserRepository extends BaseRepository {
    constructor() { super('https://jsonplaceholder.typicode.com/comments/') }

    async extractResponse(rawInput: number): Promise<ParserResult> {
        return this.get<ParserResult>(rawInput);
    }

}

export const apiParserRepository = new ApiParserRepository();

