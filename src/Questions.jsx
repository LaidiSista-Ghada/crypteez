import React ,{useState} from "react";

function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);
    const questions = [
        {
            question: "What is crypto?",
            answer: "Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a blockchain and uses cryptography for security. It is decentralized and operates independently of a central bank." 
        },
        {
            question: "Where to buy crypto?",
            answer: "Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a blockchain and uses cryptography for security. It is decentralized and operates independently of a central bank." 
        },
        {
            question: "How to earn crypto?",
            answer: "Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a blockchain and uses cryptography for security. It is decentralized and operates independently of a central bank." 
        },
        {
            question: "How to earn rewards?",
            answer: "Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a blockchain and uses cryptography for security. It is decentralized and operates independently of a central bank." 
        }
    ]

    return (
        <div className="QuestionsSection">
                <h1 className="questionTitle">Frequently Asked Questions</h1>
                <div className="Questions">
                    {questions.map((q, index) => (
                        <div className="questionBlock" key={index}>
                            <div className="question">
                                <h2 >{q.question}</h2>
                                <img src="/chevron-down.svg" alt="chevron" 
                                className={`arrow ${activeIndex === index ? 'activequestion' : ''}`}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)} />
                            </div>
                            {activeIndex === index && <p className="answer">{q.answer}</p>}
                        </div>
                    ))}

                </div>

        </div>
    )
}

export default Questions;