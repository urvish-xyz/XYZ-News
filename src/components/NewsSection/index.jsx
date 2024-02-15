import React from "react";

const NewsSection = ({ mydata }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 px-3 pt-14 sm:grid-cols-2 lg:grid-cols-2">
      {mydata.map((x) => (
        <div className="border-clr mt-12 w-full overflow-hidden rounded-xl ">
          <div className="img_news">
            <img
              className="transition delay-150 ease-in-out hover:scale-105"
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
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
