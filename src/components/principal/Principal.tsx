import { useState } from "react";
import Cliente from "../cliente/Cliente";
import Fornecedor from "../fornecedor/Fornecedor";

const Principal = () => {
    const [cliente, setCliente] = useState(false);
    const [fornecedor, setFornecedor] = useState(false);

    return (
        <div>
            {cliente && <Cliente />}
            {fornecedor && <Fornecedor />}
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <div className='d-grid gap-2 m-2'>
                    <button onClick={() => setCliente(!cliente)} className='btn btn-outline-warning btn-lg' >Cliente</button>
                    <button onClick={() => setFornecedor(!fornecedor)} className='btn btn-outline-success btn-lg'>Fornecedor</button>
                </div>
                {/* <div className='m-2 d-grid gap-2'>
                    <button className='btn btn-outline-danger btn-lg'>Produto</button>
                    <button className='btn btn-outline-primary btn-lg'>Venda</button>
                </div> */}
            </div>
        </div>
    );
}

export default Principal;