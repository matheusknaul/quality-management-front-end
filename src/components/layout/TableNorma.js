import styles from './TableNormas.module.css'

function TableNorma({normas}){
    return(
        <div className={styles.table_container}>
            <table>
                <thead className={styles.cabecalho}>
                    <tr>
                        <th className={styles.coluna}>Código</th>
                        <th className={styles.coluna}>Descrição</th>
                        <th className={styles.coluna}>Ano da norma</th>
                        <th className={styles.coluna}>Status</th>
                        <th className={styles.coluna}>Última verificação</th>
                        <th className={styles.coluna}>Gerenciamento</th>
                    </tr>
                </thead>
                <tbody>
                    {normas.map((norma, index) => (
                        <tr key={index}>
                            <td>{norma.codigo}</td>
                            <td>{norma.descricao}</td>
                            <td>{norma.ano}</td>
                            <td>{norma.situacao}</td>
                            <td>{new Date(norma.data_verificacao).toLocaleDateString()}</td>
                            <td><button className={styles.button_gerenciar}>Teste</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableNorma;