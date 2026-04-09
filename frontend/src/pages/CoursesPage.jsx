import { useState } from "react";
import TableView from "../components/TableView";

const empty = { course_name: "", course_code: "", credits: "", instructor_id: "" };

export default function CoursesPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(empty);
  const [msg, setMsg] = useState(null);

  async function fetchAll() {
    setLoading(true);
    const res = await fetch("/api/courses");
    setData(await res.json());
    setLoading(false);
  }

  async function handleInsert(e) {
    e.preventDefault();
    setMsg(null);
    const res = await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setMsg({ type: "success", text: "Course added successfully." });
      setForm(empty);
    } else {
      setMsg({ type: "error", text: "Failed to add course." });
    }
  }

  return (
    <div>
      <h1 className="page-title">Courses</h1>

      <div className="card">
        <p className="card-title">All Courses</p>
        <button className="btn btn-primary" onClick={fetchAll} disabled={loading}>
          {loading ? "Loading..." : "Fetch Courses"}
        </button>
        <br /><br />
        <TableView data={data} loading={loading} />
      </div>

      <div className="card">
        <p className="card-title">Add Course</p>
        {msg && <div className={msg.type === "success" ? "msg-success" : "msg-error"}>{msg.text}</div>}
        <form onSubmit={handleInsert}>
          <div className="form-grid">
            {Object.keys(empty).map((field) => (
              <div className="form-group" key={field}>
                <label>{field.replace(/_/g, " ")}</label>
                <input
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required
                />
              </div>
            ))}
          </div>
          <button className="btn btn-primary" type="submit">Add Course</button>
        </form>
      </div>
    </div>
  );
}
