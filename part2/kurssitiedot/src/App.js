const Header = ({course}) => {
  console.log("Visiting Header");
  return <h1>{course.name}</h1>;
};

const Part = ({part}) => {
  console.log("Visiting Part");
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({course}) => {
  console.log("Visiting Content");
  return (
    <>
    {course.parts.map(part => 
      <Part key={part.id} part={part} />)}
    </>
  );
};

/*
const Total = (props) => {
  console.log("Visiting Total");
  console.log(props);
  return (
    <p>
      Total number of exercises{" "}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  );
};
*/

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course = {course} />
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Functional programming",
        exercises: 8,
        id: 4,
      }
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
