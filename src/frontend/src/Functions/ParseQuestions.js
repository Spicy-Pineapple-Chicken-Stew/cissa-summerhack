export default function parseQuestions(questionList){
    var flashcards = []
    questionList.forEach((elem) => {
        flashcards.push(
            {
                front: {
                    text: elem.question,
                },
                back: {
                    text: elem.answer,
                }
            }
        )
    })
    return flashcards
}
