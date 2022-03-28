
const Principal = () => {

    return (
        <main className='position-absolute top-50 start-50 translate-middle'>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='d-grid gap-2 m-2'>
                    <button className='btn btn-outline-warning btn-lg'>Cliente</button>
                    <button className='btn btn-outline-success btn-lg'>Fornecedor</button>
                </div>
                <div className='m-2 d-grid gap-2'>
                        <button className='btn btn-outline-danger btn-lg'>Produto</button>
                    <button className='btn btn-outline-primary btn-lg'>Venda</button>
                </div>
            </div>
        </main>
    );
}

export default Principal;