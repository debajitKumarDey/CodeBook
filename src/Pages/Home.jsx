import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPages, updateToPages } from "../Redux/bookSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSerchParams] = useSearchParams();
  const pageId = searchParams.get("pageId");
  const dispatch = useDispatch();

  const createPage = () => {
    const page = {
      title: title,
      content: value,
      id: pageId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    {
      pageId ? dispatch(updateToPages(page)) : dispatch(addToPages(page));
    }
    setTitle('')
    setValue('')
    setSerchParams({})
  };
  return (
    <div className="flex flex-col items-center">
      <div className="text-center pt-8">
        <p className="text-3xl font-semibold font-mono">Dashboard</p>
        <input
          type="text"
          className=" px-8 py-2 bg-slate-100 shadow-lg"
          placeholder="Write the Title of Your Code"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-slate-600 text-white font-semibold px-4 py-2 m-3 shadow-xl"
          onClick={createPage}
        >
          {pageId ? "Update Page" : "Create Page"}
        </button>
      </div>
      <div className="flex justify-center py-5">
        <textarea
          className="min-w-[400px] bg-slate-100  p-3 shadow-lg"
          placeholder="Enter Your Code Here"
          rows={20}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
