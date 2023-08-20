/* eslint-disable no-console */
// type GetConcurrentDataProp = {
//   fn?: Promise<[] | unknown[]> | Promise<Response>[];
// };

const getConcurrentData = async (fn: Promise<Response>[]) => {
  try {
    const res = await Promise.all(fn);
    // console.log(res);

    // const data = await res.then((data) => data.json());

    return res;
  } catch (err) {
    console.error(err);

    return null;
  }
};

export default getConcurrentData;
