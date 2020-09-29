
import data from 'data.json'
import WelcomeBack from 'WelcomeBack.js'

export default function App() {
    return(
        <div className="page-container">
            <WelcomeBack data={data} />
        </div>
    )
}