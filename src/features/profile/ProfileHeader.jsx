export default function ProfileHeader() {
    return(
        <div className="flex flex-col sm:flex-row items-center gap-6 p-4">
            {/* Avatar */}
            <img 
            src="https://i.pravatar.cc/150?img=12" 
            alt="profile" 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
            />

            { /* Status Section */ }
            <div className="text-center sm:text-left">
               <h2 className="text-xl font-semibold"> meena_dev</h2>
               <div className="flex gap-6 mt-2 justify-center sm:justify-start">
                <p><strong>12</strong>posts</p>
                <p><strong>540</strong>followers</p>
                <p><strong>180</strong>following</p>
               </div>
               {/* Bio */}
               <div className="mt-2 text-sm">
                <p className="font-semibold">
                   Meena Purohit
                </p>
                <p>
                    Learning React Step by Step
                </p>
               </div>
            </div>
        </div>
    )
}