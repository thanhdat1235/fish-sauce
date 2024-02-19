import React from "react";
import Link from "next/link";
import moment from "moment";

interface ICard {
  link: string;
  image: string;
  title: string;
  desc?: string;
  ratting?: number;
  date?: string;
  author?: string;
  readMore?: {
    title: string;
    link: string;
  };
  textColor?: string;
}

const Card = ({ dataCard }: { dataCard: ICard }) => {
  return (
    <Link className="!mb-10 lg:!mb-0 last:!mb-0" href={dataCard.link}>
      <img
        className="d-block w-100 rounded-md mb-4"
        src={dataCard.image}
        alt={dataCard.title}
      />
      {dataCard.date && dataCard.author ? (
        <div className="flex items-center mb-2">
          <i className="fa-regular fa-clock text-sm mr-3"></i>
          <p className="italic text-sm text-gray-500 mr-5">
            {moment(dataCard.date, "DD-MM-YYYY").format("DD MMM YYYY")}
          </p>
          <i className="fa-solid fa-pencil text-xs mr-2"></i>
          <p className="italic text-sm text-gray-500">{dataCard.author}</p>
        </div>
      ) : (
        ""
      )}
      <h3
        className={`uppercase text-${dataCard.textColor} text-base font-semibold`}
      >
        {dataCard.title}
      </h3>
      <p
        className={`text-sm text-${dataCard.textColor} font-medium mb-2 line-clamp-4`}
      >
        {dataCard.desc}
      </p>
      {dataCard.readMore && (
        <Link
          href={dataCard.readMore?.link}
          className="uppercase text-black text-sm font-bold"
        >
          {dataCard.readMore.title}
        </Link>
      )}
    </Link>
  );
};

export default Card;
