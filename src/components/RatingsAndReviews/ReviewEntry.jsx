import React from "react";

var ReviewEntry = ({ review, addHelpful }) => (
  <div style={{ borderStyle: "nothing" }} className="reviewEntryParent">
    <div className="ratingAndUser">
      <div>✯{review.rating}</div>
      <div>
        {review.reviewer_name + " "}, {review.date.split("T")[0]}
      </div>
    </div>

    <div className="reviewSummary">{review.summary}</div>
    <div className="reviewBody">{review.body}</div>
    {review.recommend > 0 ? (
      <div style={{ paddingBottom: "20px" }}> ✓ I recommend this product</div>
    ) : null}
    {review.response !== null ? <div>{review.response}</div> : null}
    <div className="helpfulParent">
      <div className="helpfulWord">Helpful?</div>
      <div className="yesButton" onClick={() => addHelpful(review.review_id)}>
        Yes
      </div>
      <div className="helpfulCount">({review.helpfulness})</div>
      <div style={{ paddingLeft: "10px" }}>|</div>
      <div
        className="reportButton"
        onClick={() => addHelpful(review.review_id)}
      >
        Report
      </div>
    </div>

    <p>
      _________________________________________________________________________________________________________________
    </p>
  </div>
);

export default ReviewEntry;
