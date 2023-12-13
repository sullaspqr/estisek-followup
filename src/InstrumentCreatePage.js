import { useNavigate } from 'react-router-dom';

export function InstrumentCreatePage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements.name.value,
      price: e.target.elements.price.value,
      quantity: e.target.elements.quantity.value,
      imageURL: e.target.elements.imageURL.value,
    };

    fetch("https://kodbazis.hu/api/instruments", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then(() => {
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div className="p-5 content bg-whitesmoke text-center">
      <h2>Új hangszer</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Név:</label>
          <div>
            <input type="text" name="name" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Ár:</label>
          <div>
            <input type="number" name="price" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Darabszám:</label>
          <div>
            <input type="number" name="quantity" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Kép URL:</label>
          <div>
            <input type="text" name="imageURL" className="form-control" />
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Küldés
        </button>
      </form>
    </div>
  );
}
