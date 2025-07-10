import { Show } from "./show";

export interface ShowResponse {
    Search: Show[];
    totalResults: number;
    Response: string;
}
