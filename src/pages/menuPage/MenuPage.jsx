import React from "react";
import "./menuPage.css";
import student from "./student-in-the-classroom.svg";
import { useState, useEffect } from "react";
const MenuPage = () => {
  const [subject, setSubject] = useState(null);
  const [subjectArray, setSubjectArray] = useState([
    { name: "Object Oriented Programming", isChoosen: false, id: 1234 },
    { name: "Web Devlopment", isChoosen: false, id: 5678 },
    { name: "Professional Communication", isChoosen: false, id: 9101 },
    { name: "Data Structures", isChoosen: false, id: 1213 },
    {
      name: "Computer Organisation and Architecture",
      isChoosen: false,
      id: 1415,
    },
  ]);
  const chooseSubject = () => {
    let updateSubject;
    for (let sub of subjectArray) {
      if (sub.isChoosen == true) {
        updateSubject = sub;
      }
    }
    setSubject(updateSubject);
  };
  const updateSubjectArray = (id) => {
    const temp = [...subjectArray];
    for (let sub of temp) {
      if (sub.id == id) {
        sub.isChoosen = true;
      } else {
        sub.isChoosen = false;
      }
    }
    setSubjectArray(temp);
    chooseSubject();
  };
  const renderSubjectArray = () => {
    console.log(subjectArray);
    return (
      <div className="subjectList">
        {subjectArray.map((sub) => {
          return (
            <div
              className={sub.isChoosen == true ? "subject choosen" : "subject"}
              onClick={() => {
                updateSubjectArray(sub.id);
              }}
              key={sub.id}
            >
              {sub.name}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="main_container">
      <div className="left_container">
        <h3>Choose the subject from here</h3>
        {renderSubjectArray()}
      </div>
      <img src={student} className="studentImg" />
    </div>
  );
};

export default MenuPage;
