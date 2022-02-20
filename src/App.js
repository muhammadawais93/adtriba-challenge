import MediaPlan from "./components/MediaPlan";
import SocialGraph from "./components/SocialGraph";

function App() {
	return (
		<div className="adtriba-app">
			<h1 style={{ textAlign: 'center' }}>Adtriba Challenge</h1> 
			<MediaPlan />
			<SocialGraph />
		</div>
	);
}

export default App;
