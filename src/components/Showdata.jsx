import React from "react";

function Showdata({ users }) {
    return (
        <div className="min-h-screen bg-black text-white p-10">

            <h1 className="text-5xl font-bold text-center mb-12 tracking-widest text-cyan-400">
                PHOTO GALLERY
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {users.map((photo) => (

                    <div
                        key={photo.id}
                        className="bg-zinc-900 border border-cyan-500 rounded-2xl p-4 hover:scale-105 transition duration-300"
                    >

                        {/* IMAGE */}
                       <img
    src={`https://picsum.photos/200/300?random=${photo.id}`}
    alt={photo.title}
    className="w-full h-48 object-cover rounded-xl mb-4"
/>

                        {/* ALBUM ID CIRCLE */}
                        <div className="flex justify-center mb-3">
                            <div className="w-10 h-10 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold">
                                {photo.id}
                            </div>
                        </div>

                        {/* TITLE */}
                        <h2 className="text-sm font-semibold text-center">
                            {photo.title}
                        </h2>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Showdata;