type Competitions =
  | "PD"
  | "BSA"
  | "ELC"
  | "PL"
  | "SA"
  | "BL1"
  | "PPL"
  | "DED"
  | "FL1";

type MatchAreaCode =
  | "ESP"
  | "BRA"
  | "ENG"
  | "ITA"
  | "GER"
  | "POR"
  | "NED"
  | "FRA";

export enum MatchStatus {
  FINISHED = "FINISHED",
  IN_PLAY = "IN_PLAY",
  TIMED = "TIMED",
  PAUSED = "PAUSED",
  POSTPONED = "POSTPONED",
}

type Score = {
  home: null | number;
  away: null | number;
};

export type MatchScore = {
  winner: null;
  duration: "REGULAR";
  fullTime: Score;
  halfTime: Score;
};

type Team = {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
};

type Referee = {
  id: number;
  name: string;
  type: "REFEREE";
  nationality: string;
};

export type Match = {
  area: {
    id: number;
    name: string;
    code: MatchAreaCode;
    flag: string;
  };
  competition: {
    id: number;
    name: string;
    code: Competitions;
    type: "LEAGUE";
    emblem: string;
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null;
  };
  id: number;
  utcDate: string;
  status: MatchStatus;
  matchday: number;
  stage: string;
  group: null;
  lastUpdated: string;
  homeTeam: Team;
  awayTeam: Team;
  score: {
    winner: null;
    duration: "REGULAR";
    fullTime: Score;
    halfTime: Score;
  };
  referees: Referee[];
};

export type MacthesResponse = {
  filters: {
    dateFrom: string;
    dateTo: string;
    permission: "TIER_ONE";
  };
  resultSet: {
    count: number;
    competitions: Competitions;
    first: string;
    last: string;
    played: number;
  };
  matches: Match[];
};
