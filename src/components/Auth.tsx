import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface AuthFormValues {
  email: string;
  password: string;
}

const Auth: React.FC = () => {
  const formik = useFormik<AuthFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Email:", values.email);
      console.log("Password:", values.password);
    },
  });

  return (
    <div style={styles.container}>
      <form onSubmit={formik.handleSubmit} style={styles.form}>
        <h2>Authentication</h2>

        <div style={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={styles.input}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div style={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            style={styles.input}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={styles.error}>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    backgroundColor: "#f4f4f4",
  },
  form: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "300px",
  },
  field: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
    marginTop: "0.3rem",
  },
  button: {
    width: "100%",
    padding: "0.7rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "0.3rem",
  },
};

export default Auth;
