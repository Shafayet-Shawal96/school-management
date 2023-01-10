import React, { useState } from "react";
import TableContent from "../../Components/IndexPageTwoComponents/TableContent";

function AdmissionArea() {
  const [tabStatus, setTabStatus] = useState(1);

  const updateTabStatus = (e) => {
    e.preventDefault();
    const id = Number(e.target.parentElement.id);
    if (id) {
      setTabStatus(id);
    } else {
      setTabStatus(1);
    }
  };

  return (
    <div className="admission-area pt-125 pb-130 bg-img-position">
      <div className="container">
        <div className="admission-title text-center">
          <h2>Admission Going On</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{" "}
          </p>
          <div className="apply-btn">
            <a className="default-btn" href="/">
              APPLY NOW
            </a>
          </div>
        </div>
        <div className="admission-tab-list nav pt-80 pb-60">
          <a
            href="/"
            id={1}
            className={tabStatus === 1 ? "active" : ""}
            onClick={updateTabStatus}
          >
            <h4>all </h4>
          </a>
          <a
            href="/"
            id={2}
            className={tabStatus === 2 ? "active" : ""}
            onClick={updateTabStatus}
          >
            <h4> Undergraduate Courses </h4>
          </a>
          <a
            href="/"
            id={3}
            className={tabStatus === 3 ? "active" : ""}
            onClick={updateTabStatus}
          >
            <h4>Graduate Courses </h4>
          </a>
          <a
            href="/"
            id={4}
            className={tabStatus === 4 ? "active" : ""}
            onClick={updateTabStatus}
          >
            <h4>Diploma Courses </h4>
          </a>
        </div>
        <TableContent tabStatus={tabStatus} />
      </div>
    </div>
  );
}

export default AdmissionArea;
