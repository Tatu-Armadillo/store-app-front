
const Endereco = () => {
    return (
        <div className="container">
            <div className='row '>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>CEP</label>
                    <input className='form-control' />
                </div>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>NUMERO</label>
                    <input className='form-control' />
                </div>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>RUA</label>
                    <input className='form-control' />
                </div>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>QUADRA</label>
                    <input className='form-control' />
                </div>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>BAIRRO</label>
                    <input className='form-control' />
                </div>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>CIDADE</label>
                    <input className='form-control' />
                </div>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>OBS</label>
                    <input className='form-control' />
                </div>
            </div>
        </div>
    );
}

export default Endereco;