import pastContinuous1 from "./tense/pastContinuous1";
import pastContinuous2 from "./tense/pastContinuous2";
import pastContinuous3 from "./tense/pastContinuous3";
import pastPerfect1 from "./tense/pastPerfect1";
import pastPerfect2 from "./tense/pastPerfect2";
import pastPerfect3 from "./tense/pastPerfect3";
import pastSimple1 from "./tense/pastSimple1";
import pastSimple2 from "./tense/pastSimple2";
import pastSimple3 from "./tense/pastSimple3";
import { presentContinuous1 } from "./tense/presentConti1";
import { presentContinuous2 } from "./tense/presentConti2";
import { presentContinuous3 } from "./tense/presentConti3";
import { presentContinuous4 } from "./tense/presentConti4";
import { presentPerfect1 } from "./tense/presentPerfect1";
import { presentPerfect2 } from "./tense/presentPerfect2";
import { presentPerfect3 } from "./tense/presentPerfect3";
import presentPerfectCont1 from "./tense/presentPerfectCont1";
import presentPerfectCont2 from "./tense/presentPerfectCont2";
import presentPerfectCont3 from "./tense/presentPerfectCont3";
import { presentSimple1 } from "./tense/presentSimple1";
import presentSimple2 from "./tense/presentSimple2";
import presentSimple3 from "./tense/presentSimple3";
import { presentSimple4 } from "./tense/presentSimple4";

const questions = [
  // ================ present simple  ==========================
  ...presentSimple1,
  ...presentSimple2,
  ...presentSimple3,
  ...presentSimple4,
  /**
   *
   *
   */
  // ================ present continuoue ==========================
  ...presentContinuous1,
  ...presentContinuous2,
  ...presentContinuous3,
  ...presentContinuous4,
  /**
   *
   *
   */
  // ================ Present perfect ==========================
  ...presentPerfect1,
  ...presentPerfect2,
  ...presentPerfect3,
  /**
   *
   *
   */
  // ================ Present Perfect Continuous ==========================
  ...presentPerfectCont1,
  ...presentPerfectCont2,
  ...presentPerfectCont3,
  /**
   *
   *
   */
  // ================ Past Simple  ==========================
  ...pastSimple1,
  ...pastSimple2,
  ...pastSimple3,
  /**
   *
   *
   */
  // ================ Past Continuous ==========================
  ...pastContinuous1,
  ...pastContinuous2,
  ...pastContinuous3,
  /**
   *
   *
   */
  // ================ Past Perfect ==========================
  ...pastPerfect1,
  ...pastPerfect2,
  ...pastPerfect3,
];

// ================ Methods ========================

export const getQuestionById = (id) => {
  return questions.find((question) => question.id === id);
};

export default {
  questions,
  getQuestionById,
};
