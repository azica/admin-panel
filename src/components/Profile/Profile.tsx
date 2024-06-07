import { useGetUserQuery } from "shared/store/queries/auth.query"

export const Profile = () => {

    const { data } = useGetUserQuery()

    console.log(data);

    return (
        <div>Profile</div>
    )
}

export default Profile