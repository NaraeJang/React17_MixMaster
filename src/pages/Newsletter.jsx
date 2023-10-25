import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return null;
  }

  return redirect("/");
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          required
          defaultValue="namrae"
        />
      </div>
      {/* lastName */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          required
          defaultValue="namrae"
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-input"
          required
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: ".5rem" }}
        disabled={isSubmitting}>
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};
export default Newsletter;
