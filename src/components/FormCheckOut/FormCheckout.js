import {useState} from "react";

const FormCheckout = ( { onGenerateOrder } ) => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    email2: '',
  });

  const [error,setError] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if(formData.email === formData.email2 && formData.email.length && formData.phone.length && formData.email.length && formData.name.length){
      onGenerateOrder(formData.name, formData.phone, formData.email)
    } else {
      if(formData.email.length === 0) {
        setError('Email esta vacio');
      }
      if(formData.email2.length === 0) {
        setError('Confirmar email esta vacio');
      }
      if(formData.phone.length === 0) {
        setError('telefono esta vacio');
      }
      if(formData.name.length === 0) {
        setError('nombre esta vacio');
      }
      if(formData.email !== formData.email2) {
        setError('Confirmar email, no coincide con email. Ambos dos deben ser iguales')
      }
    }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(formData.email && formData.email2 && formData.email === formData.email2){
      setError('')
    }
    setFormData({
      ...formData,
      [name]:  value,
    });
  };




  return (
    <div className='formContainer'>
      <form onSubmit={onSubmit}>
        <div className='inputField'>
          <label>
            <span>Nombre:</span>
          </label>
          <input
            type='text'
            name='name'
            onChange={handleChange}
            placeholder='Your name'
            value={formData.name}
          />
        </div>
        <div className='inputField'>
          <label>
            <span>Telefono:</span>
          </label>
          <input
            type='tel'
            name='phone'
            onChange={handleChange}
            placeholder='Telefono'
            value={formData.phone}
          />
        </div>
        <div className='inputField'>
          <label>
            <span>Email:</span>
          </label>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            placeholder='Email'
            value={formData.email}
          />
        </div>
        <div className='inputField'>
          <label>
            <span>Email:</span>
          </label>
          <input
            type='email'
            name='email2'
            onChange={handleChange}
            placeholder='Confirmar email'
            value={formData.email2}
          />
        </div>
        <div>
          {error}
        </div>
        <button type='submit'>Generar Orden</button>
      </form>
    </div>
  )
}

export default FormCheckout