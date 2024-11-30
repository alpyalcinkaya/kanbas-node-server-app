
// Each question has its unique ID, the quiz ID or quiz it is associated with, 
// Points it is worth, The question/description, the answer(s)
// can add route to quizzes to retrieve quizzes by quizId. So get each question that has the ID of the current quiz. 
export default [
    {
        "_id": 1,
        "quizId": 101,
        "points": 10,
        "question": "This is a test answer: True or Yes",
        "answer": true,
        "type": "True/False"

    }, 
    {
        "_id": 2,
        "quizId": 101,
        "points": 15,
        "question": "This is a test answer: False or No",
        "answer": false,
          "type": "True/False"
    },
    {
        "_id": 3,
        "quizId": 101,
        "points": 15,
        "question": "This is a test, answer: 1",
        "answer": 1,
          "type": "Fill in the blank"
    },
    {
        "_id": 4,
        "quizId": 101,
        "points": 15,
        "question": "This is a test, answer 2",
        "answer": 2,
        "type": "Fill in the blank"
    },
    {
        "_id": 5,
        "quizId": 101,
        "points": 15,
        "question": "This is a test, answer: b",
        "answer": "b",
        "type": "multi-choice"
    },
    {
        "_id": 6,
        "quizId": 101,
        "points": 15,
        "question": "This is a test, answer: a",
        "answer": "a",
         "type": "multi-choice"
    },
    {
        "_id": 7,
        "quizId": 101,
        "points": 15,
        "question": "This is a test, answer : a and b",
        "answer": ["a", "b"],
         "type": "multi-choice"
    }

    
]

