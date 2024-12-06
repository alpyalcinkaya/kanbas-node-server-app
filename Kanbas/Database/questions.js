
// Each question has its unique ID, the quiz ID or quiz it is associated with, 
// Points it is worth, The question/description, an array of options, the answer or array of answers with the value (answer) and explanation for answer. 
// can add route to quizzes to retrieve quizzes by quizId. So get each question that has the ID of the current quiz. 
export default [
    {
        "_id": 1,
        "quizId": 101,
        "points": 10,
        "title": "question title 1",
        "question": "This is a test answer: True or Yes",
        "options": ["true", "false"],
        "answer": [
            { "value": "true", "explanation": "True is correct because..." },
        ],
        "type": "True/False"

    }, 
    {
        "_id": 2,
        "quizId": 101,
        "points": 15,
        "title": "question title 2",
        "question": "This is a test answer: False or No",
        "options": ["true", "false"],
        "answer": [
            { "value": "false", "explanation": "false is correct because..." },
        ],
          "type": "True/False"
    },
    {
        "_id": 3,
        "quizId": 101,
        "points": 15,
        "title": "question title 3",
        "question": "This is a test, answer: 1",
        "options": ["1", "2"],
        "answer": [
            { "value": "1", "explanation": "1 is correct because..." },
        ],
        "answer": 1,
          "type": "Fill in the Blank"
    },
    {
        "_id": 4,
        "quizId": 101,
        "points": 15,
        "title": "question title 4",
        "question": "This is a test, answer 2",
        "options": ["Answer", "Not answer"],
        "answer": [
            { "value": "Answer", "explanation": "Answer is correct because..." },
        ],
        "type": "Fill in the Blank"
    },
    {
        "_id": 5,
        "quizId": 101,
        "points": 15,
        "title": "question title 5",
        "question": "This is a test, answer: b",
        "options": ["a", "b"],
        "answer": [
            { "value": "a", "explanation": "a is correct because..." },
        ],
        "type": "Multiple Choice"
    },
    {
        "_id": 6,
        "quizId": 101,
        "points": 15,
        "title": "question title 6",
        "question": "This is a test, answer: a",
        "options": ["a", "b"],
        "answer": [
            { "value": "b", "explanation": "b is correct because..." },
        ],
         "type": "Multiple Choice"
    },

    {
        "_id": 7,
        "quizId": 101,
        "points": 25,
        "title": "question title 7",
        "question": "This is a test, answer : a and b, only the last option",
       "options": ["a", "b", "a and b"],
        "answer": [
            { "value": "a and b", "explanation": "a and b is correct because..."}, 
        ],
         "type": "Multiple Choice"
    },


///////////////////////////////////////////// Class 2
    {
        "_id": 8,
        "quizId": 102,
        "points": 20,
        "title": "question title 8",
        "question": "This is a test answer: False or No",
        "options": [true, false],
        "answer": [
            { "value": false, "explanation": "False is correct because..." },
        ],
        "type": "True/False"

    }, 
    {
        "_id": 9,
        "quizId": 102,
        "points": 20,
        "title": "question title 9",
        "question": "This is a test answer: True or Yes",
        "options": [true, false],
        "answer": [
            { "value": true, "explanation": "true is correct because..." },
        ],
          "type": "True/False"
    },
    {
        "_id": 10,
        "quizId": 102,
        "points": 20,
        "title": "question title 10",
        "question": "This is a test, answer: 2",
        "options": [1, 2],
        "answer": [
            { "value": 2, "explanation": "2 is correct because..." },
        ],
        "answer": 1,
          "type": "Fill in the Blank"
    },
    {
        "_id": 11,
        "quizId": 102,
        "points": 20,
        "title": "question title 11",
        "question": "This is a test, answer 3",
        "options": ["3", "4"],
        "answer": [
            { "value": "3", "explanation": "3 is correct because..." },
        ],
        "type": "Fill in the Blank"
    },
    {
        "_id": 12,
        "quizId": 102,
        "points": 20,
        "title": "question title 12",
        "question": "This is a test, answer: c",
        "options": ["c", "d"],
        "answer": [
            { "value": "c", "explanation": "c is correct because..." },
        ],
        "type": "Multiple Choice"
    },
    {
        "_id": 13,
        "quizId": 102,
        "points": 20,
        "title": "question title 13",
        "question": "This is a test, answer: d",
        "options": ["c", "d"],
        "answer": [
            { "value": "d", "explanation": "d is correct because..." },
        ],
         "type": "Multiple Choice"
    },

    {
        "_id": 14,
        "quizId": 102,
        "points": 29,
        "title": "question title 14",
        "question": "This is a test, answer : e and f, only the last option",
        "options": ["a", "b", "e and f"],
        "answer": [
            { "value": "e and f", "explanation": "e and f is correct because..."}, 
        ],
         "type": "Multiple Choice"
    }
]

