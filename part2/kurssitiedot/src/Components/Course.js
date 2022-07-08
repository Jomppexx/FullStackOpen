const Header = ({ courses }) => {
  console.log("Visiting Header");
  console.log(courses);
  return <h2>{courses.name}</h2>;
};

const Part = ({ part }) => {
  console.log("Visiting Part");
  return (
    <p>
      {part.name}, {part.exercises}
    </p>
  );
};

const Content = ({ courses }) => {
  console.log("Visiting Content");
  return (
    <>
      {courses.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Total = ({ courses }) => {
  console.log("Visiting Total");
  console.log(courses);
  const totalExercises = courses.parts.reduce(function (sum, part) {
    return sum + part.exercises;
  }, 0);

  return <strong>Total number of exercises {totalExercises}</strong>;
};

const Course = ({ courses }) => {
  console.log("Visiting course");
  console.log(courses);

  return (
    <>
      <h1>Web Development Curriculum</h1>
      {courses.map((courses) => (
        <div key={courses.id}>
          <Header courses={courses} />
          <Content courses={courses} />
          <Total courses={courses} />
        </div>
      ))}
    </>
  );
};
export default Course;
