import { Episode } from "./episode";

export interface SeasonResponse {
    Title: string;
    Season: string;
    totalSeasons: string;
    Episodes: Episode[];
    Response: string;
}
