export default function Table(props) {
    return(
        <Table>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Roll Number</th>
                    <th>Total Marks</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row =>(
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.rollNumber}</td>
                            <td>{row.rollNumber}</td>
                            <td>{row.rollNumber}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}