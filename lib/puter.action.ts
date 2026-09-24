import {puter} from "@heyputer/puter.js";

//use Puter auth methods
export const signIn = async () => await puter.auth.signIn();
export const signOut = async () => puter.auth.signOut();

//get current user signed in
export const getCurrentUser = async () =>{
    try {
        return await puter.auth.getUser();
    } catch {
        return null;
    }
}