import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../../firebase';
import { setSignIn, setSignOut } from '../userSlice';

const useUser = () => {
    const dispatch = useDispatch()

    const actions = useMemo(() => ({
        handleSignIn() {
            auth.signInWithPopup(provider).then((result) => {
                dispatch(setSignIn({
                    user: result.user
                }))
            })
        },
        handleSignOut(){
            auth.signOut().then(() => {
                dispatch(setSignOut())
            }).catch((err) => alert(err.message))
        }
    }), [dispatch])

    return actions
}

export default useUser;