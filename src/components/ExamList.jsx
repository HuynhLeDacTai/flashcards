import React from "react";
import ExamItem from "./ExamItem";

const ExamList = (props) => {
  const { listTests } = props;
  return (
    <>
      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="left-content">
              <div className="testitem-grid row">
                {listTests &&
                  listTests.map((item) => {
                    return (
                      <React.Fragment key={item.id}>
                        <ExamItem exam={item} />
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
            <div className="right-content"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamList;
