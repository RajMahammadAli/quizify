import { Link } from "react-router-dom";

export default function ({
  handleNext,
  question,
  questionCount,
  handlePrevious,
  questions,
  isSelected,
  handleOption,
  selectedOption,
  handleSubmit,
}) {
  return (
    <>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {questionCount + 1}.{question?.question}
          </h2>

          {question?.options.map((item, index) => (
            <button
              onClick={() => handleOption(item)}
              className={
                selectedOption === item
                  ? "bg-sky-700 mt-3 p-2  text-left"
                  : "cursor-pointer mt-3 border p-2 hover:bg-sky-700 text-left"
              }
              key={index}
            >
              {index + 1}. {item}
            </button>
          ))}

          <div className="card-actions justify-center mt-8">
            <div
              onClick={handlePrevious}
              className={
                questionCount === 0
                  ? "btn btn-disabled" // Make sure this class is defined in your styles
                  : "btn btn-success bg-green-700 text-white cursor-pointer"
              }
            >
              Previous
            </div>
            {questionCount === questions.length - 1 ? (
              <button className="btn btn-success bg-green-700 text-white cursor-pointer">
                <Link onClick={handleSubmit}>Submit</Link>
              </button>
            ) : (
              <div
                onClick={handleNext}
                className={
                  !isSelected
                    ? "btn btn-disabled" // Make sure this class is defined in your styles
                    : "btn btn-success bg-green-700 text-white cursor-pointer"
                }
              >
                Next
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
