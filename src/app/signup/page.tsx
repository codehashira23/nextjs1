"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
            alert("Signup successful");
            router.push("/login");
        } else {
            alert("Signup failed");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">

            <div className="bg-white p-6 rounded-lg shadow-lg w-96">

                <h2 className="text-2xl font-bold text-center mb-4" >Sign up</h2>
                <form onSubmit={handleSignup}>
                    <input type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input type="password"
                        placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} required
                        className="w-full p-2 border border-gray-300 rounded"
                    />

                    <select name="Role"
                        className="w-full p-2 border border-gray-300 rounded">
                        <option value="role" disabled> Select Role</option>
                        <option value="stude">student</option>
                        <option value="admin">admin</option>
                    </select>


                    <button type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Signup
                    </button>

                    <p className="text-center text-sm mt-4">
                        Already a user? <a href="/login" className="text-blue-600">Login</a>
                    </p>


                </form>
            </div>
        </div>
    );
}
