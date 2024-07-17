import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Chat - Register'
};

export default function Register() {
    return (
        <section className="section has-text-centered fixed-section-width ">
            <h1 className="title mb-1">Welcome to simple chat!</h1>
            <span className="is-size-7">Register to start chatting.</span>
            <div className="field mt-5">
                <label className="label">Username</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Username" />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="password" placeholder="*********" />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-primary">Sign Up</button>
                </div>
            </div>
            <div>
                <span className="is-size-7">Don't have an account?</span><br />
                <Link href='/' className="is-size-6">Login</Link>
            </div>
        </section>
    );
}