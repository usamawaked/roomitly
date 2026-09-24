import {Box} from "lucide-react";
import Button from "./ui/Button";
import {useOutletContext} from "react-router";

const Navbar = () => {
    const {isSignedIn, userName, signIn, signOut} = useOutletContext<AuthContext>()

    //asynchronous function that signs user in, and also serves to sign out if @isSignedIn is true
    const handleAuthClick = async () => {
        if (isSignedIn) {//checks if signed in
            try {
                await signOut();// signs user out
            }catch (e) {
                console.error(`Puter sign out failed: ${e}`);
            }
        }

        try {
            await signIn();//sign in
        }catch (e) {
            console.error(`Puter sign in failed: ${e}`);
        }
        return;
    };
    return (
        <header className="navbar">
            <nav className="inner">
                <div className="left">
                    <div className="brand">
                        <Box className={"logo"}/>
                        <span className="name">
                            Roomitly
                        </span>
                    </div>

                    <ul className="links">
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Community</a>
                        <a href="#">Enterprise</a>
                    </ul>
                </div>

                <div className="actions">
                    {isSignedIn ? (
                        <>
                            <span className="greeting">
                                {userName ? `Hi, ${userName} ` : 'Signed In'}
                            </span>

                            <Button size="sm" onClick={handleAuthClick} className="btn">
                                Log Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleAuthClick} size="sm" variant="ghost">
                                Log In
                            </Button>
                            <a href="#upload" className="cta">Get Started</a>
                        </>
                    )}


                </div>

            </nav>
        </header>
    )
}

export default Navbar