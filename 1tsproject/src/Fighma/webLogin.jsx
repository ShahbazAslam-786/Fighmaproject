import { useState } from "react";
import { Link } from "react-router";

export const WebLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const webLoginData = {
            email,
            password,
        };

        console.log("Login Data:", webLoginData);
    };

    return (
        <div className="main-container">
            <div className="login-container">
                <div className="login-form">
                  
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            name="email"
                            required
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />


                        <div className="password-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <span
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
