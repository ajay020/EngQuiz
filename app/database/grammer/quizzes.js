const quizzes = [
  //============= Topic present simple id=1 ====================
  {
    id: 1,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // IDs of questions in this quiz
  },
  {
    id: 2,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], // IDs of questions in this quiz
  },

  {
    id: 3,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], // IDs of questions in this quiz
  },
  {
    id: 4,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], // IDs of questions in this quiz
  },
  //============= Topic present simple ====================
  {
    id: 5,
    topicId: 2, // ID of the topic this quiz belongs to
    questions: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50], // IDs of questions in this quiz
  },
  {
    id: 6,
    topicId: 2, // ID of the topic this quiz belongs to
    questions: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60], // IDs of questions in this quiz
  },
  {
    id: 7,
    topicId: 2, // ID of the topic this quiz belongs to
    questions: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70], // IDs of questions in this quiz
  },
  {
    id: 8,
    topicId: 2, // ID of the topic this quiz belongs to
    questions: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80], // IDs of questions in this quiz
  },
  //============= Topic Present perfect ====================
  {
    id: 9,
    topicId: 3, // ID of the topic this quiz belongs to
    questions: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90], // IDs of questions in this quiz
  },
  {
    id: 10,
    topicId: 3, // ID of the topic this quiz belongs to
    questions: [91, 92, 93, 94, 95, 96, 97, 98, 99, 100], // IDs of questions in this quiz
  },
  {
    id: 11,
    topicId: 3, // ID of the topic this quiz belongs to
    questions: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110], // IDs of questions in this quiz
  },
  //============= Topic Present perfect continuous ====================

  {
    id: 12,
    topicId: 4, // ID of the topic this quiz belongs to
    questions: [111, 112, 113, 114, 115, 116, 117, 118, 119, 120], // IDs of questions in this quiz
  },
  {
    id: 13,
    topicId: 4, // ID of the topic this quiz belongs to
    questions: [121, 122, 123, 124, 125, 126, 127, 128, 129, 130], // IDs of questions in this quiz
  },
  {
    id: 14,
    topicId: 4, // ID of the topic this quiz belongs to
    questions: [131, 132, 133, 134, 135, 136, 137, 138, 139, 140], // IDs of questions in this quiz
  },
  //============= Topic Past Simple ====================
  {
    id: 15,
    topicId: 5, // ID of the topic this quiz belongs to
    questions: [141, 142, 143, 144, 145, 146, 147, 148, 149, 150], // IDs of questions in this quiz
  },
  {
    id: 16,
    topicId: 5, // ID of the topic this quiz belongs to
    questions: [151, 152, 153, 154, 155, 156, 157, 158, 159, 160], // IDs of questions in this quiz
  },
  {
    id: 17,
    topicId: 5, // ID of the topic this quiz belongs to
    questions: [161, 162, 163, 164, 165, 166, 167, 168, 169, 170], // IDs of questions in this quiz
  },
  //============= Past continuous ====================
  {
    id: 18,
    topicId: 6, // ID of the topic this quiz belongs to
    questions: [171, 172, 173, 174, 175, 176, 177, 178, 179, 180], // IDs of questions in this quiz
  },
  {
    id: 19,
    topicId: 6, // ID of the topic this quiz belongs to
    questions: [181, 182, 183, 184, 185, 186, 187, 188, 189, 190], // IDs of questions in this quiz
  },
  {
    id: 20,
    topicId: 6, // ID of the topic this quiz belongs to
    questions: [191, 192, 193, 194, 195, 196, 197, 198, 199, 200], // IDs of questions in this quiz
  },
  //============= Past Perfect ====================
  {
    id: 21,
    topicId: 7, // ID of the topic this quiz belongs to
    questions: [201, 202, 203, 204, 205, 206, 207, 208, 209, 210], // IDs of questions in this quiz
  },
  {
    id: 22,
    topicId: 7, // ID of the topic this quiz belongs to
    questions: [211, 212, 213, 214, 215, 216, 217, 218, 219, 220], // IDs of questions in this quiz
  },
  {
    id: 23,
    topicId: 7, // ID of the topic this quiz belongs to
    questions: [221, 222, 223, 224, 225, 226, 227, 228, 229, 230], // IDs of questions in this quiz
  },
  //============= Past Perfect Continuous ====================
  {
    id: 24,
    topicId: 8, // ID of the topic this quiz belongs to
    questions: [231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
  },
  {
    id: 25,
    topicId: 8,
    questions: [241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
  },
  {
    id: 26,
    topicId: 8,
    questions: [251, 252, 253, 254, 255, 256, 257, 258, 259, 260],
  },
  //============= Future simple====================
  {
    id: 27,
    topicId: 9, // ID of the topic this quiz belongs to
    questions: [261, 262, 263, 264, 265, 266, 267, 268, 269, 270],
  },
  {
    id: 28,
    topicId: 9,
    questions: [271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
  },
  {
    id: 29,
    topicId: 9,
    questions: [281, 282, 283, 284, 285, 286, 287, 288, 289, 290],
  },
  //============= Future continuous====================
  {
    id: 30,
    topicId: 10, // ID of the topic this quiz belongs to
    questions: [291, 292, 293, 294, 295, 299, 297, 298, 299, 300],
  },
  {
    id: 31,
    topicId: 10,
    questions: [301, 302, 303, 304, 305, 306, 307, 308, 309, 310],
  },
  {
    id: 32,
    topicId: 10,
    questions: [311, 312, 313, 314, 315, 316, 317, 318, 319, 320],
  },
  //============= Future Perfect ====================
  {
    id: 33,
    topicId: 11, // ID of the topic this quiz belongs to
    questions: [321, 322, 323, 324, 325, 326, 327, 328, 329, 330],
  },
  {
    id: 34,
    topicId: 11,
    questions: [331, 332, 333, 334, 335, 336, 337, 338, 339, 340],
  },
  {
    id: 35,
    topicId: 11,
    questions: [341, 342, 343, 344, 345, 346, 347, 348, 349, 350],
  },
  //============= Future Perfect  id=36 ====================
  {
    id: 36,
    topicId: 12, // ID of the topic this quiz belongs to
    questions: [351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
  },
  {
    id: 37,
    topicId: 12,
    questions: [361, 362, 363, 364, 365, 366, 367, 368, 369, 370],
  },

  //============= Noun id=38 ====================
  {
    id: 38,
    topicId: 13,
    questions: [371, 372, 373, 374, 375, 376, 377, 378, 379, 380],
  },
  {
    id: 39,
    topicId: 13,
    questions: [381, 382, 383, 384, 385, 386, 387, 388, 389, 390],
  },
  {
    id: 40,
    topicId: 13,
    questions: [391, 392, 393, 394, 395, 396, 397, 398, 399, 400],
  },

  //============= Pronoun id=41 ====================
  {
    id: 41,
    topicId: 14,
    questions: [401, 402, 403, 404, 405, 406, 407, 408, 409, 410],
  },
  {
    id: 42,
    topicId: 14,
    text: "Identify the correct pronoun.",
    questions: [411, 412, 413, 414, 415, 416, 417, 418, 419, 420],
  },
  {
    id: 43,
    topicId: 14,
    questions: [421, 422, 423, 424, 425, 426, 427, 428, 429, 430],
  },
  //============= Adjective id=44 ====================
  {
    id: 44,
    topicId: 15,
    questions: [431, 432, 433, 434, 435, 436, 437, 438, 439, 440],
  },
  {
    id: 45,
    topicId: 15,
    text: "Choose the adjective in the following sentence.",
    questions: [441, 442, 443, 444, 445, 446, 447, 448, 449, 450],
  },
  {
    id: 46,
    topicId: 15,
    questions: [451, 452, 453, 454, 455, 456, 457, 458, 459, 460],
  },
  //============= Artilce id=47 ====================
  {
    id: 47,
    topicId: 16,
    questions: [461, 462, 463, 464, 465, 466, 467, 468, 469, 470],
  },
  {
    id: 48,
    topicId: 16,
    text: "Choose the article in the following sentence.",
    questions: [471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
  },
  {
    id: 49,
    topicId: 16,
    text: "Select the correct article to complete the sentence.",
    questions: [481, 482, 483, 484, 485, 486, 487, 488, 489, 490],
  },
  //============= Adverbs id=50 ====================
  {
    id: 50,
    topicId: 17,
    text: "Choose the Adverb in the following sentence.",
    questions: [491, 492, 493, 494, 495, 496, 497, 498, 499, 500],
  },
  {
    id: 51,
    topicId: 17,
    text: "Choose the correct adverb form to complete the sentence.",
    questions: [501, 502, 503, 504, 505, 506, 507, 508, 509, 510],
  },
  {
    id: 52,
    topicId: 17,
    text: "Select the correct adverb to complete the sentence.",
    questions: [511, 512, 513, 514, 515, 516, 517, 518, 519, 520],
  },
  //============= Modal verb id=53 ====================
  {
    id: 53,
    topicId: 18,
    text: "Fill in the blanks with the correct modal verb:",
    questions: [521, 522, 523, 524, 525, 526, 527, 528, 529, 530],
  },
  {
    id: 54,
    topicId: 18,
    text: "Fill in the blanks with the correct modal verb:",
    questions: [531, 532, 533, 534, 535, 536, 537, 538, 539, 540],
  },
  {
    id: 55,
    topicId: 18,
    text: "Fill in the blanks with the correct modal verb:",
    questions: [541, 542, 543, 544, 545, 546, 547, 548, 549, 550],
  },
  {
    id: 56,
    topicId: 18,
    text: "Fill in the blanks with the correct modal verb:",
    questions: [551, 552, 553, 554, 555, 556, 557, 558, 559, 560],
  },
  //============= Preposition id=57 ====================

  {
    id: 57,
    topicId: 19,
    text: "Fill in the blank with the correct preposition: in or into?",
    questions: [561, 562, 563, 564, 565, 566, 567, 568, 569, 570],
  },
  {
    id: 58,
    topicId: 19,
    text: "Fill in the blank with the correct preposition: Since or For?",
    questions: [571, 572, 573, 574, 575, 576, 577, 578, 579, 580],
  },
  {
    id: 59,
    topicId: 19,
    text: "Fill in the blank with the correct preposition: Since or For?",
    questions: [581, 582, 583, 584, 585, 586, 587, 588, 589, 590],
  },
  {
    id: 60,
    topicId: 19,
    text: "Fill in the blank with the correct preposition:",
    questions: [591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
  },
  {
    id: 61,
    topicId: 19,
    text: "Fill in the blank with the correct preposition:",
    title: "",
    questions: [601, 602, 603, 604, 605, 606, 607, 608, 609, 610],
  },

  //============= Preposition id=57 ====================
  {
    id: 62,
    topicId: 20,
    text: "",
    title: "",
    questions: [611, 612, 613, 614, 615, 616, 617, 618, 619, 620],
  },
  {
    id: 63,
    topicId: 20,
    text: "",
    title: "",
    questions: [621, 622, 623, 624, 625, 626, 627, 628, 629, 630],
  },
];

// ================ Methods ========================

export const getQuizById = (quizId) => {
  return quizzes.find((quiz) => quiz.id === quizId);
};

export default {
  quizzes,
  getQuizById,
};
