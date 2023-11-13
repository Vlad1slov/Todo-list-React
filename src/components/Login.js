import { useState } from "react";

function Login() {
    const [data, setData] = useState({ username: "", password: "" });

    function handleFormSubmit(event) {
        event.preventDefault();

        console.log(data);
        alert(JSON.stringify(data));
    }

    function handleInputChange(text, name) {
        setData({ ...data, [name]: text.target.value });
    }

    return (
        <div>
            <h1>Login form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) => handleInputChange(e, "username")}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        onChange={(e) => handleInputChange(e, "passsword")}
                        value={data.password}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
