import React from "react";
import { generateArray } from "../utils/functionUtils";

const Pagination = (props) => {
  const { activePage, totalPage, nextPage, changePage, backPage } = props;
  var page = generateArray(totalPage);
  return (
    <>
      <nav className="">
        <div className="pagination">
          <span className={`page-item ${activePage === 1 && "hide"}`}>
            <a
              className="page-link"
              href="/#"
              onClick={(event) => {
                backPage(event);
              }}
            >
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </span>
          {page.map((element, index) => {
            return (
              <span
                key={index}
                className={
                  element === activePage ? "page-item active" : "page-item"
                }
              >
                <a
                  className="page-link"
                  href={`/page/${element}`}
                  onClick={(event) => changePage(event, element)}
                >
                  {element}
                </a>
              </span>
            );
          })}
          <span className={`page-item ${activePage === totalPage && "hide"}`}>
            <a
              className="page-link"
              href="/#"
              onClick={(event) => {
                nextPage(event);
              }}
            >
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Pagination;
