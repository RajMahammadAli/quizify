import { createContext, useState } from "react";

export const AuthContext = createContext(null);
export default function ({ children }) {
  const [usersResult, setUsersResult] = useState(0);
  const [questions, setQuestions] = useState(null);

  const handleResult = (result, questions) => {
    setUsersResult(result);
    setQuestions(questions);
  };
  console.log(usersResult);
  const authInfo = {
    usersResult,
    handleResult,
    questions,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
