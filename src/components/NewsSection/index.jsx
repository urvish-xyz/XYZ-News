import React from "react";

const NewsSection = ({ mydata }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 px-3 pt-14 sm:grid-cols-2 lg:grid-cols-2">
      {mydata.map((x) => (
        <div className="w-full mt-12 overflow-hidden border-clr rounded-xl ">
          <div className="img_news">
            <img
              className="transition ease-in-out delay-150 hover:scale-105"
              src={x.imageUrl}
              alt=""
            />
          </div>
          <div className="p-3">
            <h3 className="pb-3 text-2xl font-bold text-red-700">{x.title}</h3>
            <div className="">
              <p className="font-bold">
                <span className="">By :</span> {x.author}
              </p>
              <p>
                {x.time} on {x.date}
              </p>
            </div>
          </div>
          <div className="flex justify-end w-full px-2 pb-2 font-bold">
            <button className="px-2 bg-gray-300 rounded-md" type="button">
              <a href={x.readMoreUrl} alt="linkofurl">
                Read More {'>'}
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
