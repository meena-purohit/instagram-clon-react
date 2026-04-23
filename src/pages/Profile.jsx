import ProfileGrid from "../features/profile/ProfileGrid";
import ProfileHeader from "../features/profile/ProfileHeader";

export default function Profile() {
    return(
        <div className="bg-white rounded-xl shadow-sm">
            <ProfileHeader />

            <hr />

            <ProfileGrid />
        </div>
    )
}