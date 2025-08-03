import { useState } from 'react';

const VolunteerForm = () => {
  const [form, setForm] = useState({ name: '', email: '', interest: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for volunteering, " + form.name + "!");
    setForm({ name: '', email: '', interest: '' });
  };

  return (
    <section id="volunteer" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center">Volunteer With Us</h2>
        <form className="row g-3 mt-4" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="col-12">
            <label className="form-label">Why do you want to volunteer?</label>
            <textarea className="form-control" name="interest" rows="4" value={form.interest} onChange={handleChange} required />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">Submit Application</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
