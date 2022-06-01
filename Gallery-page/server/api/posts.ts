import posts from "@/data/MOCK_DATA.json"
import { IncomingMessage, ServerResponse } from 'http'

export default function (req: IncomingMessage, res: ServerResponse) {
    return { posts }
}