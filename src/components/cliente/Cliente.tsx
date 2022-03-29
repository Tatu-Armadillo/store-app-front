import Buttons from "../buttons/Buttons";
import Endereco from "../endereco/Endereco";

const Cliente = () => {
    return (
        <div className="container">
            <h3 className='text-center mb-3'>Cadastro de Cliente</h3>
            <div className='row '>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>NOME COMPLETO</label>
                    <input className='form-control' />
                </div>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>CPF</label>
                    <input className='form-control' />
                </div>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>TELEFONE</label>
                    <input className='form-control' />
                </div>
                <Endereco />
            </div>
            <Buttons />
        </div>
    );
}

export default Cliente;