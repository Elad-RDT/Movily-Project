import { useFormik } from "formik";
import React from "react";

const Formiktry = (props) => {
  const { addMovie } = props;
  console.log(props);
  const formik = useFormik({
    initialValues: {
      Name: "",
      Id: "",
      Gener: "",
      Rating: "",
      Img: "",
    },
  });

  console.table(formik.values);
  return (
    <form>
      <div>
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="Name"
          placeholder="Enter Name"
          value={formik.values.Name}
          onChange={formik.handleChange}
        />
        <br />
        <label>id</label>
        <input
          type="text"
          className="form-control"
          name="Id"
          value={formik.values.Id}
          onChange={formik.handleChange}
        />

        <br />

        <label>Select Genar</label>
        <select
          name="Gener"
          id=""
          value={formik.values.Gener}
          onChange={formik.handleChange}
          className="form-select"
        >
          <option key={"Action"} value="Action">
            Action
          </option>
          <option key={"Drama"} value="Drama">
            Drama
          </option>
          <option key={"Comedy"} value="Comedy">
            Comedy
          </option>
        </select>
        <br />

        <select
          name="Rating"
          id=""
          value={formik.values.Rating}
          onChange={formik.handleChange}
          className="form-select"
        >
          <option value="">Select Rating...</option>
          <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
          <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
          <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
          <option value="⭐️⭐️">⭐️⭐️</option>
          <option value="⭐️">⭐️</option>
        </select>
        <br />
        <label>Add Image</label>
        <input
          type="text"
          className="form-control"
          name="Img"
          value={formik.values.Img}
          onChange={formik.handleChange}
        />
        <br />

        <button
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            addMovie(event, formik.values);
          }}
        >
          Submit
        </button>
      </div>
    </form>

  );
};
export default Formiktry;
