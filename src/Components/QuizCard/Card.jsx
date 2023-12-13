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
          <h1 className="text-xl text-right font-bold">
            {questionCount + 1}/
            <span className="text-2xl">{questions.length}</span>
          </h1>
          <h2 className="card-title">
            {questionCount + 1}.{question?.question}
          </h2>

          {question?.options.map((item, index) => (
            <button
              onClick={() => handleOption(item)}
              className={
                selectedOption === item
                  ? "bg-gradient-to-r from-slate-900 to-black hover:text-white font-bold rounded-full mt-3 px-4 py-2 text-white  text-left"
                  : "cursor-pointer mt-3 px-4 py-2 border hover:bg-gradient-to-r from-slate-900 to-black hover:text-white font-bold rounded-full text-left"
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
                  ? "border px-8 py-2 rounded-full border-black hover:bg-gradient-to-r from-slate-900 to-black cursor-pointer duration-500 hover:text-white font-bold btn-disabled"
                  : "border px-8 py-2 rounded-full border-black hover:bg-gradient-to-r from-slate-900 to-black cursor-pointer duration-500 hover:text-white font-bold"
              }
            >
              Previous
            </div>
            {isSelected && questionCount === questions.length - 1 ? (
              <button className="border px-8 py-2 rounded-full border-black hover:bg-gradient-to-r from-slate-900 to-black cursor-pointer duration-500 hover:text-white font-bold">
                <Link onClick={handleSubmit}>Submit</Link>
              </button>
            ) : (
              <div
                onClick={handleNext}
                className={
                  !isSelected
                    ? "border px-8 py-2 rounded-full border-black hover:bg-gradient-to-r from-slate-900 to-black cursor-pointer duration-500 hover:text-white font-bold btn-disabled" // Make sure this class is defined in your styles
                    : "border px-8 py-2 rounded-full border-black hover:bg-gradient-to-r from-slate-900 to-black cursor-pointer duration-500 hover:text-white font-bold"
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
