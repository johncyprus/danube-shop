import React from "react";
import ReviewEntry from "./ReviewEntry";
import DropdownInline from "./Dropdown";
import ReviewModal from "./ReviewModal";

var Reviews = ({
  data,
  addTwo,
  count,
  markHelpful,
  reportReview,
  changeDropdown,
  productName
}) => {
  let items = [];
  for (let i = 0; i < count; i++) {
    if (data.results[i] === undefined) break;
    items.push(
      <ReviewEntry
        key={data.results[i].review_id}
        review={data.results[i]}
        addHelpful={markHelpful}
        report={reportReview}
      />
    );
  }

  return (
    <div
      // style={{ borderStyle: "solid", borderColor: "green" }}
      className="reviewsParent"
    >
      <div
        style={{ paddingLeft: "17px", paddingBottom: "1vh" }}
        className="reviewHeader"
      >
        There are {data.results.length} Reviews,{" "}
        <DropdownInline changeValue={changeDropdown} />
      </div>

      <div className="reviewEntryContainer">{items}</div>
      <div className="reviewButtons">
        {count < data.results.length ? (
          <button onClick={addTwo} class="ui secondary basic button">
            More Reviews
          </button>
        ) : null}

        <ReviewModal productName={productName} />

        {/* <button class="ui basic button">Add a Review</button> */}
      </div>
    </div>
  );
};

export default Reviews;
