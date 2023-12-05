import { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "",
    password: "",
    classId: "",
  });
  const [teacher, setTeacher] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [classroom, setClassroom] = useState({
    grade: "",
    classNum: "",
    teacherId: "",
  });
  const [school, setSchool] = useState({
    name: "",
    schoolCode: "",
    password: "",
  });

  function handleStudent(e) {
    setStudent((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function postStudent() {
    try {
      fetch("http://localhost:3000/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      })
        .then((res) => {
          if (!res.ok) throw Error("not ok");
          return res.json();
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    } catch (err) {
      console.log(err);
    }
  }

  function handleTeacher(e) {
    setTeacher((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function postTeacher() {
    try {
      fetch("http://localhost:3000/teacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teacher),
      })
        .then((res) => {
          if (!res.ok) throw Error("not ok");
          return res.json();
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    } catch (err) {
      console.log(err);
    }
  }

  function handleClassroom(e) {
    setClassroom((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function postClassroom() {
    try {
      fetch("http://localhost:3000/classroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(classroom),
      })
        .then((res) => {
          if (!res.ok) throw Error("not ok");
          return res.json();
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    } catch (err) {
      console.log(err);
    }
  }

  function handleSchool(e) {
    setSchool((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function postSchool() {
    try {
      fetch("http://localhost:3000/school", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(school),
      })
        .then((res) => {
          if (!res.ok) throw Error("not ok");
          return res.json();
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    } catch (err) {
      console.log(err);
    }
  }

  function handleShow(name) {
    try {
      fetch(`http://localhost:3000/${name}`)
        .then((res) => {
          if (!res.ok) throw Error;
          return res.json();
        })
        .then((res) => console.log(name, res))
        .catch((e) => console.log(e));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <button onClick={() => handleShow(student)}>show students</button>
      <button onClick={() => handleShow(school)}>show schools</button>
      <button>other show students that does nothing</button>

      <hr />
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={(e) => handleStudent(e)}
        placeholder="name..."
      />
      <input
        type="password"
        name="password"
        value={student.password}
        onChange={(e) => handleStudent(e)}
        placeholder="password..."
      />
      <input
        type="number"
        name="classId"
        value={student.classId}
        onChange={(e) => handleStudent(e)}
        placeholder="classId..."
      />
      <button onChange={postStudent}>add student</button>
      <hr />
      <input
        type="text"
        name="name"
        value={teacher.name}
        onChange={(e) => handleTeacher(e)}
        placeholder="name..."
      />
      <input
        type="password"
        name="password"
        value={teacher.password}
        onChange={(e) => handleTeacher(e)}
        placeholder="password..."
      />
      <input
        type="email"
        name="email"
        value={teacher.email}
        onChange={(e) => handleTeacher(e)}
        placeholder="email..."
      />
      <button onChange={postTeacher}>add Teacher</button>
      <hr />
      <input
        type="text"
        name="grade"
        value={classroom.grade}
        onChange={(e) => handleClassroom(e)}
        placeholder="grade..."
      />
      <input
        type="number"
        name="classNum"
        value={classroom.classNum}
        onChange={(e) => handleClassroom(e)}
        placeholder="class num..."
      />
      <input
        type="number"
        name="teacherId"
        value={classroom.teacherId}
        onChange={(e) => handleClassroom(e)}
        placeholder="teacher id..."
      />
      <button onChange={postClassroom}>add Classroom</button>
      <hr />
      <input
        type="text"
        name="name"
        value={school.name}
        onChange={(e) => handleSchool(e)}
        placeholder="name..."
      />
      <input
        type="text"
        name="schoolCode"
        value={school.schoolCode}
        onChange={(e) => handleSchool(e)}
        placeholder="school code..."
      />
      <input
        type="password"
        name="password"
        value={school.password}
        onChange={(e) => handleSchool(e)}
        placeholder="admin password..."
      />
      <button onChange={postSchool}>add School</button>
    </>
  );
}

export default App;
