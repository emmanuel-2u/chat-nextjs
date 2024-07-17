import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Chat - Login'
};

export default function Home() {
    return (
        <section className="section has-text-centered fixed-section-width ">
            <h1 className="title mb-1">Good to see you again!</h1>
            <span className="is-size-7">Login to continue chatting.</span>
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
                    <button className="button is-primary">Log In</button>
                </div>
            </div>
            <div>
                <span className="is-size-7">Don't have an account?</span><br />
                <Link href='/register' className="is-size-6">Sign Up</Link>
            </div>
        </section>
    );
}