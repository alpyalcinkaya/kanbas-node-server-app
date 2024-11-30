
// Each question has its unique ID, the quiz ID or quiz it is associated with, 
// Points it is worth, The question/description, the answer(s)
// can add route to quizzes to retrieve quizzes by quizId. So get each question that has the ID of the current quiz. 
export default [
    {
        "_id": 1,
        "quizId": 101,
        "points": 10,
        "question": "This is a test answer: True or Yes",
        "options": [true, false],
        "answer": [
            { "value": true, "explanation": "True is correct because..." },
        ],
        "type": "True/False"

    }, 
    {
        "_id": 2,
        "quizId": 101,
        "points": 15,
        "question": "This is a test answer: False or No",
        "options": [true, false],
        "answer": [
            { "value": false, "explanation": "false is correct because..." },
        ],
          "type": "True/False"
    },
    {
        "_id": 3,
        "quizId": 101,
        "points": 15,
        "question": "This is a test, answer: 1",
        "options": [1, 2],
        "answer": [
            { "value": 1, "explanation": "1 is correct because..." },
        ],
        "answer": 1,
          "type": "Fill in the blank"
    },
    {
        "_id": 4,
        "quizId": 101,
        "points": 15,
        "question": "This is a test, answer 2",
        "options": ["Answer", "Not answer"],
        "answer": [
            { "value": "Answer", "explanation": "Answer is correct because..." },
        ],
        "type": "Fill in the blank"
    },
    {
        "_id": 5,
        "quizId": 101,
        "points": 15,
        "question": "This is a test, answer: b",
        "options": ["a", "b"],
        "answer": [
            { "value": "a", "explanation": "a is correct because..." },
        ],
        "type": "multi-choice"
    },
    {
        "_id": 6,
        "quizId": 101,
        "points": 15,
        "question": "This is a test, answer: a",
        "options": ["a", "b"],
        "answer": [
            { "value": "b", "explanation": "b is correct because..." },
        ],
         "type": "multi-choice"
    },
    {
        "_id": 7,
        "quizId": 101,
        "points": 15,
        "question": "This is a test, answer : a and b",
       "options": ["a", "b"],
        "answer": [
            { "value": "a", "explanation": "a is correct because..."}, 
            { "value": "b", "explanation": "b is correct because..."
            }
        ],
         "type": "multi-choice"
    },

    {
        "_id": 8,
        "quizId": 101,
        "points": 25,
        "question": "This is a test, answer : a and b, only the last option",
       "options": ["a", "b", "a and b"],
        "answer": [
            { "value": "a and b", "explanation": "a and b is correct because..."}, 
        ],
         "type": "multi-choice"
    }

    
]

