import type { Furo, Hai, HaiArrayObject } from "./hai";

export interface HaiInput {
  hai: Hai[];
  furo: Furo[];
}

export interface AgariElement {
  type: "shuntsu" | "minko" | "anko" | "minkan" | "ankan" | "toitsu";
  hai: Hai[];
  // チー、ポン、大明槓、加槓の場合はtrue
  furo: boolean;
}

export interface Agari {
  elements: AgariElement[];
}

export interface ProcessingAgari {
  elements: AgariElement[];
  hai: HaiArrayObject;
  completed: boolean;
}
