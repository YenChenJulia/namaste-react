import { useState } from "react"
const User = ({name}) => {
	const [count, setCount] = useState(0)
	const [count2, setCount2] = useState(2)

	return (
		<div className="user-card">
			<h1>name: {name}</h1>
			<h1>{count}</h1>
			<h1>{count2}</h1>
			<h3>location: Taoyuan</h3>
		</div>
	)
}

export default User