import React from "react";
import "./Main.css";
import { useState } from "react";
import data from "../Datas/data";
const Main = () => {
  const [newclicked, setclicked] = useState("");
  const clickedh = [data.find((datas) => datas.id === newclicked)];
  const handledata = (item) => {
    setclicked(item);
  };

  const mylevels = (() => {
    if (newclicked > 0) {
      return clickedh.map((datas) => datas.level);
    } else {
      <div>''</div>;
    }
  })();
  console.log(mylevels);

  return (
    <div className="section">
      {newclicked > 0 ? (
        <div className="maincard">
          <div className="filtered">
            {newclicked > 0
              ? clickedh.map((datas) => (
                <>
                 <h1 className="itemstext">
                    {datas.level}
                    
                  </h1>
                  <button onClick={() => setclicked("")} className="xbtn">
                  X
                </button>
                </>
                 
                ))
              : ""}
          </div>
          <p onClick={() => setclicked("")} className="clear">
            Clear
          </p>
        </div>
      ) : (
        ""
      )}

      {/* {passed ?} */}

      {newclicked > 0
        ? data
            .filter((item) =>  mylevels.includes(item.level))
            .map((jobs) => (
              <div className={jobs.new && jobs.featured ? "cards" : "card"}>
                <div key={jobs.id} className="profile">
                  <div className="icons">
                    <img className="logoimg" src={jobs.logo} alt="as" />
                  </div>

                  <div className="profilenames">
                    <div className="namebtn">
                      <h4 className="companyname">{jobs.company}</h4>
                      {jobs.new && jobs.featured ? (
                        <>
                          {" "}
                          <button className="newbtn">New</button>
                          <button className="newbtn1">Feature</button>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    <h2 className="position">{jobs.position}</h2>
                    <div className="days">
                      <p className="lowprofile">{jobs.postedAt}</p>
                      <p className="lowprofile">{jobs.contract}</p>
                      <p className="lowprofile">{jobs.location}</p>
                    </div>
                  </div>
                </div>
                <div className="langs">
                  <h6 onClick={() => handledata(jobs.id)}>{jobs.level}</h6>
                  {jobs.languages.map((las) => (
                    <h6>{las}</h6>
                  ))}
                </div>
              </div>
            ))
        : data.map((job) => (
            <div className={job.new && job.featured ? "cards" : "card"}>
              <div key={job.id} className="profile">
                <div className="icons">
                  <img className="logoimg" src={job.logo} alt="as" />
                </div>

                <div className="profilenames">
                  <div className="namebtn">
                    <h4 className="companyname">{job.company}</h4>
                    {job.new && job.featured ? (
                      <>
                        {" "}
                        <button className="newbtn">New</button>
                        <button className="newbtn1">Feature</button>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <h2 className="position">{job.position}</h2>
                  <div className="days">
                    <p className="lowprofile">{job.postedAt}</p>
                    <p className="lowprofile">{job.contract}</p>
                    <p className="lowprofile">{job.location}</p>
                  </div>
                </div>
              </div>
              <div className="langs">
                <h6 onClick={() => handledata(job.id)}>{job.level}</h6>
                {job.languages.map((las) => (
                  <h6>{las}</h6>
                ))}
              </div>
            </div>
          ))}
    </div>
  );
};

export default Main;
