import resultModel from "../models/results";
import IResult from "../models/interfaces/result";

// e.g. calling with params userId: 1 and resultName: IPSS
// gets all IPSS scores for a user with _id 1
export async function getUserResultsByKind(
  userId: string,
  resultName: "IPSS" | "PSA" | "IIEF"
) {
  return await resultModel.find({ user: userId, name: resultName });
}

export async function submitUserResultsByKind(
  userId: string,
  resultParams: IResult
) {
  const fullParams = { user: userId, ...resultParams };
  const newResult = new resultModel(fullParams);
  return await newResult.save();
}
