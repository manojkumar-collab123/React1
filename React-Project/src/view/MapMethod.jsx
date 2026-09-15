function MapMethod() {
  const students = [
    { id: 1, name: "Manoj", age: 19, course: "BCA" },
    { id: 2, name: "Rahul", age: 20, course: "BCA" },
    { id: 3, name: "Aman", age: 18, course: "BCA" }
  ];
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Student List
      </h1>
      {students.map((student) => (
        <div
          key={student.id}
          className="bg-slate-200 p-4 mb-3 rounded-lg"
        >
            <h1>id : {student.id}</h1>
          <h2 className="text-xl font-bold">
            {student.name}
          </h2>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}
export default MapMethod;
