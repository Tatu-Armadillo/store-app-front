import Buttons from "../buttons/Buttons";
import Endereco from "../endereco/Endereco";

const Fornecedor = () => {
    return (
        <div className="container">
            <h3 className='text-center mb-3'>Cadastro de Fornecedor</h3>
            <div className='row'>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>NOME FORNECEDOR</label>
                    <input className='form-control' />
                </div>
                <div className='mb-3 col-12 col-md-6'>
                    <label className='form-label'>CNPJ</label>
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

export default Fornecedor;