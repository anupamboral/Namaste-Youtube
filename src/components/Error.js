import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="h-dvh pt-40 bg-butterfly">
      <div className="error-page text-2xl bg-slate-500 opacity-80 flex  justify-center items-center flex-col w-1/2 m-auto p-4 rounded-2xl gap-8">
        <h1 className="font-bold">Oopsss!!!</h1>
        <h2 className="font-bold">Something went wrong</h2>
        <h2 className="font-bold">{String(err)}</h2>
      </div>
    </div>
  );
};
export default Error;
